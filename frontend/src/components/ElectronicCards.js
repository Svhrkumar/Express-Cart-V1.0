import React from 'react';
import '../styles/cards.css';
import p1 from '../images/p1.jpg';
import { Link } from 'react-router-dom';
import Rating from './Rating';
const ElectronicCards = ({ item }) => {
	return (
		<div>
			<div key={item._id} className='card'>
				<div className='card-image-ctn'>
					<Link to={`/products/electronics/${item._id}`}>
						<div
							style={{
								objectFit: 'cover',
								display: 'grid',
								placeItems: 'center',
							}}>
							<img
								style={{
									width: 'auto',
									height: '8rem',
									margin: '0px 5px',
								}}
								src={item.image[0]}
								alt='product'
							/>
						</div>
					</Link>
				</div>
				<div className='card-body'>
					<Link to={`/products/electronics/${item._id}`}>
						<h4 style={{ color: '#203040' }}>{item.name.slice(0, 20)}</h4>
					</Link>
					<Rating rating={item.rating} numReviews={item.numReviews} />
					<div className='price'>
						₹{''}
						{item.price}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ElectronicCards;
