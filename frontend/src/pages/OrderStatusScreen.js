import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import axios from 'axios';
import { deliverOrder, detailsOrder, payOrder } from '../actions/orderAction';
import StripeCheckout from '../components/StripeCheckout';
import { v4 as uuidv4 } from 'uuid';
import '../index.css';
import {
	ORDER_DELIVERED_RESET,
	ORDER_PAY_RESET,
	ORDER_RESET,
} from '../types/type';
const OrderStatusScreen = (props) => {
	const [paymentSuccess, setPaymentSuccess] = useState(false);
	const [orderPrice, setOrderPrice] = useState('');
	const cart = useSelector((state) => state.cart);
	const user = useSelector((state) => state.user);
	const orderPay = useSelector((state) => state.orderPay);
	const orderDetails = useSelector((state) => state.orderDetails);
	const orderDelivered = useSelector((state) => state.orderDelivered);
	const history = useHistory();
	const dispatch = useDispatch();

	const orderId = props.match.params.id;
	const { loading, success, error, order } = orderDetails;
	const { error: errorPay, success: successPay } = orderPay;
	const { error: errorDelivered, success: successDelivered } = orderDelivered;

	useEffect(() => {
		if (!order || paymentSuccess || (order && order._id !== orderId)) {
			successPaymentHandler({
				id: uuidv4(),
				status: 'Payment Successfull',
				update_time: new Date(),
				email_address: user.user.email,
			});

			dispatch({ type: ORDER_PAY_RESET });
			dispatch(detailsOrder(orderId));
		}

		setPaymentSuccess(false);

		setOrderPrice(order && order.totalPrice);
	}, [dispatch, orderId, order, paymentSuccess]);

	const successPaymentHandler = (paymentResult) => {
		console.log('----------------successPaymentHandler------------------');
		dispatch(payOrder(order, paymentResult));
	};

	console.log('-----------------order ststus---------------', order);
	return (
		<div>
			<div style={{ marginTop: '60px', marginLeft: '180px' }}>
				<h2 style={{ marginRight: '200px' }}>Order Status</h2>
				<br></br>
				<h4>Order ID:{order && order._id}</h4>
			</div>
			<hr style={{ width: '80%', margin: '5px 170px' }} />
			<div className='order-ctn'>
				<div className='order-item-ctn'>
					{order &&
						order.orderItems &&
						order.orderItems.map((item) => (
							<div className='cart-info'>
								<div className='cart-item-image'>
									<img src={item.image[0]} height='100px' width='auto' />
								</div>
								<div style={{ margin: '0px 20px', width: '60%' }}>
									<div className='cart-item-name'>
										<p style={{ marginRight: '20px' }}>{item.name}</p>

										<br />
										<small style={{ marginRight: '20px' }}>
											{item.description}
										</small>
										<p>Qty:{item.qty}</p>
									</div>
								</div>
								<div style={{ margin: '40px 5px' }}>
									<p>Rs: {item.price}</p>
								</div>
							</div>
						))}
				</div>
				<div className='address-ctn'>
					<h3
						style={{
							color: '#e07c24',
							marginBottom: '20px',
							marginTop: '20px',
						}}>
						Delivery Address
					</h3>
					<p>
						{order &&
							order.shippingAddress &&
							order &&
							order.shippingAddress.fullName}
					</p>
					<br />
					<p>
						{order &&
							order.shippingAddress &&
							order &&
							order.shippingAddress.address}
						,
						{order &&
							order.shippingAddress &&
							order &&
							order.shippingAddress.city}
						,<br />
						{order &&
							order.shippingAddress &&
							order &&
							order.shippingAddress.pinCode}
						,
						{order &&
							order.shippingAddress &&
							order &&
							order.shippingAddress.country}
						,
						{order &&
							order.shippingAddress &&
							order &&
							order.shippingAddress.contactNum}
					</p>
					<div>
						<h4>
							Delivery Status:
							{order && order.isDeliverd == false ? (
								<p style={{ color: 'red' }}>Not Delivered</p>
							) : (
								<p style={{ color: 'green' }}>Delivered</p>
							)}
						</h4>
					</div>
					<div>
						<div style={{ margin: '20px 20px 20px 0px', width: '70%' }}>
							<div>
								<p
									style={{
										marginRight: '20px',
										fontSize: '20px',
										fontWeight: 'bold',
									}}>
									Order Total: Rs Rs {order && order.totalPrice}
								</p>
								<small style={{ marginRight: '20px' }}>
									Payment Method:{order && order.paymentMethod} <br />
									status:
									{order && order.isPaid == false ? (
										<p style={{ color: 'red' }}>payment pending</p>
									) : (
										<p style={{ color: 'green' }}>paid</p>
									)}
								</small>

								<br />
							</div>
						</div>
					</div>

					{loading && <LoadingBox></LoadingBox>}
					{error && <MessageBox varient='danger'>{error}</MessageBox>}
					<div>
						<button
							className='checkout-btn'
							onClick={() => setPaymentSuccess(true)}>
							<img
								src='https://www.paypalobjects.com/webstatic/en_US/i/buttons/buy-logo-medium.png'
								alt='pay pal'
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderStatusScreen;
