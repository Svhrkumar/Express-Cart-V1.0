import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { useParams } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const SearchScreen = (props) => {
	const dispatch = useDispatch();
	const { name = 'all' } = useParams();
	const productList = useSelector((state) => state.productList);
	const { loading, error, products } = productList;
	useEffect(() => {
		dispatch(listProducts({ name: name !== 'all' ? name : '' }));
	}, [dispatch, name]);
	return (
		<div>
			<div className='row'>
				{loading ? (
					<LoadingBox />
				) : error ? (
					<MessageBox varient='danger'>{error}</MessageBox>
				) : (
					<div> {products.length} Results</div>
				)}
			</div>
			<div className='row'></div>
		</div>
	);
};

export default SearchScreen;
