import React, { useEffect, useState } from 'react';
import '../index.css';
import { data } from '../data';
import Rating from '../components/Rating';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useSelector, useDispatch } from 'react-redux';
import {
	detailsProduct,
	electricProductDetails,
} from '../actions/productActions';
import { addItemToCart, addToCartItems } from '../actions/cartAction';
import SubNavbar from '../components/SubNavbar';
const ProductDetailsScreen = (props) => {
	const dispatch = useDispatch();
	const [qty, setQty] = useState(1);
	const productId = props.match.params.id;
	const category = props.match;
	const eletronicProductDetails = useSelector(
		(state) => state.eletronicProductDetails
	);
	const { loading, error, product } = eletronicProductDetails;
	console.log('.-----eletronicProductDetails-----', eletronicProductDetails);
	useEffect(() => {
		dispatch(electricProductDetails(productId));
	}, [dispatch, productId]);
	console.log('-------category------', category);
	const addToCart = () => {
		console.log('=-----adtocart-------');
		dispatch(addItemToCart(productId, qty));
		// props.history.push(`/cart/${productId}?qty=${qty}`);
	};
	return (
		<div>
			<div style={{ marginTop: '30px' }}>
				<SubNavbar />
			</div>
			{loading ? (
				<div
					style={{
						display: 'grid',
						placeItems: 'center',
						margin: '300px 500px',
					}}>
					<LoadingBox />
				</div>
			) : error ? (
				<div style={{ margin: '300px 500px' }}>
					<MessageBox varient='danger'>{error}</MessageBox>
				</div>
			) : (
				<div className='row top '>
					<div className='col-2'>
						<img className='large' src={product.image[0]} />
					</div>
					<div className='details-container'>
						<div className='col-1'>
							<div className=' product-card'>
								<ul>
									<li style={{ width: '50rem' }}>
										<h1>{product.name}</h1>
									</li>
									<li>
										<div className='price-card'>
											<div>
												<h2>Rs. {product.price}</h2>
											</div>
											<div>
												<h4 className='price-card-taxes'>
													inclusive of all taxes
												</h4>
											</div>
										</div>
									</li>
									<li></li>
									<li>
										<div className='price-card-status'>
											<div>
												<h4>
													{product.countInStock > 0 ? (
														<span className='success'>In Stock</span>
													) : (
														<span className='error'>Out of Stock</span>
													)}
												</h4>
											</div>
										</div>
									</li>

									<li>
										{product.countInStock > 0 && (
											<div className='qtn'>
												<p>Qty:</p>

												<select
													className='product-qtn'
													value={qty}
													onChange={(e) => setQty(e.target.value)}>
													{[...Array(product.countInStock).keys()].map((x) => (
														<option key={x + 1} value={x + 1}>
															{x + 1}
														</option>
													))}
												</select>
											</div>
										)}
									</li>
									<div className='btn-ctn'>
										{product.countInStock > 0 ? (
											<li>
												<button onClick={addToCart} className='primary-btn'>
													Add to Cart
												</button>
											</li>
										) : null}

										<li>
											<button className='primary-btn-wishlist'>Wishlist</button>
										</li>
									</div>
								</ul>
							</div>
							<ul></ul>
						</div>

						<hr style={{ width: '80%' }} />
						<div className='col-1'>
							<ul>
								<li style={{ width: '50rem' }}>
									<h3>Description:</h3>
									<br />
									{product.description}
								</li>
								<br></br>
								<li>
									<Rating
										rating={product.rating}
										numReviews={product.numReviews}
									/>
								</li>
							</ul>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductDetailsScreen;
