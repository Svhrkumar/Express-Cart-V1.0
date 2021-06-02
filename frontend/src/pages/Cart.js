import React, { useEffect, useState } from 'react';
import {
	addToCartItems,
	removeFromCart,
	addShippingAddress,
	saveTotalPrice,
} from '../actions/cartAction';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
const Cart = (props) => {
	const [addAddress, setAddAddress] = useState(false);
	const [btnName, setBtnName] = useState('Add Adress');
	const [address, setAddress] = useState('');
	const [hideBtn, setHideBtn] = useState(false);
	const history = useHistory();
	const cart = useSelector((state) => state.cart);
	const productId = props.match.params.id;
	const qty = props.location.search
		? Number(props.location.search.split('=')[1])
		: 1;
	const dispatch = useDispatch();
	const { cartItems, addressInfo, editAddress } = cart;

	useEffect(() => {
		if (productId) {
			dispatch(addToCartItems(productId, qty));
		}
		if (addressInfo) {
			setBtnName('change Address');
		}
	}, [productId, qty]);

	console.log('-----cart----', cart);
	console.log('-----cart Item----', cartItems);
	const discount = cartItems.reduce((a, c) => a + c.discount, 0);

	const TotalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

	const total = TotalPrice - discount;

	const removeCartItem = (id) => {
		dispatch(removeFromCart(id));
	};

	const checkOut = () => {
		dispatch(saveTotalPrice(total));
		history.push('/shipping');
	};
	return (
		<div>
			{cartItems.length === 0 ? (
				<div className='cart-card'>
					<div className='cart-title'>Your Cart</div>
					<hr className='cart-hr'></hr>
					<div
						style={{
							display: 'grid',
							placeItems: 'center',
							marginTop: '200px',
						}}>
						<h2>Your Cart is Empty</h2>
					</div>
				</div>
			) : (
				<div className='cart-card'>
					<div className='cart-title'>Your Cart</div>
					<hr className='cart-hr'></hr>
					<div className='cart-sub-ctn'>
						<div className='cart-info-ctn'>
							{cartItems &&
								cartItems.map((item, key) => (
									<div className='cart-info' key={key}>
										<div className='cart-item-image'>
											<img src={item.image[0]} height='100px' width='auto' />
										</div>
										<div style={{ margin: '0px 20px', width: '50%' }}>
											<div className='cart-item-name'>
												<p style={{ marginRight: '20px' }}>{item.name}</p>

												<br />
												<small style={{ marginRight: '20px' }}>
													{item.description.slice(0, 60)}
												</small>
												<p>Qty:{item.qty}</p>
											</div>
										</div>
										<div style={{ margin: '40px 5px' }}>
											<p>Rs: {item.price}</p>
										</div>
										<div className='cart-item-remove-btn-ctn'>
											<button
												type='button'
												className='cart-remove-btn '
												onClick={() => removeCartItem(item.product)}>
												Remove
											</button>
										</div>
									</div>
								))}
						</div>
						<div className='cart-total-ctn'>
							<div className='delivery-ctn'>
								<p style={{ color: '' }}>Delivery Address</p>

								<div
									className='delivery-info'
									style={{ display: 'grid', placeItems: 'center' }}>
									<Link
										to='/'
										className='cart-addAddress-btn'
										style={{ borderRadius: '99px' }}>
										{btnName}
									</Link>

									<div></div>
								</div>
							</div>
							<hr className='cart-hr' />

							<div className='cart-total-cost'>
								<div className='price-Details'>
									<div>
										<p className='price-info'>Total MRP : </p>
										<p className='price-info'>Discount MRP: </p>
										<p className='price-info'>Discount Coupon</p>
									</div>
									<div>
										<p className='price-info'>
											{' '}
											{cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
										</p>
										<p className='price-info'>
											{cartItems.reduce((a, c) => a + c.discount * c.qty, 0)}
										</p>
										<p className='price-info'>
											<a>Apply Coupon</a>
										</p>
									</div>
								</div>
								<hr></hr>

								<div className='total-price-tag'>
									<p>Total Price :</p>

									<div>{total}</div>
								</div>
								<hr></hr>
								<div style={{ display: 'grid', placeItems: 'center' }}>
									<button className='cart-place-order-btn' onClick={checkOut}>
										<b>Place Order</b>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
