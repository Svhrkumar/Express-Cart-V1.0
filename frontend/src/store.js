import { data } from './data';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {
	electricProductDetailsReducer,
	electronicItemListReducer,
	electronicsProductCreateReducer,
	productCreateReducer,
	proDuctDeleteReducer,
	productDetailsReducer,
	productListReducer,
	productUpdateReducer,
} from './reducer/productReducers';
import { cartItemsReducer } from './reducer/cartReducer';
import {
	userDeleteReducer,
	userDetailsReducer,
	userListUpdateReducer,
	userRegisterReducer,
	userSigninReducer,
	usersListReducer,
	userUpdateReducer,
} from './reducer/userReducer';
import {
	orderDetailsReducer,
	orderPayReducer,
	orderReducer,
	orderMineListReducer,
	orderListUserReducer,
	userOrderDeleteReducer,
	orderDeliveredReducer,
} from './reducer/orderReducer';
import {
	bannersListReducer,
	carouselAddsReducer,
	electronicBannersListReducer,
} from './reducer/advertismentsReducer';

export const initialState = {
	loading: true,
	products: [],
	product: {},
	cart: {
		cartItems: localStorage.getItem('cartItem')
			? JSON.parse(localStorage.getItem('cartItem'))
			: [],

		shippingAddress: localStorage.getItem('deliveryData')
			? JSON.parse(localStorage.getItem('deliveryData'))
			: null,
	},
	user: {
		user: localStorage.getItem('userInfo')
			? JSON.parse(localStorage.getItem('userInfo'))
			: null,
	},

	totalPrice: '',
	paymentMethod: '',
	success: false,
};
const reducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: cartItemsReducer,
	user: userSigninReducer,
	userRegister: userRegisterReducer,
	orderCreate: orderReducer,
	orderDetails: orderDetailsReducer,
	orderPay: orderPayReducer,
	orderMine: orderMineListReducer,
	userDetails: userDetailsReducer,
	userUpdateProfile: userUpdateReducer,
	productCreate: productCreateReducer,
	productUpdate: productUpdateReducer,
	productDelete: proDuctDeleteReducer,
	orderListUser: orderListUserReducer,
	userOrderDelete: userOrderDeleteReducer,
	orderDelivered: orderDeliveredReducer,
	usersList: usersListReducer,
	userDelete: userDeleteReducer,
	userUpdate: userListUpdateReducer,
	carouselOffers: carouselAddsReducer,
	bannersOffers: bannersListReducer,
	electronicProducts: electronicItemListReducer,
	eletronicProductDetails: electricProductDetailsReducer,
	electronicOffers: electronicBannersListReducer,
	electronicProductsCreate: electronicsProductCreateReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	initialState,
	composeEnhancer(applyMiddleware(thunk))
);
export default store;
