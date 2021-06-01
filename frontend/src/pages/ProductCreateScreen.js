import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	createElectronicsProduct,
	createproductAction,
} from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const ProductCreateScreen = () => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [image, setImage] = useState('');
	const [category, setCategory] = useState('');
	const [subCategory, setSubCategory] = useState('');
	const [countInStock, setCountInStock] = useState('');
	const [brand, setBrand] = useState('');
	const [description, setDescription] = useState('');
	const [availableSize, setAvailableSize] = useState([]);
	const [discount, setDiscount] = useState();
	const [loadingUpload, setLoadingUpload] = useState(false);
	const [errorUpload, setErrorUpload] = useState('');
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const productCreate = useSelector((state) => state.productCreate);
	const { success, loading, error } = productCreate;

	const createHandler = () => {
		if (category === 'Fashion') {
			dispatch(
				createproductAction({
					name,
					price,
					brand,
					countInStock,
					description,
					availableSize,
					discount,
					category,
					subCategory,
					image,
				})
			);
		}
		if (category === 'Electronics') {
			dispatch(
				createElectronicsProduct({
					name,
					price,
					brand,
					countInStock,
					description,
					discount,
					category,
					subCategory,
					image,
				})
			);
		}
	};
	useEffect(() => {
		if (success) {
			window.location.href = '/';
		}
	}, [success]);

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
	console.log('-------available size----', typeof availableSize);
	return (
		<div>
			<div
				style={{
					marginTop: '60px',
					marginLeft: '180px',
				}}>
				<h1>Add Product {}</h1>
			</div>
			<hr style={{ width: '80%', margin: '5px 170px' }} />
			<div className='product-edit-ctn'>
				<div className='product-inner-ctn'>
					<div style={{ margin: '20px 10px 20px 150px' }}></div>
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
					</div>
					<div className='ctn-row'>
						<div className='input-ctn'>
							<label className='ctn-label' htmlFor='category'>
								Category
							</label>

							<select
								className='input-field-dropdown'
								id='category'
								name='category'
								type='text'
								value={category}
								onChange={(e) => setCategory(e.target.value)}>
								<option value=''>Select Category</option>
								<option value='Electronics'>Electronics</option>
								<option value='Home Appliance'>Home Appliance</option>
								<option value='Furniture'>Furniture</option>
								<option value='Grocery'>Grocery</option>
								<option value='Fashion'>Fashion</option>
							</select>
						</div>
						<div className='input-ctn'>
							<label className='ctn-label' htmlFor='subcategory'>
								Sub Category
							</label>

							<select
								className='input-field-dropdown'
								id='subcategory'
								name='subcategory'
								type='text'
								value={subCategory}
								onChange={(e) => setSubCategory(e.target.value)}>
								<option value=''>Select Category</option>
								<option value='shirts'>shirts</option>
								<option value='jeans'>jeans</option>
								<option value='Mobile'>Mobile</option>
								<option value='Laptops'>Laptops</option>
								<option value='Powerbanks'>Powerbanks</option>
								<option value='HeadPhones'>HeadPhones</option>
							</select>
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
								onChange={(e) => setAvailableSize(e.target.value)}></input>
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
					<div className='ctn-row'>
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
								onChange={(e) => setDescription(e.target.value)}></textarea>
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
							<button className='update-btn' onClick={createHandler}>
								Create
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCreateScreen;
