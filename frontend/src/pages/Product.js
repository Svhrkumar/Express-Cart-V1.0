import React, { useEffect, useState } from 'react';
import '../index.css';
import { data } from '../data';
import Rating from '../components/Rating';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import { addToCartItems } from '../actions/cartAction';
import Fade from 'react-reveal/Fade';
const Product = (props) => {
	const dispatch = useDispatch();
	const [qty, setQty] = useState(1);
	const productId = props.match.params.id;
	const category = props.match;
	const [selectImage, setSelectImage] = useState(null);
	const productDetails = useSelector((state) => state.productDetails);
	const { loading, error, product } = productDetails;
	console.log('.------product-& -id-----', productId);
	useEffect(() => {
		dispatch(detailsProduct(productId, category));
	}, [dispatch, productId]);
	console.log('-------category------', category);
	const addToCart = () => {
		console.log('=-----adtocart-------');
		dispatch(addToCartItems(productId, qty));
		// props.history.push(`/cart/${productId}?qty=${qty}`);
	};
	return (
		<div>
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
					<div className='product-img-ctn'>
						<div className='product-img-display'>
							{selectImage === null ? (
								<img className='large' src={product.image[0]} />
							) : (
								<img className='large' src={selectImage} />
							)}
						</div>
						<div>
							<div className='product-img-list-ctn'>
								{product.image.map((pic, key) => {
									console.log('------images---', pic);
									return (
										<div
											key={key}
											className='product-img-list'
											onClick={() => setSelectImage(pic)}>
											<img className='product-img-list-item' src={pic} />
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div className='details-container'>
						<div className='col-1'>
							<div className=' product-card'>
								<ul>
									<li>
										<h1>{product.name}</h1>
									</li>
									<br></br>
									<li>
										<div className='price-card'>
											<div>
												<h3>Rs. {product.price}</h3>
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
										<h4>Sizes: </h4>
										{product.availableSizes.map((x) => (
											<span>
												<button className='sizes-btn'>
													<b>{x}</b>
												</button>
											</span>
										))}
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
						</div>
						<hr style={{ width: '80%' }} />
						<div className='col-1'>
							<ul>
								<li>
									Description:
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

export default Product;
