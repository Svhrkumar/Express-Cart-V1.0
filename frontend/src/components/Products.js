import React from 'react';
import '../styles/product.css';
import p1 from '../images/p1.jpg';
import { Link } from 'react-router-dom';
import Rating from './Rating';
const Products = ({ item }) => {
	return (
		<div>
			<div key={item._id} className='card'>
				<Link to={`/products/${item._id}`}>
					<img className='medium' src={item.image[0]} alt='product' />
				</Link>
				<div className='card-body'>
					<Link to={`/products/${item._id}`}>
						<h4 style={{ color: '#203040' }}>{item.name}</h4>
					</Link>
					<Rating rating={item.rating} numReviews={item.numReviews} />
					<div className='price'>{item.price}</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
