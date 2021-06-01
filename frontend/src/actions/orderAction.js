import axios from 'axios';
import { get } from 'mongoose';
import {
	ORDER_REQUEST,
	ORDER_SUCCESS,
	ORDER_FAIL,
	ORDER_RESET,
	CART_EMPTY,
	ORDER_DETAILS_REQUEST,
	ORDER_DETAILS_FAIL,
	ORDER_DETAILS_SUCCESS,
	ORDER_PAY_REQUEST,
	ORDER_PAY_SUCCESS,
	ORDER_PAY_FAIL,
	ORDER_PAY_RESET,
	ORDER_MINE_LIST_REQUEST,
	ORDER_MINE_LIST_SUCCESS,
	ORDER_MINE_LIST_FAIL,
	ORDER_LIST_USER_REQUEST,
	ORDER_LIST_USER_SUCCESS,
	ORDER_LIST_USER_FAIL,
	USER_ORDER_DELETE_REQUEST,
	USER_ORDER_DELETE_SUCCESS,
	USER_ORDER_DELETE_FAIL,
	ORDER_DELIVERED_REQUEST,
	ORDER_DELIVERED_FAIL,
	ORDER_DELIVERED_SUCCESS,
} from '../types/type';

export const orderPlacedAction = (order) => async (dispatch, getState) => {
	dispatch({ type: ORDER_REQUEST, payload: order });
	try {
		const { user } = getState();
		console.log('---------token order action -----------', user.user.token);
		console.log('--------- order action -----------', order);
		const { data } = await axios.post('/api/orders', order, {
			headers: {
				Authorization: `Bearer ${user.user.token}`,
			},
		});
		console.log('-------------------order data resonse---------', data.order);
		dispatch({
			type: ORDER_SUCCESS,
			payload: data.order,
		});
		dispatch({
			type: CART_EMPTY,
		});
		localStorage.removeItem('cartItems');
	} catch (error) {
		dispatch({
			type: ORDER_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const detailsOrder = (orderId) => async (dispatch, getState) => {
	dispatch({ type: ORDER_DETAILS_REQUEST, payload: orderId });
	const { user } = getState();
	try {
		const { data } = await axios.get(`/api/orders/${orderId}`, {
			headers: {
				Authorization: `Bearer ${user.user.token}`,
			},
		});
		console.log('-----------order created Action-----------', data);
		dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		dispatch({ type: ORDER_DETAILS_FAIL, payload: message });
	}
};

export const payOrder = (order, paymentResult) => async (
	dispatch,
	getState
) => {
	dispatch({ type: ORDER_PAY_REQUEST, payload: { order, paymentResult } });
	const { user } = getState();
	try {
		const { data } = await axios.put(
			`/api/orders/${order._id}/pay`,
			paymentResult,
			{
				headers: {
					Authorization: `Bearer ${user.user.token}`,
				},
			}
		);
		console.log('-----------order PAY_SUCCESS-----------', data);
		dispatch({ type: ORDER_PAY_SUCCESS, payload: data });
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;

		console.log('----------order PAY_fail-----------', message);
		dispatch({ type: ORDER_PAY_FAIL, payload: message });
	}
};

export const listOrderMine = () => async (dispatch, getState) => {
	dispatch({
		type: ORDER_MINE_LIST_REQUEST,
	});
	const { user } = getState();
	console.log('------------------orders history------------------');

	try {
		const { data } = await axios.get('/api/orders/mine', {
			headers: {
				Authorization: `Bearer ${user.user.token}`,
			},
		});
		dispatch({ type: ORDER_MINE_LIST_SUCCESS, payload: data });
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		dispatch({ type: ORDER_MINE_LIST_FAIL, payload: message });
	}
};

export const ordersListUserAction = () => async (dispatch, getState) => {
	dispatch({ type: ORDER_LIST_USER_REQUEST });
	const { user } = getState();
	console.log('-----------order list action------');
	try {
		const { data } = await axios.get('/api/orders/', {
			headers: {
				Authorization: `Bearer ${user.user.token}`,
			},
		});
		dispatch({
			type: ORDER_LIST_USER_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		dispatch({
			type: ORDER_LIST_USER_FAIL,
			payload: message,
		});
	}
};

export const userOrderDeleteAction = (orderId) => async (
	dispatch,
	getState
) => {
	dispatch({ type: USER_ORDER_DELETE_REQUEST, payload: orderId });
	const { user } = getState();
	try {
		const { data } = await axios.delete(`/api/orders/${orderId}`, {
			headers: {
				Authorization: `Bearer ${user.user.token}`,
			},
		});
		dispatch({ type: USER_ORDER_DELETE_SUCCESS, payload: data });
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		dispatch({
			type: USER_ORDER_DELETE_FAIL,
			payload: message,
		});
	}
};

export const deliverOrder = (orderId) => async (dispatch, getState) => {
	dispatch({ type: ORDER_DELIVERED_REQUEST, payload: orderId });
	const { user } = getState();
	try {
		const { data } = await axios.put(
			`/api/orders/${orderId}/deliver`,
			{},
			{
				headers: { Authorization: `Bearer ${user.user.token}` },
			}
		);
		dispatch({ type: ORDER_DELIVERED_SUCCESS, payload: data });
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		dispatch({ type: ORDER_DELIVERED_FAIL, payload: message });
	}
};
