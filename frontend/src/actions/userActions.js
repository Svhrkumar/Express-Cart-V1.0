import axios from 'axios';
import {
	CART_EMPTY,
	REMOVE_ADDRESS,
	REMOVE_DELIVEY_ADDRESS,
} from '../types/type';
import {
	USER_SIGNIN_FAIL,
	USER_SIGNIN_REQUEST,
	USER_SIGNIN_SUCCESS,
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_SIGNOUT,
	USER_DETAILS_REQUEST,
	USER_DETAILS_SUCCESS,
	USER_DETAILS_FAIL,
	USER_UPDATE_PROFILE_REQUEST,
	USER_UPDATE_PROFILE_SUCCESS,
	USER_UPDATE_PROFILE_FAIL,
	USER_UPDATE_PROFILE_RESET,
	USERLIST_DETAILS_REQUEST,
	USERLIST_DETAILS_SUCCESS,
	USERLIST_DETAILS_FAIL,
	USER_DELETE_REQUEST,
	USER_DELETE_FAIL,
	USER_DELETE_SUCCESS,
	USER_UPDATE_REQUEST,
	USER_UPDATE_FAIL,
	USER_UPDATE_SUCCESS,
} from '../types/userTypes';

export const signinAction = (email, password) => async (dispatch) => {
	dispatch({
		type: USER_SIGNIN_REQUEST,
		payload: { email, password },
	});
	try {
		const { data } = await axios.post('/api/users/signin', { email, password });
		console.log('--------------Signin Action--------------', data);
		dispatch({
			type: USER_SIGNIN_SUCCESS,
			payload: data,
		});
		localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_SIGNIN_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
		console.log(
			'------------user error------',
			error.response && error.response.data.message
				? error.response.data.message
				: error.message
		);
	}
};

export const signoutAction = () => async (dispatch) => {
	console.log('--------------Signout Action--------------');
	localStorage.removeItem('userInfo');
	localStorage.removeItem('cartItem');
	localStorage.removeItem('shippingData');
	localStorage.removeItem('deliveryData');
	localStorage.clear();
	dispatch({ type: USER_SIGNOUT });
	dispatch({ type: CART_EMPTY });
	dispatch({ type: REMOVE_DELIVEY_ADDRESS });
};

export const registerAction = (name, email, password) => async (dispatch) => {
	try {
		const { data } = await axios.post('/api/users/register', {
			name,
			email,
			password,
		});
		console.log('--------------Signin Action--------------', data);
		dispatch({
			type: USER_REGISTER_SUCCESS,
			payload: data,
		});
		dispatch({
			type: USER_SIGNIN_SUCCESS,
			payload: data,
		});
		localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_REGISTER_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
		console.log(
			'------------user error------',
			error.response && error.response.data.message
				? error.response.data.message
				: error.message
		);
	}
};

export const detailsUser = (userId) => async (dispatch, getState) => {
	console.log('user details call dispatch');
	dispatch({
		type: USER_DETAILS_REQUEST,
		payload: userId,
	});
	const { user } = getState();
	try {
		const { data } = await axios.get(`/api/users/${userId}`, {
			headers: {
				Authorization: `Bearer ${user.user.token}`,
			},
		});
		dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: USER_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const userUpdateProfileAction = (userUpdate) => async (
	dispatch,
	getState
) => {
	console.log('------------user update-----------', userUpdate);
	dispatch({
		type: USER_UPDATE_PROFILE_REQUEST,
		payload: userUpdate,
	});
	const { user } = getState();
	try {
		const { data } = axios.put(`/api/users/profile`, userUpdate, {
			headers: {
				Authorization: `Bearer ${user.user.token}`,
			},
		});

		dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data });
		dispatch({
			type: USER_SIGNIN_SUCCESS,
			payload: data,
		});
		localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_UPDATE_PROFILE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const listUsers = () => async (dispatch, getState) => {
	dispatch({ type: USERLIST_DETAILS_REQUEST });
	try {
		const { user } = getState();
		const { data } = await axios.get('/api/users', {
			headers: {
				Authorization: `Bearer ${user.user.token}`,
			},
		});
		dispatch({
			type: USERLIST_DETAILS_SUCCESS,
			payload: data,
		});
		console.log('--------userlist response-----', data);
	} catch (error) {
		dispatch({
			type: USERLIST_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const deleteUser = (userId) => async (dispatch, getState) => {
	dispatch({ type: USER_DELETE_REQUEST, payload: userId });
	const { user } = getState();
	try {
		const { data } = await axios.delete(`/api/users/${userId}`, {
			headers: {
				Authorization: `Bearer ${user.user.token}`,
			},
		});
		dispatch({ type: USER_DELETE_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: USER_DELETE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const userUpdate = (userData, userId) => async (dispatch, getState) => {
	dispatch({
		type: USER_UPDATE_REQUEST,
		payload: userData,
	});
	const { user } = getState();
	try {
		const { data } = await axios.put(
			`/api/users/${userId}`,
			{ userData },
			{
				headers: { Authorization: `Bearer ${user.user.token}` },
			}
		);
		dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: USER_UPDATE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
