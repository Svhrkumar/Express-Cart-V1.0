import React, { useEffect, useState } from 'react';
//redux//
import { useSelector, useDispatch } from 'react-redux';
import { listCarouselOffers } from '../actions/offersAction';

const Banner = () => {
	const homeBannersList = useSelector((state) => state.homeBannersList);
	const [count, setCount] = useState(0);
	const [offerImages, setOfferImages] = useState();
	const { bannersImages } = homeBannersList;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(listCarouselOffers());
	}, []);

	useEffect(() => {
		const images = bannersImages && bannersImages.carouselOffers[count];
		const length = bannersImages && bannersImages.carouselOffers.length;
		setOfferImages(images);
		console.log('banner images', images, count, length);
		if (count < 0 || count === length) {
			setCount(0);
		} else {
			setTimeout(() => setCount(count + 1), 10000);
		}
	}, [bannersImages, count]);

	setTimeout(1000, () => setCount(count + 1));

	return (
		<div className='banners'>
			<div className='banner-left-button' onClick={() => setCount(count - 1)}>
				<i class='fal fa-angle-left fa-3x'></i>
			</div>

			<img src={offerImages && offerImages.image} className='banner-img' />

			<div className='banner-right-button' onClick={() => setCount(count + 1)}>
				<i class='fal fa-angle-right fa-3x'></i>
			</div>
		</div>
	);
};

export default Banner;
