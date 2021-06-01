import axios from 'axios';
import {
	ADD_ADDRESS,
	CART_ADD_ITEM,
	CART_REMOVE_ITEM,
	PAYMENT_METHOD,
	TOTAL_PRICE,
	ORDER_PLACED,
} from '../types/type';

export const addToCartItems =
	(productId, qty) => async (dispatch, getState) => {
		const { data } = await axios.get(`/api/products/${productId}`);
		console.log('................cart action--------------', data, productId);

		dispatch({
			type: CART_ADD_ITEM,
			payload: {
				name: data.product.name,
				description: data.product.description,
				image: data.product.image,
				price: data.product.price,
				countInStock: data.product.countInStock,
				product: data.product._id,
				discount: data.product.discount,
				qty,
			},
		});
		console.log('---------?---------------', getState().cart.cartItems);
		localStorage.setItem('cartItem', JSON.stringify(getState().cart.cartItems));
	};
export const addItemToCart = (productId, qty) => async (dispatch, getState) => {
	const { data } = await axios.get(`/api/product/electronics/${productId}`);
	console.log('................cart action--------------', data, productId);

	dispatch({
		type: CART_ADD_ITEM,
		payload: {
			name: data.product.name,
			description: data.product.description,
			image: data.product.image,
			price: data.product.price,
			countInStock: data.product.countInStock,
			product: data.product._id,
			discount: data.product.discount,
			qty,
		},
	});
	console.log('---------?---------------', getState().cart.cartItems);
	localStorage.setItem('cartItem', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (productId) => (dispatch, getState) => {
	console.log('---------remove-productID-------------', productId);
	dispatch({
		type: CART_REMOVE_ITEM,
		payload: productId,
	});
	localStorage.setItem('cartItem', JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data) => (dispatch) => {
	console.log('---------shipping-------------', data.fullname);
	dispatch({
		type: ADD_ADDRESS,
		payload: data,
	});
	localStorage.setItem('shippingData', JSON.stringify(data));
};

export const savePaymetMethod = (data) => (dispatch) => {
	dispatch({
		type: PAYMENT_METHOD,
		payload: data,
	});
};

export const saveTotalPrice = (data) => (dispatch) => {
	dispatch({
		type: TOTAL_PRICE,
		payload: data,
	});
};
