import React, { useEffect, useState } from 'react';
import '../index.css';
import { data } from '../data';
import Rating from '../components/Rating';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useSelector, useDispatch } from 'react-redux';
import {
	detailsProduct,
	electricLaptopProductDetails,
	electricMobileProductDetails,
	electricProductDetails,
	saveViewHistory,
} from '../actions/productActions';
import { addItemToCart, addToCartItems } from '../actions/cartAction';
import SubNavbar from '../components/SubNavbar';
import ElectronicCards from '../components/ElectronicCards';
import { PRODUCT_VIEWES_HISTORY } from '../types/type';
import SimpleBreadcrumbs from '../components/Breadcrumb';
const ProductDetailsScreen = (props) => {
	const dispatch = useDispatch();
	const [qty, setQty] = useState(1);
	const productId = props.match.params.id;
	const category = props.match;
	const eletronicProductDetails = useSelector(
		(state) => state.eletronicProductDetails
	);
	const mobileDetails = useSelector((state) => state.mobileDetails);
	const laptopDetails = useSelector((state) => state.laptopDetails);
	const { mobiles } = mobileDetails;
	const { laptops } = laptopDetails;
	const { loading, error, product } = eletronicProductDetails;
	const recentlyViewed = useSelector((state) => state.recentlyViewed);
	const { viewedHistory } = recentlyViewed;
	const [selectImage, setSelectImage] = useState(null);
	const [history, setHistory] = useState([]);
	console.log('.-----mobiles-----', mobiles);
	console.log('.-----laptops-----', laptops);
	useEffect(() => {
		dispatch(electricProductDetails(productId));
		if (product.subcategory === 'Mobile') {
			dispatch(electricMobileProductDetails());
		} else {
			dispatch(electricLaptopProductDetails());
		}
	}, [dispatch, productId]);

	console.log('-------product------', product);

	const addToCart = () => {
		console.log('=-----adtocart-------');
		dispatch(addItemToCart(productId, qty));
		// props.history.push(`/cart/${productId}?qty=${qty}`);
	};
	viewedHistory.push;
	return (
		<div>
			<div>
				<SubNavbar />
			</div>
			<SimpleBreadcrumbs />
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
					r<MessageBox varient='danger'>{error}</MessageBox>
				</div>
			) : (
				<React.Fragment>
					<div className='row' style={{ flexWrap: 'wrap' }}>
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
										<li style={{ width: '50rem' }}>
											<h2>{product.name}</h2>
										</li>
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
											{product.countInStock > 0 && (
												<div className='qtn'>
													<p>Qty:</p>

													<select
														className='product-qtn'
														value={qty}
														onChange={(e) => setQty(e.target.value)}>
														{[...Array(product.countInStock).keys()].map(
															(x) => (
																<option key={x + 1} value={x + 1}>
																	{x + 1}
																</option>
															)
														)}
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
												<button className='primary-btn-wishlist'>
													Wishlist
												</button>
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
						<div>
							<h3 style={{ margin: '5px 30px' }}>Similar Products</h3>
							{product.subcategory === 'Mobile' ? (
								<div className='flex-scroll-ctn'>
									{mobiles &&
										mobiles.map((items) => (
											<ElectronicCards key={items._id} item={items} />
										))}
								</div>
							) : (
								<div className='flex-scroll-ctn'>
									{laptops &&
										laptops.map((items) => (
											<ElectronicCards key={items._id} item={items} />
										))}
								</div>
							)}
						</div>
					</div>
				</React.Fragment>
			)}
		</div>
	);
};

export default ProductDetailsScreen;
