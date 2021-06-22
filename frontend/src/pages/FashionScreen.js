import React, { useEffect, useState } from 'react';
import '../index.css';
import { data } from '../data';
import Products from '../components/Products';
import { listProducts } from '../actions/productActions';
import { listElectrinics } from '../actions/productActions';
import axios from 'axios';
//redux//
import { useSelector, useDispatch } from 'react-redux';
//components//

import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import CarouselContainer from '../components/CarouselContainer';
import SubNavbar from '../components/SubNavbar';
const FashionScreen = () => {
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);
	const electronicProducts = useSelector((state) => state.electronicProducts);
	const { loading, error, products } = productList;
	const { electronicItems } = electronicProducts;
	useEffect(() => {
		dispatch(listProducts());
		dispatch(listElectrinics());
	}, [dispatch]);
	console.log('---------electronic------', electronicItems);
	const bannersOffers = useSelector((state) => state.bannersOffers);
	const { carouselImages } = bannersOffers;

	return (
		<div>
			<div>
				<SubNavbar />
			</div>
			<main>
				<div style={{ marginTop: '5px' }}>
					<CarouselContainer images={carouselImages} />
				</div>
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
						<div class='row center'>
							{products &&
								products.map((product) => <Products item={product} />)}
						</div>
					)}
				</div>
			</main>
		</div>
	);
};

export default FashionScreen;
