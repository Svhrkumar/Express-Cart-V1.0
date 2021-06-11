import { initialState } from '../store';
import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAIL,
	CART_ADD_ITEM,
	FASHION_PRODUCT_CREATE_REQUEST,
	FASHION_PRODUCT_CREATE_SUCCESS,
	FASHION_PRODUCT_CREATE_RESET,
	PRODUCT_UPDATE_SUCCESS,
	FASHION_PRODUCT_CREATE_FAIL,
	PRODUCT_UPDATE_RESET,
	PRODUCT_UPDATE_REQUEST,
	PRODUCT_UPDATE_FAIL,
	PRODUCT_DELETE_REQUEST,
	PRODUCT_DELETE_SUCCESS,
	PRODUCT_DELETE_FAIL,
	PRODUCT_DELETE_RESET,
	ELECTRONIC_ITEMS_LIST_REQUEST,
	ELECTRONIC_ITEMS_LIST_SUCCESS,
	ELECTRONIC_ITEMS_LIST_FAIL,
	ELECTRIC_PRODUCT_DETAILS_REQUEST,
	ELECTRIC_PRODUCT_DETAILS_SUCCESS,
	ELECTRIC_PRODUCT_DETAILS_FAIL,
	ELECTRONICS_PRODUCT_CREATE_REQUEST,
	ELECTRONICS_PRODUCT_CREATE_SUCCESS,
	ELECTRONICS_PRODUCT_CREATE_RESET,
	ELECTRONICS_PRODUCT_CREATE_FAIL,
	PRODUCT_VIEWES_HISTORY,
	ELECTRIC_LAPTOP_DETAILS_FAIL,
	ELECTRIC_LAPTOP_DETAILS_REQUEST,
	ELECTRIC_LAPTOP_DETAILS_SUCCESS,
	ELECTRIC_MOBILE_DETAILS_FAIL,
	ELECTRIC_MOBILE_DETAILS_REQUEST,
	ELECTRIC_MOBILE_DETAILS_SUCCESS,
} from '../types/type';

export const productListReducer = (
	state = { loading: true, products: [] },
	action
) => {
	const { loading, products } = initialState;
	switch (action.type) {
		case PRODUCT_LIST_REQUEST:
			return { loading: true };
		case PRODUCT_LIST_SUCCESS:
			return { loading: false, products: action.payload };
		case PRODUCT_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const productDetailsReducer = (
	state = { loading: true, product: {} },
	action
) => {
	switch (action.type) {
		case PRODUCT_DETAILS_REQUEST:
			return {
				loading: true,
			};
		case PRODUCT_DETAILS_SUCCESS:
			return {
				loading: false,
				product: action.payload,
			};
		case PRODUCT_DETAILS_FAIL:
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

export const productCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case FASHION_PRODUCT_CREATE_REQUEST:
			return {
				loading: true,
			};
		case FASHION_PRODUCT_CREATE_SUCCESS:
			return {
				loading: false,
				success: true,
				product: action.payload,
			};
		case FASHION_PRODUCT_CREATE_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case FASHION_PRODUCT_CREATE_RESET:
			return {};
		default:
			return state;
	}
};

export const productUpdateReducer = (state = {}, action) => {
	switch (action.type) {
		case PRODUCT_UPDATE_REQUEST:
			return {
				loading: true,
			};
		case PRODUCT_UPDATE_SUCCESS:
			return {
				loading: false,
				success: true,
			};
		case PRODUCT_UPDATE_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case PRODUCT_UPDATE_RESET:
			return {};

		default:
			return state;
	}
};

export const proDuctDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case PRODUCT_DELETE_REQUEST:
			return {
				loading: true,
			};
		case PRODUCT_DELETE_SUCCESS:
			return {
				loading: false,
				success: true,
			};
		case PRODUCT_DELETE_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case PRODUCT_DELETE_RESET:
			return {};
		default:
			return state;
	}
};

//Electronic Items Reducers

export const electronicItemListReducer = (state = {}, action) => {
	switch (action.type) {
		case ELECTRONIC_ITEMS_LIST_REQUEST:
			return {
				loading: true,
			};
		case ELECTRONIC_ITEMS_LIST_SUCCESS:
			return {
				loading: false,
				electronicItems: action.payload,
			};
		case ELECTRONIC_ITEMS_LIST_FAIL:
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

export const electricProductDetailsReducer = (
	state = { loading: true, product: {} },
	action
) => {
	switch (action.type) {
		case ELECTRIC_PRODUCT_DETAILS_REQUEST:
			return {
				loading: true,
			};
		case ELECTRIC_PRODUCT_DETAILS_SUCCESS:
			return {
				loading: false,
				product: action.payload,
			};
		case ELECTRIC_PRODUCT_DETAILS_FAIL:
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

export const electronicsProductCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case ELECTRONICS_PRODUCT_CREATE_REQUEST:
			return {
				loading: true,
			};
		case ELECTRONICS_PRODUCT_CREATE_SUCCESS:
			return {
				loading: false,
				success: true,
				electronicItems: action.payload,
			};
		case ELECTRONICS_PRODUCT_CREATE_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case ELECTRONICS_PRODUCT_CREATE_RESET:
			return {};
		default:
			return state;
	}
};

export const historyViewed = (state = { viewedHistory: [] }, action) => {
	switch (action.type) {
		case PRODUCT_VIEWES_HISTORY:
			return {
				viewedHistory: [action.payload],
			};

		default:
			return state;
	}
};

export const electricMobileDetailsReducer = (
	state = { loading: true },
	action
) => {
	switch (action.type) {
		case ELECTRIC_MOBILE_DETAILS_REQUEST:
			return {
				loading: true,
			};
		case ELECTRIC_MOBILE_DETAILS_SUCCESS:
			return {
				loading: false,
				mobiles: action.payload,
			};
		case ELECTRIC_MOBILE_DETAILS_FAIL:
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
export const electricLaptopDetailsReducer = (
	state = { loading: true },
	action
) => {
	switch (action.type) {
		case ELECTRIC_LAPTOP_DETAILS_REQUEST:
			return {
				loading: true,
			};
		case ELECTRIC_LAPTOP_DETAILS_SUCCESS:
			return {
				loading: false,
				laptops: action.payload,
			};
		case ELECTRIC_LAPTOP_DETAILS_FAIL:
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
