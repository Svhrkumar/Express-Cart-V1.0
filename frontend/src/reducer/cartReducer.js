import {
	ADD_ADDRESS,
	CART_ADD_ITEM,
	CART_REMOVE_ITEM,
	PAYMENT_METHOD,
	TOTAL_PRICE,
	CART_EMPTY,
	REMOVE_ADDRESS,
	ADD_DELIVEY_ADDRESS,
	REMOVE_DELIVEY_ADDRESS,
} from '../types/type';

export const cartItemsReducer = (
	state = { cartItems: [],shippingAddress:{},editAddress: false },
	action
) => {
	switch (action.type) {
		case CART_ADD_ITEM:
			const item = action.payload;
			const existItem = state.cartItems.find((x) => x.product === item.product);
			if (existItem) {
				return {
					...state,
					cartItems: state.cartItems.map((x) =>
						x.product === existItem.product ? item : x
					),
				};
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, item],
				};
			}
		case CART_REMOVE_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter((x) => x.product !== action.payload),
			};
		case CART_EMPTY:
			return {
				...state,
				cartItems: [],
			};

		case ADD_DELIVEY_ADDRESS:
			return {
				...state,
				shippingAddress: action.payload,
			};
		case REMOVE_DELIVEY_ADDRESS:
			return {
				...state,
				shippingAddress: {},
			};

		case PAYMENT_METHOD:
			return {
				...state,
				paymentMethod: action.payload,
			};
		case TOTAL_PRICE:
			return {
				...state,
				totalPrice: action.payload,
			};

		default:
			return state;
	}
};
