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
	HOME_ADDS_FAIL,
	HOME_ADDS_REQUEST,
	HOME_ADDS_SUCCESS,
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

export const fashionBannersListReducer = (state = {}, action) => {
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

export const homeBannersListReducer = (state = {}, action) => {
	switch (action.type) {
		case HOME_ADDS_REQUEST:
			return {
				loading: true,
			};

		case HOME_ADDS_SUCCESS:
			return {
				loading: false,
				success: true,
				bannersImages: action.payload,
			};
		case HOME_ADDS_FAIL:
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
