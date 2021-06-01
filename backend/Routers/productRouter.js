import express from 'express';
import { data } from '../data.js';
import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productsModel.js';
import { isAdmin, isAuth } from '../utils.js';
import Electronics from '../models/electronicsModel.js';
const productRouter = express.Router();

productRouter.get(
	'/',
	expressAsyncHandler(async (req, res) => {
		const products = await Product.find({});
		res.send({ products });
	})
);

productRouter.get(
	'/seed',
	expressAsyncHandler(async (req, res) => {
		// await Product.remove({});
		const createdProducts = await Product.insertMany(data.products);
		res.send({ createdProducts });
	})
);

productRouter.get(
	'/:id',
	expressAsyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id);
		if (product) {
			res.send({ product });
		} else {
			res.status(404).send({ message: 'Product Not Found' });
		}
	})
);

productRouter.post(
	'/',
	isAuth,
	isAdmin,
	expressAsyncHandler(async (req, res) => {
		console.log('---------create product---------', req.body.product);
		const product = new Product({
			name: req.body.product.name,
			image: req.body.product.image,
			price: req.body.product.price,
			category: req.body.product.category,
			subcategory: req.body.product.subCategory,
			Brand: req.body.product.brand,
			countInStock: req.body.product.countInStock,
			rating: 4.5,
			numReviews: 5,
			availableSizes: [40, 42, 44, 46],
			discount: req.body.product.discount,
			description: req.body.product.description,
		});
		const createdProduct = await product.save();
		res.send({ message: 'Product Created', product: createdProduct });
	})
);

productRouter.put(
	'/:id',
	isAuth,
	isAdmin,
	expressAsyncHandler(async (req, res) => {
		const productId = req.params.id;
		const product = await Product.findById(productId);
		console.log('------product update-----', product);
		if (product) {
			product.name = req.body.product.name;
			product.price = req.body.product.price;
			product.image = req.body.product.image;
			product.category = req.body.product.category;
			product.Brand = req.body.product.brand;
			product.description = req.body.product.description;
			product.availableSizes = req.body.product.availableSize;
			product.discount = req.body.product.discount;
			product.countInStock = req.body.product.countInStock;

			console.log('-------updated-----', req.body.product.price);
			const updatedproduct = await product.save();
			res.send({ message: 'Product Updated', product: updatedproduct });
		} else {
			res.status(404).send({ message: 'product not found' });
		}
	})
);

productRouter.delete(
	'/:id',
	isAuth,
	isAdmin,
	expressAsyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id);
		if (product) {
			const deleteProduct = await product.remove();
			res.send({ message: 'Product Deleted', product: deleteProduct });
		} else {
			res.status(404).send({ message: 'product not found' });
		}
	})
);
//Electronics Routers

export default productRouter;
