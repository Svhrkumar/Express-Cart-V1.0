import {
	ADD_CREATE_REQUEST,
	ADD_CREATE_SUCCESS,
	ADD_CREATE_FAIL,
	CAROUSEL_FASHION_ADDS_SUCCESS,
	CAROUSEL_FASHION_ADDS_REQUEST,
	CAROUSEL_FASHION_ADDS_FAIL,
	CAROUSEL_ELECTRIC_ADDS_SUCCESS,
	CAROUSEL_ELECTRIC_ADDS_REQUEST,
	CAROUSEL_ELECTRIC_ADDS_FAIL,
	HOME_ADDS_SUCCESS,
	HOME_ADDS_REQUEST,
	HOME_ADDS_FAIL,
} from '../types/type';
import axios from 'axios';

export const createOffersAction = (banner) => async (dispatch, getState) => {
	dispatch({ type: ADD_CREATE_REQUEST });
	const { user } = getState();
	try {
		const { data } = await axios.post(
			`/api/offers`,
			{ banner },
			{
				headers: {
					Authorization: `Bearer ${user.user.token}`,
				},
			}
		);
		console.log('-------product----action------', data);

		dispatch({
			type: ADD_CREATE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: ADD_CREATE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const listCarouselOffers = () => async (dispatch) => {
	dispatch({
		type: CAROUSEL_FASHION_ADDS_REQUEST,
	});
	dispatch({
		type: CAROUSEL_ELECTRIC_ADDS_REQUEST,
	});
	dispatch({
		type: HOME_ADDS_REQUEST,
	});

	try {
		const { data } = await axios.get(`/api/offers/banners`);
		console.log('-------product----action------', data);
		dispatch({
			type: CAROUSEL_FASHION_ADDS_SUCCESS,
			payload: data,
		});
		dispatch({
			type: CAROUSEL_ELECTRIC_ADDS_SUCCESS,
			payload: data,
		});

		dispatch({
			type: HOME_ADDS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: CAROUSEL_FASHION_ADDS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
		dispatch({
			type: CAROUSEL_ELECTRIC_ADDS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
		dispatch({
			type: HOME_ADDS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
