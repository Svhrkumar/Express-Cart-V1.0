import React, { useEffect } from 'react';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useSelector, useDispatch } from 'react-redux';
import {
	createproductAction,
	listProducts,
	deleteProductAction,
	listElectrinics,
} from '../actions/productActions';
import {
	FASHION_PRODUCT_CREATE_RESET,
	PRODUCT_DELETE_RESET,
} from '../types/type';
import { useHistory } from 'react-router-dom';

const ProductManager = () => {
	const productList = useSelector((state) => state.productList);
	const productCreate = useSelector((state) => state.productCreate);
	const productDelete = useSelector((state) => state.productDelete);
	const electronicProducts = useSelector((state) => state.electronicProducts);
	const dispatch = useDispatch();

	const { loading, error, products } = productList;
	const {
		loading: electronicItemsLoading,
		error: electricErrors,
		electronicItems,
	} = electronicProducts;

	console.log('-------------electronics-------', electronicProducts);
	const {
		loading: loadingCreate,
		error: errorCreate,
		success: successCreate,
		product: createdProduct,
	} = productCreate;
	const {
		loading: loadingDelete,
		erroe: errorDelete,
		success: successDelete,
	} = productDelete;

	useEffect(() => {
		if (successCreate) {
			dispatch({ type: FASHION_PRODUCT_CREATE_RESET });

			window.location.href = `/product/${createdProduct._id}/edit`;
		}
		dispatch(listProducts());
		dispatch(listElectrinics());
		if (successDelete) {
			dispatch({ type: PRODUCT_DELETE_RESET });
		}
	}, [dispatch, createdProduct, successCreate, successDelete]);
	console.log('-----------------productlist-----------', productList);

	const createProduct = () => {
		console.log('-----------------create product----------');

		window.location.href = '/product/create';
	};

	const deleteHandler = (productId) => {
		dispatch(deleteProductAction(productId));
	};
	return (
		<div>
			<div
				style={{
					marginTop: '60px',
					marginLeft: '180px',
					display: 'flex',
					justifyContent: 'space-between',
				}}>
				<h2 style={{ marginRight: '200px' }}>Product List</h2>
				<br></br>
				<h4></h4>

				<button onClick={createProduct} className='crt-prdt-btn'>
					Create Product
				</button>
			</div>
			<hr style={{ width: '80%', margin: '5px 170px' }} />
			{loadingDelete && <LoadingBox></LoadingBox>}
			{errorDelete && <MessageBox variant='danger'>{error}</MessageBox>}
			{loadingCreate && <LoadingBox></LoadingBox>}
			{errorCreate && <MessageBox variant='danger'>{error}</MessageBox>}
			{loading ? (
				<LoadingBox></LoadingBox>
			) : error ? (
				<MessageBox variant='danger'>{error}</MessageBox>
			) : (
				<table
					className='table'
					style={{ width: '80%', margin: '20px 170px 20px 170px' }}>
					<thead>
						<tr>
							<th>ID</th>
							<th>Product Name</th>
							<th>price</th>
							<th>Category</th>
							<th>Brand</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{products.map((product) => (
							<tr key={product._id}>
								<td>{product._id}</td>
								<td>{product.name}</td>
								<td>{product.price}</td>
								<td>{product.category}</td>
								<td>{product.Brand}</td>
								<td>
									<button
										type='button'
										className='details-btn'
										onClick={() =>
											(window.location.href = `/product/${product._id}/edit`)
										}>
										Edit
									</button>
									<button
										type='button'
										className='details-btn'
										onClick={() => deleteHandler(product._id)}>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
			<hr />
			<div
				style={{
					marginTop: '60px',
					marginLeft: '180px',
					display: 'flex',
					justifyContent: 'space-between',
				}}>
				<h2 style={{ marginRight: '200px' }}>Electronic Products List</h2>
			</div>
			{
				<table
					className='table'
					style={{ width: '80%', margin: '20px 170px 20px 170px' }}>
					<thead>
						<tr>
							<th>ID</th>
							<th>Product Name</th>
							<th>price</th>
							<th>Category</th>
							<th>Brand</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{electronicItems &&
							electronicItems.map((product) => (
								<tr key={product._id}>
									<td>{product._id}</td>
									<td>{product.name.slice(0, 26)}</td>
									<td>{product.price}</td>
									<td>{product.category}</td>
									<td>{product.Brand}</td>
									<td>
										<button
											type='button'
											className='details-btn'
											onClick={() =>
												(window.location.href = `/product/${product._id}/edit`)
											}>
											Edit
										</button>
										<button
											type='button'
											className='details-btn'
											onClick={() => deleteHandler(product._id)}>
											Delete
										</button>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			}
		</div>
	);
};

export default ProductManager;
