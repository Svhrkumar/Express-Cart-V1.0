import express from 'express';
import { data } from '../data.js';
import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productsModel.js';
import { isAdmin, isAuth } from '../utils.js';
import Electronics from '../models/electronicsModel.js';
const electronicRouter = express.Router();

// electronicRouter.get(
// 	'/seed',
// 	expressAsyncHandler(async (req, res) => {
// 		// await Product.remove({});
// 		const createdElectronics = await Electronics.insertMany(data.Electronics);

// 		res.send({ createdElectronics });
// 	})
// );
electronicRouter.get(
	'/',
	expressAsyncHandler(async (req, res) => {
		const electronicItems = await Electronics.find({});
		if (electronicItems) {
			res.send({ electronicItems });
		} else {
			res.status(404).send({ message: 'Product Not Found' });
		}
	})
);
electronicRouter.get(
	'/:id',
	expressAsyncHandler(async (req, res) => {
		const product = await Electronics.findById(req.params.id);
		if (product) {
			res.send({ product });
		} else {
			res.status(404).send({ message: 'Product Not Found' });
		}
	})
);
electronicRouter.get(
	'/mobiles',
	expressAsyncHandler(async (req, res) => {
		const mobileItems = await Electronics.find({ category: 'Mobile' });
		if (mobileItems) {
			res.send({ mobileItems });
		} else {
			res.status(404).send({ message: 'Product Not Found' });
		}
	})
);
electronicRouter.get(
	'/laptops',
	expressAsyncHandler(async (req, res) => {
		const laptopsItems = await Electronics.find({ category: 'Laptops' });
		if (laptopsItems) {
			res.send({ laptopsItems });
		} else {
			res.status(404).send({ message: 'Product Not Found' });
		}
	})
);
electronicRouter.post(
	'/',
	isAuth,
	isAdmin,
	expressAsyncHandler(async (req, res) => {
		console.log('---------create product---------', req.body.product);
		const product = new Electronics({
			name: req.body.product.name,
			image: req.body.product.image,
			price: req.body.product.price,
			category: req.body.product.category,
			subcategory: req.body.product.subCategory,
			Brand: req.body.product.brand,
			countInStock: req.body.product.countInStock,
			rating: 4.5,
			numReviews: 5,

			discount: req.body.product.discount,
			description: req.body.product.description,
		});
		const createdProduct = await product.save();
		res.send({ message: 'Product Created', product: createdProduct });
	})
);
electronicRouter.get(
	'/:id',
	expressAsyncHandler(async (req, res) => {
		const product = await Electronics.findById(req.params.id);
		if (product) {
			res.send({ product });
		} else {
			res.status(404).send({ message: 'Product Not Found' });
		}
	})
);

export default electronicRouter;
