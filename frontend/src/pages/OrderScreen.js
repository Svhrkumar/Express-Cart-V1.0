import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutStepper from '../components/CheckoutStepper';
import { useHistory } from 'react-router-dom';
import { orderPlacedAction } from '../actions/orderAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { ORDER_RESET } from '../types/type';
const OrderScreen = () => {
	const cart = useSelector((state) => state.cart);
	const user = useSelector((state) => state.user);
	const orderCreate = useSelector((state) => state.orderCreate);
	const history = useHistory();
	const dispatch = useDispatch();
	useEffect(() => {
		if (!user && !user.user && !user.user.name) {
			history.push('/signin');
		}
	}, [user]);
	const { totalPrice, cartItems, shippingAddress, paymentMethod } = cart;
	const { loading, success, error, order } = orderCreate;

	const placeOrderHandler = () => {
		dispatch(orderPlacedAction({ ...cart, orderItems: cart.cartItems }));
	};

	console.log('----------------success--------------------', success);
	console.log('----------------order--------------------');
	useEffect(() => {
		console.log(
			'---------------------ordercreate---------------------',
			orderCreate
		);
		if (success) {
			history.push(`order/${order._id}`);
			dispatch({ type: ORDER_RESET });
		}
	}, [dispatch, order, history, success]);
	return (
		<div>
			<CheckoutStepper step1 step2 step3 step4></CheckoutStepper>
			<div style={{ padding: '0px 180px' }}>
				<h2 style={{ marginRight: '200px' }}>Order Summary</h2>
			</div>
			<hr style={{ width: '80%', margin: '5px 170px' }} />
			<div className='order-ctn'>
				<div className='order-item-ctn'>
					{cartItems &&
						cartItems.map((item) => (
							<div className='cart-info'>
								<div className='cart-item-image'>
									<img src={item.image[0]} height='100px' width='auto' />
								</div>
								<div style={{ margin: '0px 20px', width: '60%' }}>
									<div className='cart-item-name'>
										<p style={{ marginRight: '20px' }}>{item.name}</p>

										<br />
										<small style={{ marginRight: '20px' }}>
											{item.description.slice(0, 50)}...
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
					<p>{shippingAddress && shippingAddress.fullName}</p>
					<br />
					<p>{shippingAddress && shippingAddress.address}</p>
					<br />
					<p>{shippingAddress && shippingAddress.city}</p>
					<br />
					<p>{shippingAddress && shippingAddress.pinCode}</p>
					<br />
					<p>{shippingAddress && shippingAddress.country}</p>
					<br />
					<p>{shippingAddress && shippingAddress.contactNum}</p>
					<div>
						<div style={{ margin: '20px 20px 20px 0px', width: '70%' }}>
							<div>
								<p
									style={{
										marginRight: '20px',
										fontSize: '20px',
										fontWeight: 'bold',
									}}>
									Order Total: Rs {totalPrice}
								</p>
								<small style={{ marginRight: '20px' }}>
									Payment Method:{paymentMethod}
								</small>

								<br />
							</div>
						</div>
					</div>
					{loading && <LoadingBox></LoadingBox>}
					{error && <MessageBox varient='danger'>{error}</MessageBox>}

					<button
						className='shipping-btn '
						disabled={cart.cartItems.length === 0}
						onClick={placeOrderHandler}>
						Proceed
					</button>
				</div>
			</div>
		</div>
	);
};

export default OrderScreen;
