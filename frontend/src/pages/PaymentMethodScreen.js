import React, { useState } from 'react';
import CheckoutStepper from '../components/CheckoutStepper';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { savePaymetMethod } from '../actions/cartAction';

const PaymentMethodScreen = () => {
	const cart = useSelector((state) => state.cart);
	const { shippingAddress } = cart;
	const history = useHistory();
	const dispatch = useDispatch();
	const [paymentMethod, setPaymentMethod] = useState('PayPal');
	if (!shippingAddress) {
		history.push('/shipping');
	}
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(savePaymetMethod(paymentMethod));
		history.push('/placeorder');
	};
	return (
		<div>
			<CheckoutStepper step1 step2 step3></CheckoutStepper>
			<div className='payment-ctn'>
				<div className='payment-card'>
					<form
						className='form'
						style={{ display: 'grid', placeItems: 'center' }}
						onSubmit={submitHandler}>
						<div style={{ marginBottom: '30px' }}>
							<h3>Payment Method</h3>
						</div>
						<div>
							<div style={{ margin: '10px 10px' }}>
								<input
									style={{ margin: '5px 10px' }}
									type='radio'
									id='paypal'
									value='Paypal'
									name='paymentMethod'
									required
									checked
									onChange={(e) => setPaymentMethod(e.target.value)}
								/>
								<label htmlFor='paypal'>Paypal</label>
							</div>
						</div>
						<div>
							<div style={{ margin: '5px 10px' }}>
								<input
									style={{ margin: '5px 10px' }}
									type='radio'
									id='stripe'
									value='Stripe'
									name='paymentMethod'
									required
									onChange={(e) => setPaymentMethod(e.target.value)}
								/>
								<label htmlFor='stripe'>Stripe</label>
							</div>
						</div>
						<div>
							<button className='cart-remove-btn' type='submit'>
								Continue
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default PaymentMethodScreen;
