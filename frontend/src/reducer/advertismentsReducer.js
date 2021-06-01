import {
	ADD_CREATE_FAIL,
	ADD_CREATE_REQUEST,
	ADD_CREATE_SUCCESS,
	CAROUSEL_FASHION_ADDS_REQUEST,
	CAROUSEL_FASHION_ADDS_SUCCESS,
	CAROUSEL_FASHION_ADDS_FAIL,
	CAROUSEL_ELECTRIC_ADDS_REQUEST,
	CAROUSEL_ELECTRIC_ADDS_SUCCESS,
	CAROUSEL_ELECTRIC_ADDS_FAIL,
	ADD_CREATE_RESET,
} from '../types/type';

export const carouselAddsReducer = (state = {}, action) => {
	switch (action.type) {
		case ADD_CREATE_REQUEST:
			return {
				loading: true,
			};

		case ADD_CREATE_SUCCESS:
			return {
				loading: false,
				success: true,
				carouselImages: action.payload,
			};
		case ADD_CREATE_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case ADD_CREATE_RESET:
			return {};
		default:
			return state;
	}
};

export const electronicBannersListReducer = (state = {}, action) => {
	switch (action.type) {
		case CAROUSEL_ELECTRIC_ADDS_REQUEST:
			return {
				loading: true,
			};

		case CAROUSEL_ELECTRIC_ADDS_SUCCESS:
			return {
				loading: false,
				success: true,
				carouselImages: action.payload.carouselOffers.filter(
					(offers) => offers.category == 'Electronics'
				),
			};
		case CAROUSEL_ELECTRIC_ADDS_FAIL:
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

export const bannersListReducer = (state = {}, action) => {
	switch (action.type) {
		case CAROUSEL_FASHION_ADDS_REQUEST:
			return {
				loading: true,
			};

		case CAROUSEL_FASHION_ADDS_SUCCESS:
			return {
				loading: false,
				success: true,
				carouselImages: action.payload.carouselOffers.filter(
					(offers) => offers.category == 'Fashion'
				),
			};
		case CAROUSEL_FASHION_ADDS_FAIL:
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
