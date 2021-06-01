import React, { useState, useEffect } from 'react';
import '../index.css';
import { useSelector, useDispatch } from 'react-redux';

const Filter = (props) => {
	const dispatch = useDispatch();
	const electronicProducts = useSelector((state) => state.electronicProducts);
	const { loading, error, electronicItems } = electronicProducts;
	const [category, setCategory] = useState();
	const [sort, setSort] = useState();
	console.log('---------items length----', electronicProducts);

	useEffect(() => {
		props.handleCategory(category);
		props.handleSort(sort, category);
	}, [category, sort]);
	return (
		<div className='filter'>
			{!electronicItems ? (
				<div>Loading...</div>
			) : (
				<React.Fragment>
					<div className='filter-result'>{electronicItems.length} Products</div>
					<div className='filter-sort'>
						Order{' '}
						<select
							value={props.sort}
							onChange={(e) => setSort(e.target.value)}>
							<option value='latest'>Latest</option>
							<option value='lowest'>Lowest</option>
							<option value='highest'>Highest</option>
						</select>
					</div>
					<div className='filter-size'>
						Category
						<select
							value={props.size}
							onChange={(e) => setCategory(e.target.value)}>
							<option value=''>All</option>
							<option value='Mobiles'>Mobiles</option>
							<option value='Laptops'>Laptops</option>
							<option value='HeadPhone'>HeadPhone</option>
							<option value='PowerBanks'>PowerBanks</option>
							<option value='Speakers'>Speakers</option>
						</select>
					</div>
				</React.Fragment>
			)}
		</div>
	);
};

export default Filter;
