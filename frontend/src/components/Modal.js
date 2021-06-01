import React, { useState, useEffect } from 'react';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userUpdate } from '../actions/userActions';
import '../index.css';

const Modal = (props) => {
	const [userId, setUserId] = useState();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [isSeller, setIsSeller] = useState(false);
	const [countInStock, setCountInStock] = useState('');
	const [isAdmin, setIsAdmin] = useState(false);

	const dispatch = useDispatch();
	// const productDetails = useSelector((state) => state.productDetails);
	// const userUpdate = useSelector((state) => state.userUpdate);

	const closeModal = (close) => {
		props.handleClose(close);
	};

	const divStyle = {
		display: props.isOpen ? 'block' : 'none',
	};

	const cancelHandler = () => {
		window.location.href = '/userslist';
	};
	console.log(props.userInfo);

	useEffect(() => {
		if (props.userInfo) {
			setUserId(props.userInfo._id);
			setName(props.userInfo.name);
			setEmail(props.userInfo.email);
			setIsSeller(props.userInfo.isSeller);
			setIsAdmin(props.userInfo.isAdmin);
		}
	}, [props.userInfo]);

	const updateHandler = () => {
		dispatch(userUpdate({ name, email, isSeller, isAdmin }, userId));
		closeModal();
	};
	console.log('--------userId---------', userId);
	return (
		<div className='modal' onClick={closeModal} style={divStyle}>
			<div className='modal-content' onClick={(e) => e.stopPropagation()}>
				<span className='close' onClick={() => closeModal(false)}>
					&times;
				</span>

				<div>
					<div
						style={{
							marginTop: '60px',
							marginLeft: '10px',
						}}>
						<h1>Edit Product {}</h1>
					</div>
					<hr style={{ width: '100%', margin: '5px 10px' }} />
					<div className='product-edit-ctn'>
						<div className='modal-inner-ctn'>
							<div style={{ margin: '20px 10px 20px 10px' }}>
								<h3>User ID:{props.userInfo && props.userInfo._id}</h3>
							</div>

							<div className='ctn-row'>
								<div className='input-ctn'>
									<label className='ctn-label' htmlFor='name'>
										Name
									</label>

									<input
										className='modal-input-field'
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
										className='modal-input-field'
										id='email'
										type='text'
										placeholder='Enter email'
										value={email}
										onChange={(e) => setEmail(e.target.value)}></input>
								</div>
							</div>

							{/*<div className='ctn-row'>
								<div className='input-ctn'>
									<label className='ctn-label' htmlFor='seller'>
										seller
									</label>

									<input
										className='modal-input-field'
										id='seller'
										type='text'
										placeholder='Enter seller'
										value={isSeller}
										onChange={(e) => setIsSeller(e.target.value)}></input>
								</div>
								<div className='input-ctn'>
									<label className='ctn-label' htmlFor='admin'>
										Admin
									</label>

									<input
										className='modal-input-field'
										id='admin'
										type='text'
										placeholder='Enter admin'
										value={isAdmin}
										onChange={(e) => setIsAdmin(e.target.value)}></input>
								</div>
							</div>*/}
							<div className='ctn-row' style={{ marginTop: '40px' }}>
								<div className='modal-input-ctn'>
									<label htmlFor='admin' style={{ marginRight: '10px' }}>
										Admin
									</label>

									<input
										style={{ marginTop: '2px' }}
										id='isAdmin'
										type='checkbox'
										checked={isAdmin}
										onChange={(e) => setIsAdmin(e.target.checked)}></input>
								</div>
								<div className='modal-input-ctn'>
									<label htmlFor='seller' style={{ marginRight: '10px' }}>
										Seller
									</label>

									<input
										style={{ marginTop: '2px' }}
										id='isSeller'
										type='checkbox'
										checked={isSeller}
										onChange={(e) => setIsSeller(e.target.checked)}></input>
								</div>
							</div>
							<div
								style={{
									display: 'grid',
									placeItems: 'center',
									marginTop: '10px',
								}}>
								<div>
									<button className='update-btn' onClick={closeModal}>
										Cancel
									</button>
									<button className='update-btn' onClick={updateHandler}>
										Update
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
