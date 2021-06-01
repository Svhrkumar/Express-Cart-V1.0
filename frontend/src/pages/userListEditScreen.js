import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct, updateProductAction } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useHistory } from 'react-router-dom';

import '../index.css';

import axios from 'axios';
import Modal from '../components/Modal';
const userListEditScreen = (props) => {
	const userId = props.match.params.id;
	const history = useHistory();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [seller, setSeller] = useState('');
	const [countInStock, setCountInStock] = useState('');
	const [admin, setAdmin] = useState('');
	const [description, setDescription] = useState('');
	const [availableSize, setAvailableSize] = useState();
	const [discount, setDiscount] = useState();
	const [loadingUpload, setLoadingUpload] = useState(false);
	const [errorUpload, setErrorUpload] = useState('');
	const dispatch = useDispatch();
	// const productDetails = useSelector((state) => state.productDetails);
	// const productUpdate = useSelector((state) => state.productUpdate);
	const user = useSelector((state) => state.user);
	// const {
	// 	loading: loadingUpdate,
	// 	error: errorUpdate,
	// 	success: successUpdate,
	// } = productUpdate;
	// console.log('----------product---edit-------', productDetails);
	// const { loading, error, product } = productDetails;

	// useEffect(() => {
	// 	console.log('-----------availablesizes----------', product);

	// 	if (successUpdate) {
	// 		dispatch({ type: PRODUCT_UPDATE_RESET });
	// 		history.push('/productsmanager');
	// 	}
	// 	if (!product || product._id !== productId || successUpdate) {
	// 		dispatch({ type: PRODUCT_UPDATE_RESET });
	// 		dispatch(detailsProduct(productId));
	// 	} else {
	// 		setName(product.name);
	// 		setEmail(product.email);
	//
	// 		setSeller(product.seller);
	// 		setCountInStock(product.countInStock);
	// 		setAdmin(product.admin);
	// 		setDescription(product.description);
	// 		setAvailableSize(product.availableSizes);
	// 		setDiscount(product.discount);
	// 	}
	// }, [product, dispatch, productId, successUpdate]);

	const updateHandler = () => {
		dispatch(
			updateUserAction({
				_id: productId,
				name,
				email,
				admin,
				countInStock,
				description,
				availableSize,
				discount,
				seller,
				image,
			})
		);
	};

	const cancelHandler = () => {
		history.push('/userslist');
	};
	return (
		<div>
			<div
				style={{
					marginTop: '60px',
					marginLeft: '180px',
				}}>
				<h1>Edit Product {}</h1>
			</div>
			<hr style={{ width: '80%', margin: '5px 170px' }} />
			<div className='product-edit-ctn'>
				{loading ? (
					<LoadingBox></LoadingBox>
				) : (
					<>
						{error ? (
							<MessageBox varient='danger'> {error}</MessageBox>
						) : (
							<div className='product-inner-ctn'>
								<div style={{ margin: '20px 10px 20px 150px' }}>
									<h3>User ID:{userId}</h3>
								</div>

								<div className='ctn-row'>
									<div className='input-ctn'>
										<label className='ctn-label' htmlFor='name'>
											Name
										</label>

										<input
											className='input-field'
											id='name'
											type='text'
											placeholder='Enter name'
											value={name}
											onChange={(e) => setName(e.target.value)}></input>
									</div>
									<div className='input-ctn'>
										<label className='ctn-label' htmlFor='email'>
											email
										</label>

										<input
											className='input-field'
											id='email'
											type='text'
											placeholder='Enter email'
											value={email}
											onChange={(e) => setEmail(e.target.value)}></input>
									</div>
								</div>

								<div className='ctn-row'>
									<div className='input-ctn'>
										<label className='ctn-label' htmlFor='seller'>
											seller
										</label>

										<input
											className='input-field'
											id='seller'
											type='text'
											placeholder='Enter seller'
											value={seller}
											onChange={(e) => setSeller(e.target.value)}></input>
									</div>
								</div>
								<div className='ctn-row'>
									<div className='input-ctn'>
										<label className='ctn-label' htmlFor='admin'>
											Admin
										</label>

										<input
											className='input-field'
											id='admin'
											type='text'
											placeholder='Enter admin'
											value={admin}
											onChange={(e) => setAdmin(e.target.value)}></input>
									</div>
								</div>

								<div
									style={{
										display: 'grid',
										placeItems: 'center',
										marginTop: '10px',
									}}>
									<div>
										<button className='update-btn' onClick={cancelHandler}>
											Cancel
										</button>
										<button className='update-btn' onClick={updateHandler}>
											Update
										</button>
									</div>
								</div>
							</div>
						)}
					</>
				)}
			</div>
			<Modal />
		</div>
	);
};

export default userListEditScreen;
