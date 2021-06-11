import axios from 'axios';
import {
	PRODUCT_DETAILS_FAIL,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	CART_ADD_ITEM,
	FASHION_PRODUCT_CREATE_REQUEST,
	FASHION_PRODUCT_CREATE_SUCCESS,
	FASHION_PRODUCT_CREATE_FAIL,
	PRODUCT_UPDATE_REQUEST,
	PRODUCT_UPDATE_SUCCESS,
	PRODUCT_UPDATE_FAIL,
	PRODUCT_DELETE_REQUEST,
	PRODUCT_DELETE_SUCCESS,
	PRODUCT_DELETE_FAIL,
	ELECTRONIC_ITEMS_LIST_REQUEST,
	ELECTRONIC_ITEMS_LIST_SUCCESS,
	ELECTRONIC_ITEMS_LIST_FAIL,
	ELECTRIC_PRODUCT_DETAILS_SUCCESS,
	ELECTRIC_PRODUCT_DETAILS_REQUEST,
	ELECTRIC_PRODUCT_DETAILS_FAIL,
	ELECTRONICS_PRODUCT_CREATE_REQUEST,
	ELECTRONICS_PRODUCT_CREATE_SUCCESS,
	ELECTRONICS_PRODUCT_CREATE_FAIL,
	PRODUCT_VIEWES_HISTORY,
	ELECTRIC_MOBILE_DETAILS_REQUEST,
	ELECTRIC_MOBILE_DETAILS_SUCCESS,
	ELECTRIC_MOBILE_DETAILS_FAIL,
	ELECTRIC_LAPTOP_DETAILS_REQUEST,
	ELECTRIC_LAPTOP_DETAILS_SUCCESS,
} from '../types/type';

export const listProducts = () => async (dispatch) => {
	dispatch({
		type: PRODUCT_LIST_REQUEST,
	});
	try {
		const { data } = await axios.get('/api/products');
		console.log('----------list product action -----------', data);
		dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data.products });
	} catch (error) {
		dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
	}
};

export const detailsProduct = (productId, category) => async (dispatch) => {
	console.log('-------product----action------', productId);

	dispatch({
		type: PRODUCT_DETAILS_REQUEST,
		payload: productId,
	});

	try {
		const { data } = await axios.get(`/api/products/${productId}`);

		console.log('-------product----action------', data);
		dispatch({
			type: PRODUCT_DETAILS_SUCCESS,
			payload: data.product,
		});

		dispatch({
			type: PRODUCT_VIEWES_HISTORY,
			payload: data.product,
		});
	} catch (error) {
		dispatch({
			type: PRODUCT_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const createproductAction = (product) => async (dispatch, getState) => {
	dispatch({ type: FASHION_PRODUCT_CREATE_REQUEST });
	const { user } = getState();
	try {
		const { data } = await axios.post(
			`/api/products`,
			{ product },
			{
				headers: {
					Authorization: `Bearer ${user.user.token}`,
				},
			}
		);
		console.log('-------product----action------', data);
		dispatch({
			type: FASHION_PRODUCT_CREATE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: FASHION_PRODUCT_CREATE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const updateProductAction = (product) => async (dispatch, getState) => {
	dispatch({ type: PRODUCT_UPDATE_REQUEST, payload: product });
	const { user } = getState();
	try {
		const { data } = await axios.put(
			`/api/products/${product._id}`,
			{ product },
			{
				headers: {
					Authorization: `Bearer ${user.user.token}`,
				},
			}
		);
		console.log('-------product----action------', data);
		dispatch({
			type: PRODUCT_UPDATE_SUCCESS,
			payload: data.product,
		});
	} catch (error) {
		dispatch({
			type: PRODUCT_UPDATE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const deleteProductAction = (itemId) => async (dispatch, getState) => {
	dispatch({ type: PRODUCT_DELETE_REQUEST, payload: itemId });
	const { user } = getState();
	try {
		const { data } = await axios.delete(`/api/products/${itemId}`, {
			headers: {
				Authorization: `Bearer ${user.user.token}`,
			},
		});

		dispatch({ type: PRODUCT_DELETE_SUCCESS });
	} catch (error) {
		dispatch({
			type: PRODUCT_DELETE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
//common

//Electronic Products action //

export const listElectrinics = () => async (dispatch) => {
	dispatch({ type: ELECTRONIC_ITEMS_LIST_REQUEST });
	try {
		const { data } = await axios.get('/api/product/electronics');
		console.log('----------list product action -----------', data);
		dispatch({
			type: ELECTRONIC_ITEMS_LIST_SUCCESS,
			payload: data.electronicItems,
		});
	} catch (error) {
		dispatch({ type: ELECTRONIC_ITEMS_LIST_FAIL, payload: error.message });
	}
};

export const electricProductDetails = (productId) => async (dispatch) => {
	dispatch({
		type: ELECTRIC_PRODUCT_DETAILS_REQUEST,
		payload: productId,
	});

	try {
		const { data } = await axios.get(`/api/product/electronics/${productId}`);

		console.log('-------product----action------', data);
		dispatch({
			type: ELECTRIC_PRODUCT_DETAILS_SUCCESS,
			payload: data.product,
		});
		dispatch({
			type: PRODUCT_VIEWES_HISTORY,
			payload: data.product,
		});
	} catch (error) {
		dispatch({
			type: ELECTRIC_PRODUCT_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const createElectronicsProduct =
	(product) => async (dispatch, getState) => {
		dispatch({ type: ELECTRONICS_PRODUCT_CREATE_REQUEST });
		const { user } = getState();
		try {
			const { data } = await axios.post(
				`/api/product/electronics`,
				{ product },
				{
					headers: {
						Authorization: `Bearer ${user.user.token}`,
					},
				}
			);
			console.log('-------product----action------', data);
			dispatch({
				type: ELECTRONICS_PRODUCT_CREATE_SUCCESS,
				payload: data,
			});
			dispatch();
		} catch (error) {
			dispatch({
				type: ELECTRONICS_PRODUCT_CREATE_FAIL,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	};

export const electricMobileProductDetails = () => async (dispatch) => {
	dispatch({
		type: ELECTRIC_MOBILE_DETAILS_REQUEST,
	});

	try {
		const { data } = await axios.get(`/api/product/electronics/mobiles`);

		console.log('-------product----action------', data);
		dispatch({
			type: ELECTRIC_MOBILE_DETAILS_SUCCESS,
			payload: data.mobileItems,
		});
	} catch (error) {
		dispatch({
			type: ELECTRIC_MOBILE_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const electricLaptopProductDetails = () => async (dispatch) => {
	dispatch({
		type: ELECTRIC_LAPTOP_DETAILS_REQUEST,
	});

	try {
		const { data } = await axios.get(`/api/product/electronics/laptops`);

		console.log('-------product----action------', data);
		dispatch({
			type: ELECTRIC_LAPTOP_DETAILS_SUCCESS,
			payload: data.laptopsItems,
		});
	} catch (error) {
		dispatch({
			type: ELECTRIC_MOBILE_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
