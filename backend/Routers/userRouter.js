import express from 'express';
import User from '../models/userModel.js';
import { data } from '../data.js';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import { generateToken, isAdmin, isAuth, isSellerOrAdmin } from '../utils.js';

const userRouter = express.Router();

userRouter.get(
	'/seed',
	expressAsyncHandler(async (req, res) => {
		const createUsers = await User.insertMany(data.users);
		res.send({ createUsers });
	})
);

userRouter.post(
	'/signin',
	expressAsyncHandler(async (req, res) => {
		const user = await User.findOne({ email: req.body.email });
		console.log('--------------signin-------------', user);
		if (user) {
			if (bcrypt.compareSync(req.body.password, user.password)) {
				res.send({
					_id: user._id,
					name: user.name,
					email: user.email,
					isAdmin: user.isAdmin,
					isSeller: user.isSeller,
					token: generateToken(user),
				});
				return;
			}
		}
		res.status(404).send({ meassge: 'invalid E-mail or password' });
		res.send({ createUsers });
	})
);

userRouter.post(
	'/register',
	expressAsyncHandler(async (req, res) => {
		const user = new User({
			name: req.body.name,
			email: req.body.email,
			password: bcrypt.hashSync(req.body.password, 8),
		});
		console.log('--------------signin-------------', user);
		const createdUser = await user.save();

		res.send({
			_id: createdUser._id,
			name: createdUser.name,
			email: createdUser.email,
			isAdmin: createdUser.isAdmin,
			isSeller: createdUser.isSeller,
			token: generateToken(createdUser),
		});
		return;
	})
);

userRouter.get(
	'/:id',
	expressAsyncHandler(async (req, res) => {
		const user = await User.findById(req.params.id);
		if (user) {
			res.send(user);
		} else {
			res.status(404).send({
				message: 'user not found',
			});
		}
	})
);

userRouter.put(
	'/profile',
	isAuth,

	expressAsyncHandler(async (req, res) => {
		console.log('-------update-----', req.user._id);
		const user = await User.findById(req.user._id);
		if (user) {
			user.name = req.body.userName || user.name;
			user.email = req.body.email || user.email;
			if (user.isSeller) {
				user.seller.name = req.body.sellerName || user.seller.name;
				user.seller.logo = req.body.sellerLogo || user.seller.logo;
				user.seller.description =
					req.body.sellerDescription || user.seller.description;
			}
			if (req.body.password) {
				user.password = bcrypt.hashSync(req.body.password, 8);
			}
			const updatedUser = await user.save();
			res.send({
				_id: updatedUser._id,
				name: updatedUser.name,
				email: updatedUser.email,
				isAdmin: updatedUser.isAdmin,
				isSeller: user.isSeller,

				token: generateToken(updatedUser),
			});
		}
	})
);

userRouter.get(
	'/',
	isAuth,
	isAdmin,
	expressAsyncHandler(async (req, res) => {
		const users = await User.find({});
		res.send(users);
	})
);
userRouter.delete(
	'/:id',
	isAuth,
	isAdmin,
	expressAsyncHandler(async (req, res) => {
		const user = await User.findById(req.params.id);
		if (user) {
			if (user.email === 'admin@example.com') {
				res.status(400).send({ message: 'Can Not Delete Admin User' });
				return;
			}
			const deleteUser = await user.remove();
			res.send({ message: 'User Deleted', user: deleteUser });
		} else {
			res.status(404).send({ message: 'User Not Found' });
		}
	})
);

userRouter.put(
	'/:id',
	isAuth,
	isAdmin,
	expressAsyncHandler(async (req, res) => {
		const user = await User.findById(req.params.id);
		if (user) {
			user.name = req.body.userData.name;
			user.email = req.body.userData.email;
			user.isSeller = req.body.userData.isSeller;
			user.isAdmin = req.body.userData.isAdmin;
			//user.isAdmin = req.body.isAdmin || user.isAdmin;
			const updatedUser = await user.save();
			res.send({ message: 'User Updated', user: updatedUser });
		} else {
			res.status(404).send({ message: 'User Not Found' });
		}
	})
);
export default userRouter;
