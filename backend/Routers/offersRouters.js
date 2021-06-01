import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Offers from '../models/offersModel.js';

import { isAdmin, isAuth } from '../utils.js';
const offerRouter = express.Router();

offerRouter.post(
	'/',
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const offers = new Offers({
			image: req.body.banner.image,
			occassion: req.body.banner.occassion,
			offerName: req.body.banner.offerName,
			category: req.body.banner.category,
		});
		const createdOffer = await offers.save();
		res.send({ message: 'offer Created', carouselOffer: createdOffer });
	})
);

offerRouter.get(
	'/banners',
	expressAsyncHandler(async (req, res) => {
		const carouselOffers = await Offers.find({});
		res.send({ carouselOffers });
	})
);

export default offerRouter;
