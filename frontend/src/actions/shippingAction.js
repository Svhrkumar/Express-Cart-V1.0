import { ADD_DELIVEY_ADDRESS } from '../types/type';

export const addDeliveryAddress = (data) => (dispatch) => {
	console.log('---------shipping-------------', data);
	dispatch({
		type: ADD_DELIVEY_ADDRESS,
		payload: data,
	});
	localStorage.setItem('deliveryData', JSON.stringify(data));
};
