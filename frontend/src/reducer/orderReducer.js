import {
	ORDER_REQUEST,
	ORDER_SUCCESS,
	ORDER_FAIL,
	ORDER_RESET,
	ORDER_DETAILS_REQUEST,
	ORDER_DETAILS_SUCCESS,
	ORDER_DETAILS_FAIL,
	ORDER_PAY_SUCCESS,
	ORDER_PAY_REQUEST,
	ORDER_PAY_FAIL,
	ORDER_PAY_RESET,
	ORDER_MINE_LIST_REQUEST,
	ORDER_MINE_LIST_FAIL,
	ORDER_MINE_LIST_SUCCESS,
	ORDER_LIST_USER_REQUEST,
	ORDER_LIST_USER_SUCCESS,
	ORDER_LIST_USER_FAIL,
	ORDER_LIST_USER_RESET,
	USER_ORDER_DELETE_REQUEST,
	USER_ORDER_DELETE_SUCCESS,
	USER_ORDER_DELETE_FAIL,
	USER_ORDER_DELETE_RESET,
	ORDER_DELIVERED_REQUEST,
	ORDER_DELIVERED_SUCCESS,
	ORDER_DELIVERED_FAIL,
	ORDER_DELIVERED_RESET,
} from '../types/type';

export const orderReducer = (state = {}, action) => {
	switch (action.type) {
		case ORDER_REQUEST:
			return {
				loading: true,
			};
		case ORDER_SUCCESS:
			return {
				loading: false,
				order: action.payload,
				success: true,
			};
		case ORDER_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case ORDER_RESET:
			return {};

		default:
			return state;
	}
};

export const orderDetailsReducer = (state = { loading: true }, action) => {
	switch (action.type) {
		case ORDER_DETAILS_REQUEST:
			return {
				loading: true,
			};
		case ORDER_DETAILS_SUCCESS:
			return {
				loading: false,
				order: action.payload,
			};
		case ORDER_DETAILS_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const orderPayReducer = (state = {}, action) => {
	switch (action.type) {
		case ORDER_PAY_REQUEST:
			return {
				loading: true,
			};
		case ORDER_PAY_SUCCESS:
			return {
				loading: false,
				orders: action.payload,
			};
		case ORDER_PAY_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case ORDER_PAY_RESET:
			return {};
		default:
			return state;
	}
};

export const orderMineListReducer = (state = { orders: [] }, action) => {
	switch (action.type) {
		case ORDER_MINE_LIST_REQUEST:
			return {
				loading: true,
			};
		case ORDER_MINE_LIST_SUCCESS:
			return {
				loading: false,
				orders: action.payload,
			};
		case ORDER_MINE_LIST_FAIL:
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

export const orderListUserReducer = (state = { orders: [] }, action) => {
	switch (action.type) {
		case ORDER_LIST_USER_REQUEST:
			return {
				loading: true,
			};
		case ORDER_LIST_USER_SUCCESS:
			return {
				loading: false,
				orders: action.payload,
			};
		case ORDER_LIST_USER_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case ORDER_LIST_USER_RESET:
			return {};
		default:
			return state;
	}
};

export const userOrderDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_ORDER_DELETE_REQUEST:
			return {
				loading: true,
			};
		case USER_ORDER_DELETE_SUCCESS:
			return {
				loading: false,
				success: true,
			};

		case USER_ORDER_DELETE_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case USER_ORDER_DELETE_RESET:
			return {};

		default:
			return state;
	}
};

export const orderDeliveredReducer = (state = {}, action) => {
	switch (action.type) {
		case ORDER_DELIVERED_REQUEST:
			return {
				loading: true,
			};
		case ORDER_DELIVERED_SUCCESS:
			return {
				loading: false,
				success: true,
				orders: action.payload,
			};

		case ORDER_DELIVERED_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case ORDER_DELIVERED_RESET:
			return {};

		default:
			return state;
	}
};
