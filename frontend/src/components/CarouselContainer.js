import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useSelector, useDispatch } from 'react-redux';
import { listCarouselOffers } from '../actions/offersAction';

const CarouselContainer = ({ images }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(listCarouselOffers());
	}, [dispatch]);
	console.log('------------carousel images--------', images);
	return (
		<div>
			<Carousel showArrows autoPlay showThumbs={false}>
				{images &&
					images.map((data) => (
						<div key={data._id}>
							<img
								src={data.image}
								alt={data.offerName}
								style={{ height: '400px' }}
							/>
						</div>
					))}
			</Carousel>
		</div>
	);
};

export default CarouselContainer;
