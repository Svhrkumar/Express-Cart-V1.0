import React, { useEffect, useState } from 'react';
import '../index.css';
import { data } from '../data';
import Products from '../components/Products';
import { listElectrinics } from '../actions/productActions';
import axios from 'axios';
//redux//
import { useSelector, useDispatch } from 'react-redux';
//components//

import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import CarouselContainer from '../components/CarouselContainer';
import SubNavbar from '../components/SubNavbar';
import ElectronicCards from '../components/ElectronicCards';
import SideNavbar from '../components/SideNavbar';
import Filter from '../components/Filter';
const ElectronicScreen = () => {
	const dispatch = useDispatch();

	const electronicProducts = useSelector((state) => state.electronicProducts);
	const electronicOffers = useSelector((state) => state.electronicOffers);
	const { carouselImages } = electronicOffers;
	const { loading, error, electronicItems } = electronicProducts;
	const [mobileData, setMobileData] = useState();
	const [laptopData, setLaptopData] = useState();
	const [mobileFilter, setMobileFilter] = useState(false);
	const [laptopFilter, setLaptopFilter] = useState(false);
	// const [category, setCategory] = useState('');
	useEffect(() => {
		dispatch(listElectrinics());
	}, [dispatch]);
	console.log('---------electronic------', electronicItems);
	// useEffect(() => {
	// 	mobileFilteredItems = electronicItems.filter(
	// 		(items) => items.subcategory == 'Mobile'
	// 	);
	// 	laptopsFilteredItems = electronicItems.filter(
	// 		(items) => items.subcategory == 'Laptops'
	// 	);
	// }, []);

	// const handleMobiles = (isMobilse) => {
	// 	if (isMobilse == true) {
	// 		setMobileFilter(true);
	// 		setLaptopFilter(false);
	// 		const filteredItems = electronicItems.filter(
	// 			(items) => items.subcategory == 'Mobile'
	// 		);
	// 		console.log('---------filtered items---mobiles--', filteredItems);
	// 		setMobileData(filteredItems);
	// 	} else {
	// 		setMobileFilter(false);
	// 	}
	// };
	// const handleLaptops = (isLaptops) => {
	// 	if (isLaptops == true) {
	// 		setMobileFilter(false);
	// 		setLaptopFilter(true);
	// 		const filteredItems = electronicItems.filter(
	// 			(items) => items.subcategory == 'Laptops'
	// 		);
	// 		setLaptopData(filteredItems);
	// 		console.log('---------filtered items---Laptops--', filteredItems);
	// 	} else {
	// 		setLaptopFilter(false);
	// 	}
	// };
	const handleCategory = (item) => {
		if (item == 'Mobiles') {
			setMobileFilter(true);
			setLaptopFilter(false);

			const filteredItems =
				electronicItems &&
				electronicItems.filter((items) => items.subcategory == 'Mobile');
			console.log(
				'---------filtered items---mobiles--',
				filteredItems,
				'items',
				item
			);
			setMobileData(filteredItems);
		} else {
			setMobileFilter(false);
		}
		if (item == 'Laptops') {
			setMobileFilter(false);
			setLaptopFilter(true);
			const filteredItems =
				electronicItems &&
				electronicItems.filter((items) => items.subcategory == 'Laptops');
			setLaptopData(filteredItems);
			console.log('---------filtered items---Laptops--', filteredItems);
		} else {
			setLaptopFilter(false);
		}
	};
	const handleSort = (sort, category) => {
		var sortedProducts = electronicItems && electronicItems.slice();
		console.log('---------sorted items----', sortedProducts);
		if (category == 'Mobiles') {
			const filteredItems = sortedProducts.filter(
				(items) => items.subcategory == 'Mobile'
			);
			if (sort === 'latest') {
				const mobilesLatest = filteredItems.sort((a, b) =>
					a._id > b._id ? 1 : -1
				);
				console.log('---------sorted items- mobiles latest---', mobilesLatest);
				setMobileData(mobilesLatest);
			} else {
				const mobilesLowest = filteredItems.sort((a, b) =>
					sort === 'lowest'
						? a.price > b.price
							? 1
							: -1
						: a.price > b.price
						? -1
						: 1
				);
				console.log('---------sorted items- mobiles lowest---', mobilesLowest);
				setMobileData(mobilesLowest);
			}
		}
		if (category == 'Laptops') {
			const filteredItems = sortedProducts.filter(
				(items) => items.subcategory == 'Laptops'
			);
			if (sort === 'latest') {
				const laptopLatest = filteredItems.sort((a, b) =>
					a._id > b._id ? 1 : -1
				);
				console.log('---------sorted items- laptop latest---', laptopLatest);
				setLaptopData(laptopLatest);
			} else {
				const laptopLowest = filteredItems.sort((a, b) =>
					sort === 'lowest'
						? a.price > b.price
							? 1
							: -1
						: a.price > b.price
						? -1
						: 1
				);
				console.log('---------sorted items- laptop lowest---', laptopLowest);
				setLaptopData(laptopLowest);
			}
		}
	};
	return (
		<div>
			<div style={{ marginTop: '25px' }}>
				<SubNavbar />
			</div>

			<main>
				<div style={{ marginTop: '5px' }}>
					<CarouselContainer images={carouselImages} />
				</div>
				<Filter handleCategory={handleCategory} handleSort={handleSort} />
				<div className='flex-container'>
					<SideNavbar />

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
								{mobileFilter ? (
									mobileData &&
									mobileData.map((product) => (
										<ElectronicCards item={product} key={product._id} />
									))
								) : (
									<React.Fragment>
										{laptopFilter ? (
											laptopData &&
											laptopData.map((product) => (
												<ElectronicCards item={product} key={product._id} />
											))
										) : (
											<React.Fragment>
												{laptopFilter == false && mobileFilter == false
													? electronicItems &&
													  electronicItems.map((product) => (
															<ElectronicCards
																item={product}
																key={product._id}
															/>
													  ))
													: null}
											</React.Fragment>
										)}
									</React.Fragment>
								)}
							</div>
						)}
					</div>
				</div>
			</main>
		</div>
	);
};

export default ElectronicScreen;
