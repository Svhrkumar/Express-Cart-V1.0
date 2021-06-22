import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useHistory } from 'react-router-dom';
import { listOrderMine } from '../actions/orderAction';
import '../index.css';
const OrderHistory = () => {
	const orderMine = useSelector((state) => state.orderMine);
	const { loading, error, orders } = orderMine;

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(listOrderMine());
	}, [dispatch]);

	console.log('------------order history-----', orders);
	return (
		<div>
			<div style={{ marginTop: '60px', marginLeft: '180px' }}>
				<h1>Order History</h1>
			</div>

			<hr />
			{loading ? (
				<LoadingBox></LoadingBox>
			) : error ? (
				<MessageBox variant='danger'>{error}</MessageBox>
			) : (
				<React.Fragment>
					{orders.reverse() &&
						orders
							.reverse()
							.map((items) => (
								<React.Fragment>
									<div className='order-history-ctn'>
										<div className='order-item-history-ctn ' key={items._id}>
											<h4 style={{ margin: '20px' }}>Order ID:{items._id}</h4>
											<div>
												{items &&
													items.orderItems &&
													items.orderItems.map((item) => (
														<div
															className='cart-info'
															style={{ borderRadius: '9px' }}
															key={item._id}>
															<div
																className='cart-item-image'
																style={{ width: '100px' }}>
																<img
																	src={item.image[0]}
																	height='100px'
																	width='auto'
																/>
															</div>
															<div
																style={{ margin: '0px 20px', width: '100%' }}>
																<div className='cart-item-name'>
																	<p style={{ marginRight: '20px' }}>
																		{item.name}
																	</p>

																	<br />
																	<small style={{ marginRight: '10px' }}>
																		{item.description}
																	</small>
																	<p>Qty:{item.qty}</p>
																</div>
															</div>
															<div style={{ margin: '40px 5px' }}>
																<p>₹: {item.price}</p>
															</div>
														</div>
													))}
											</div>
										</div>
										<div style={{ marginTop: '60px' }}>
											<div>
												<p
													style={{
														marginRight: '20px',
														fontSize: '20px',
														fontWeight: 'bold',
													}}>
													Order Total: ₹ {items.totalPrice}
												</p>
												<small style={{ marginRight: '20px' }}>
													Payment Method:{items.paymentMethod} <br />
													status:
													{items.isPaid == false ? (
														<p style={{ color: 'red' }}>payment pending</p>
													) : (
														<p style={{ color: 'green' }}>paid</p>
													)}
												</small>

												<br />
											</div>
											<div>
												<h4>
													Delivery Status:
													{items.isDeliverd == false ? (
														<p style={{ color: 'red' }}>Not Delivered</p>
													) : (
														<p style={{ color: 'green' }}>Delivered</p>
													)}
												</h4>
											</div>
										</div>
									</div>
									<hr />
								</React.Fragment>
							))
							.reverse()}
				</React.Fragment>
			)}
		</div>
	);
};

export default OrderHistory;
