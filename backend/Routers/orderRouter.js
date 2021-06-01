import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModal.js';
import { isAdmin, isAuth } from '../utils.js';
const orderRouter = express.Router();

orderRouter.get(
	'/',
	isAuth,
	isAdmin,
	expressAsyncHandler(async (req, res) => {
		const orders = await Order.find({}).populate('user', 'name');
		res.send(orders);
	})
);

orderRouter.get(
	'/mine',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const orders = await Order.find({ user: req.user._id });
		res.send(orders);
	})
);
orderRouter.post(
	'/',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		console.log('-------------reqbody----------', req.body.orderItems);
		if (req.body.orderItems.length === 0) {
			res.status(400).send({
				message: 'Cart is empty',
			});
		} else {
			const order = new Order({
				orderItems: req.body.orderItems,
				shippingAddress: req.body.shippingAddress,
				paymentMethod: req.body.paymentMethod,
				totalPrice: req.body.totalPrice,
				user: req.user._id,
			});
			console.log('--------------order-------------', req.body.orderItems);
			console.log(
				'-------------shippingAddress-------------',
				req.body.shippingAddress
			);
			const createdOrder = await order.save();
			res
				.status(201)
				.send({ message: 'new Order Created', order: createdOrder });
		}
	})
);

orderRouter.put(
	'/:id/pay',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const order = await Order.findById(req.params.id);
		if (order) {
			order.isPaid = true;
			order.paidAt = Date.now();
			order.paymentResult = {
				id: req.body.id,
				status: req.body.status,
				update_time: req.body.update_time,
				email_address: req.body.email_address,
			};
			const updatedOrder = await order.save();
			res.send({ message: 'Order Paid', order: updatedOrder });
		} else {
			res.status(404).send({ message: 'Order Not Found' });
		}
	})
);

orderRouter.put(
	'/:id/deliver',
	isAuth,
	isAdmin,
	expressAsyncHandler(async (req, res) => {
		const order = await Order.findById(req.params.id);
		console.log('----------------order delivery --------', order);
		if (order) {
			order.isDeliverd = true;
			order.deliveredAt = Date.now();

			const updatedOrder = await order.save();
			console.log('----------------order  --------', updatedOrder);
			res.send({ message: 'Order Delivered', order: updatedOrder });
		} else {
			res.status(404).send({ message: 'Order Not Found' });
		}
	})
);

orderRouter.get(
	'/:id',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const order = await Order.findById(req.params.id);
		if (order) {
			res.send(order);
		} else {
			res.status(404).send({ message: 'Order not found' });
		}
	})
);

orderRouter.delete(
	'/:id',
	isAuth,
	isAdmin,
	expressAsyncHandler(async (req, res) => {
		const order = await Order.findById(req.params.id);
		if (order) {
			const deletedOrder = order.remove();
			res.send({ message: 'order deleted successfully', order: deletedOrder });
		} else {
			res.send({ message: 'order not found' });
		}
	})
);
export default orderRouter;
