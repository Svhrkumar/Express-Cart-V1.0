import React, { useEffect, useState } from 'react';
import CheckoutStepper from '../components/CheckoutStepper';
import shipping from '../images/shipping.png';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartAction';
import { useHistory } from 'react-router-dom';
import '../index.css';
import '../style.css';
import { addDeliveryAddress } from '../actions/shippingAction';
const ShippingAddress = () => {
	const user = useSelector((state) => state.user);
	const cart = useSelector((state) => state.cart);

	const { shippingAddress } = cart;

	if (!user.user && user.user && user.user.name) {
		history.push('/signin');
	}
	const [fullName, setFullName] = useState('');
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [pinCode, setPinCode] = useState('');
	const [country, setCountry] = useState('');
	const [contactNum, setContactNum] = useState('');
	const dispatch = useDispatch();
	const history = useHistory();

	const submitHamdler = (e) => {
		e.preventDefault();
		console.log('------------submithandle------------');
		dispatch(
			addDeliveryAddress({
				fullName,
				address,
				city,
				pinCode,
				country,
				contactNum,
			})
		);

		history.push('/payment');
	};

	return (
		<div>
			<CheckoutStepper step1 step2></CheckoutStepper>
			<div className='shipping-ctn'>
				<div>
					<img src={shipping} alt='shipping logo' className='shipping-logo' />
				</div>
				<form className='form ' onSubmit={submitHamdler}>
					<div style={{ textAlign: 'center' }}>
						<h3>Shipping Address</h3>
					</div>
					<div class='field'>
						<input
							className='input'
							type='text'
							name='fullname'
							id='fullname'
							placeholder='Enter Full Name'
							value={fullName}
							onChange={(e) => setFullName(e.target.value)}
						/>
						<label className='label' htmlFor='fullname'>
							Full Name
						</label>
					</div>
					<div class='field'>
						<input
							className='input'
							type='text'
							name='Address'
							id='Address'
							placeholder='Enter Address'
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
						<label className='label' htmlFor='Address'>
							Address
						</label>
					</div>
					<div class='field'>
						<input
							className='input'
							type='text'
							name='City'
							id='City'
							placeholder='Enter City'
							value={city}
							onChange={(e) => setCity(e.target.value)}
						/>
						<label className='label' htmlFor='City'>
							City
						</label>
					</div>
					<div class='field'>
						<input
							className='input'
							type='text'
							name='Pincode'
							id='Pincode'
							placeholder='Enter PinCode'
							value={pinCode}
							onChange={(e) => setPinCode(e.target.value)}
						/>
						<label className='label' htmlFor='Pincode'>
							PinCode
						</label>
					</div>
					<div class='field'>
						<input
							className='input'
							type='text'
							name='Country'
							id='Country'
							placeholder='Enter Country'
							value={country}
							onChange={(e) => setCountry(e.target.value)}
						/>
						<label className='label' htmlFor='Country'>
							Country
						</label>
					</div>
					<div class='field'>
						<input
							className='input'
							type='text'
							name='Mobile'
							id='Mobile'
							placeholder='Enter Mobile'
							value={contactNum}
							onChange={(e) => setContactNum(e.target.value)}
						/>
						<label className='label' htmlFor='Mobile'>
							Mobile
						</label>
					</div>
					<div style={{ display: 'grid', placeItems: 'center' }}>
						<button className='shipping-btn' type='submit'>
							Continue
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ShippingAddress;
