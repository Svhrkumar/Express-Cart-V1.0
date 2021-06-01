import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct, updateProductAction } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useHistory } from 'react-router-dom';

import '../index.css';
import { PRODUCT_UPDATE_RESET } from '../types/type';
import axios from 'axios';
const ProductEditScreen = (props) => {
	const productId = props.match.params.id;

	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [image, setImage] = useState('');
	const [category, setCategory] = useState('');
	const [countInStock, setCountInStock] = useState('');
	const [brand, setBrand] = useState('');
	const [description, setDescription] = useState('');
	const [availableSize, setAvailableSize] = useState();
	const [discount, setDiscount] = useState();
	const [loadingUpload, setLoadingUpload] = useState(false);
	const [errorUpload, setErrorUpload] = useState('');
	const dispatch = useDispatch();
	const productDetails = useSelector((state) => state.productDetails);
	const productUpdate = useSelector((state) => state.productUpdate);
	const user = useSelector((state) => state.user);
	const {
		loading: loadingUpdate,
		error: errorUpdate,
		success: successUpdate,
	} = productUpdate;
	console.log('----------product---edit-------', productDetails);
	const { loading, error, product } = productDetails;

	useEffect(() => {
		console.log('-----------availablesizes----------', product);

		if (successUpdate) {
			dispatch({ type: PRODUCT_UPDATE_RESET });
			window.location.href = '/productsmanager';
		}
		if (!product || product._id !== productId || successUpdate) {
			dispatch({ type: PRODUCT_UPDATE_RESET });
			dispatch(detailsProduct(productId));
		} else {
			setName(product.name);
			setPrice(product.price);
			setImage(product.image);
			setCategory(product.category);
			setCountInStock(product.countInStock);
			setBrand(product.Brand);
			setDescription(product.description);
			setAvailableSize(product.availableSizes);
			setDiscount(product.discount);
		}
	}, [product, dispatch, productId, successUpdate]);

	const updateHandler = () => {
		dispatch(
			updateProductAction({
				_id: productId,
				name,
				price,
				brand,
				countInStock,
				description,
				availableSize,
				discount,
				category,
				image,
			})
		);
	};

	const uploadFileHandler = async (e) => {
		const file = e.target.files[0];
		const bodyFormData = new FormData();
		bodyFormData.append('image', file);
		setLoadingUpload(true);
		try {
			const { data } = await axios.post('/api/uploads', bodyFormData, {
				headers: {
					'Content-Type': 'multipart/form-data',
					Authorization: `Bearer ${user.user.token}`,
				},
			});
			setImage(data);
			setLoadingUpload(false);
		} catch (err) {
			setErrorUpload(err.message);
			setLoadingUpload(false);
		}
	};
	const cancelHandler = () => {
		window.location.href = '/productsmanager';
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
					<React.Fragment>
						{error ? (
							<MessageBox varient='danger'> {error}</MessageBox>
						) : (
							<div className='product-inner-ctn'>
								<div style={{ margin: '20px 10px 20px 150px' }}>
									<h3>Product ID:{productId}</h3>
								</div>
								<div className='ctn-row'>
									<div className='upload-input-ctn'>
										<label className='ctn-label' htmlFor='image'>
											Image Upload
										</label>

										<input
											className='input-field'
											id='imagefile'
											type='file'
											placeholder='Choose Image'
											onChange={(e) => uploadFileHandler(e)}></input>
										{loadingUpload && <LoadingBox></LoadingBox>}
										{errorUpload && (
											<MessageBox varient='danger'>{errorUpload}</MessageBox>
										)}
									</div>
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
										<label className='ctn-label' htmlFor='price'>
											Price
										</label>

										<input
											className='input-field'
											id='price'
											type='text'
											placeholder='Enter price'
											value={price}
											onChange={(e) => setPrice(e.target.value)}></input>
									</div>
								</div>

								<div className='ctn-row'>
									<div className='input-ctn'>
										<label className='ctn-label' htmlFor='image'>
											Image
										</label>

										<input
											className='input-field'
											id='image'
											type='text'
											placeholder='Enter image'
											value={image}
											onChange={(e) => setImage(e.target.value)}></input>
									</div>
									<div className='input-ctn'>
										<label className='ctn-label' htmlFor='category'>
											Category
										</label>

										<input
											className='input-field'
											id='category'
											type='text'
											placeholder='Enter category'
											value={category}
											onChange={(e) => setCategory(e.target.value)}></input>
									</div>
								</div>
								<div className='ctn-row'>
									<div className='input-ctn'>
										<label className='ctn-label' htmlFor='brand'>
											Brand
										</label>

										<input
											className='input-field'
											id='brand'
											type='text'
											placeholder='Enter brand'
											value={brand}
											onChange={(e) => setBrand(e.target.value)}></input>
									</div>
									<div className='input-ctn'>
										<label className='ctn-label' htmlFor='countInStock'>
											Count In Stock
										</label>

										<input
											className='input-field'
											id='countInStock'
											type='text'
											placeholder='Enter countInStock'
											value={countInStock}
											onChange={(e) => setCountInStock(e.target.value)}></input>
									</div>
								</div>
								<div className='ctn-row'>
									<div className='input-ctn'>
										<label className='ctn-label' htmlFor='availablesizes'>
											Available Sizes
										</label>

										<input
											className='input-field'
											id='availablesizes'
											type='text'
											placeholder='Enter Available Sizes'
											value={availableSize}
											onChange={(e) =>
												setAvailableSize(e.target.value)
											}></input>
									</div>
									<div className='input-ctn'>
										<label className='ctn-label' htmlFor='discount'>
											Discount
										</label>

										<input
											className='input-field'
											id='discount'
											type='text'
											placeholder='Enter Discount'
											value={discount}
											onChange={(e) => setDiscount(e.target.value)}></input>
									</div>
								</div>
								<div>
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											margin: '10px 140px',
										}}>
										<label className='ctn-label' htmlFor='description'>
											Description
										</label>

										<textarea
											style={{ width: '100%' }}
											id='description'
											rows='3'
											type='text'
											placeholder='Enter description'
											value={description}
											onChange={(e) =>
												setDescription(e.target.value)
											}></textarea>
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
					</React.Fragment>
				)}
			</div>
		</div>
	);
};

export default ProductEditScreen;
