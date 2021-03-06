import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import SubNavbar from '../components/SubNavbar';
import image from '../images/demo.jpeg';

import { Link } from 'react-router-dom';
//redux//
import { useSelector, useDispatch } from 'react-redux';
import { listElectrinics, listProducts } from '../actions/productActions';
import SimpleBreadcrumbs from '../components/Breadcrumb';

const Home = () => {
	const dispatch = useDispatch();
	const electronicProducts = useSelector((state) => state.electronicProducts);
	const { loading, error, electronicItems } = electronicProducts;
	const productList = useSelector((state) => state.productList);
	const { products } = productList;

	useEffect(() => {
		dispatch(listProducts());
		dispatch(listElectrinics());
	}, [dispatch]);
	console.log('eletronic items', electronicItems);
	return (
		<React.Fragment>
			<div>
				<div>
					<SubNavbar />
				</div>

				<div className='home-container'>
					<div className='main-banners-ctn'>
						<Banner />
					</div>
					<SimpleBreadcrumbs />
					<div style={{ margin: '1rem 5rem', color: '#242B2E' }}>
						<div className='scroll-cards-ctn'>
							<h3 style={{ margin: '10px' }}>Deal of the day slider</h3>
							<hr />
							<div className='scroll-cards-ctn-in'>
								{electronicItems &&
									electronicItems.slice(1, 9).map((product) => (
										<div className='scroll-card' key={product._id}>
											<div className='scroll-card-image-ctn'>
												<img
													src={product.image[0]}
													className='scroll-card-image'
												/>
											</div>
											<div className='scroll-card-content'>
												<p style={{ margin: '10px' }}>
													<b>{product.name.slice(0, 19)}</b>
												</p>
												<p style={{ margin: '10px' }}>
													<b>₹ {product.price}</b>
												</p>

												<p style={{ color: '#22CB5C' }}>
													{Math.floor((100 * product.discount) / product.price)}
													% off
												</p>
											</div>
											<div></div>
										</div>
									))}
							</div>
						</div>
					</div>
					<div style={{ margin: '5rem 5rem', color: '#242B2E' }}>
						<h3 style={{ margin: '10px' }}>Mobile & Laptops</h3>
						<hr />
						<div className='scroll-cards-ctn'>
							<div className='scroll-cards-ctn-in'>
								{electronicItems &&
									electronicItems.slice(9, 15).map((product) => (
										<div className='scroll-card' key={product._id}>
											<Link to={`/products/electronics/${product._id}`}>
												<div className='scroll-card-image-ctn'>
													<img
														src={product.image[0]}
														className='scroll-card-image'
													/>
												</div>
											</Link>
											<div className='scroll-card-content'>
												<Link
													to={`/products/electronics/${product._id}`}
													style={{ color: 'black' }}>
													<p style={{ margin: '10px' }}>
														<b>{product.name.slice(0, 19)}</b>
													</p>
													<p style={{ margin: '10px' }}>
														<b>₹ {product.price}</b>
													</p>

													<p style={{ color: '#22CB5C' }}>
														{Math.floor(
															(100 * product.discount) / product.price
														)}
														% off
													</p>
												</Link>
											</div>
											<div></div>
										</div>
									))}
							</div>
						</div>
					</div>
					<div style={{ margin: '5rem 5rem', color: '#242B2E' }}>
						<h3 style={{ margin: '10px' }}>Latest Fashion</h3>
						<hr />
						<div className='scroll-cards-ctn'>
							<div className='scroll-cards-ctn-in'>
								{products &&
									products.slice(0, 6).map((product) => (
										<div className='scroll-card' key={product._id}>
											<Link to={`/products/${product._id}`}>
												<div className='scroll-card-image-ctn'>
													<img
														src={product.image[0]}
														className='scroll-card-image'
													/>
												</div>
											</Link>
											<div className='scroll-card-content'>
												<Link
													to={`/products/${product._id}`}
													style={{ color: 'black' }}>
													<p style={{ margin: '10px' }}>
														<b>{product.name.slice(0, 19)}</b>
													</p>
													<p style={{ margin: '10px' }}>
														<b>₹ {product.price}</b>
													</p>

													<p style={{ color: '#22CB5C' }}>
														{Math.floor(
															(100 * product.discount) / product.price
														)}
														% off
													</p>
												</Link>
											</div>
											<div></div>
										</div>
									))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Home;
