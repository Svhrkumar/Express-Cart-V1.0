import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createproductAction } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { createOffersAction } from '../actions/offersAction';
import { ADD_CREATE_RESET } from '../types/type';

const OffersUploadScreen = () => {
	const history = useHistory();
	const [offerName, setOfferName] = useState('');
	const [occassion, setOccassion] = useState('');
	const [category, setCategory] = useState('');
	const [image, setImage] = useState('');

	const [availableSize, setAvailableSize] = useState([]);
	const [discount, setDiscount] = useState();
	const [loadingUpload, setLoadingUpload] = useState(false);
	const [errorUpload, setErrorUpload] = useState('');
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const carouselOffers = useSelector((state) => state.carouselOffers);
	const { success, loading, error } = carouselOffers;

	const createHandler = () => {
		dispatch(
			createOffersAction({
				image,
				offerName,
				occassion,
				category,
			})
		);
	};
	useEffect(() => {
		if (success) {
			history.push('/offers/Manager');
		}
		dispatch({ type: ADD_CREATE_RESET });
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
		history.push('/productsmanager');
	};
	console.log('-------available size----', typeof availableSize);
	return (
		<div>
			<div
				style={{
					marginTop: '60px',
					marginLeft: '180px',
				}}>
				<h1> Offers Manager {}</h1>
			</div>
			<hr style={{ width: '80%', margin: '5px 170px' }} />

			<div className='product-edit-ctn'>
				<div className='product-inner-ctn'>
					<div style={{ margin: '20px 10px 20px 150px' }}></div>
					<div className='ctn-row'>
						<div className='upload-input-ctn'>
							<label className='ctn-label' htmlFor='image'>
								Banner Upload
							</label>

							<input
								className='input-field '
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
							<label className='ctn-label' htmlFor='offername'>
								Offer Name
							</label>

							<input
								className='input-field'
								id='offername'
								type='text'
								placeholder='Enter Offer name'
								value={offerName}
								onChange={(e) => setOfferName(e.target.value)}></input>
						</div>
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
							<label className='ctn-label' htmlFor='occassion'>
								Occassion
							</label>

							<input
								className='input-field'
								id='occassion'
								type='text'
								placeholder='Enter occassion'
								value={occassion}
								onChange={(e) => setOccassion(e.target.value)}></input>
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
								Upload
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OffersUploadScreen;
