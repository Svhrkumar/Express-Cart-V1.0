import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	ordersListUserAction,
	userOrderDeleteAction,
} from '../actions/orderAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useHistory } from 'react-router-dom';
import { CART_EMPTY, USER_ORDER_DELETE_RESET } from '../types/type';

const OrderListUsers = () => {
	const dispatch = useDispatch();

	const history = useHistory();
	const orderListUser = useSelector((state) => state.orderListUser);
	const userOrderDelete = useSelector((state) => state.userOrderDelete);
	const {
		loading: deleteLoading,
		success: deleteSuccess,
		error: deleteError,
	} = userOrderDelete;
	const { loading, error, orders } = orderListUser;
	useEffect(() => {
		dispatch({ type: CART_EMPTY });
		dispatch({ type: USER_ORDER_DELETE_RESET });
		dispatch(ordersListUserAction());
	}, [dispatch, deleteSuccess]);

	const deleteHandler = (order) => {
		console.log('-----------------delete ordr-------------');
		if (window.confirm('Are you sure to delete ?')) {
			dispatch(userOrderDeleteAction(order));
		}
	};

	return (
		<div>
			<div style={{ marginTop: '60px', marginLeft: '180px' }}>
				<h1>Order List from users</h1>
			</div>

			<hr />
			{deleteLoading && <LoadingBox></LoadingBox>}
			{deleteError && <MessageBox variant='danger'></MessageBox>}
			{loading ? (
				<LoadingBox></LoadingBox>
			) : error ? (
				<MessageBox variant='danger'>{error}</MessageBox>
			) : (
				<table
					className='table'
					style={{ width: '80%', margin: '20px 170px 20px 170px' }}>
					<thead>
						<tr>
							<th>ID</th>
							<th>User</th>
							<th>Date</th>
							<th>Total</th>
							<th>Paid</th>
							<th>Delivered</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{orders.map((order) => (
							<tr key={order._id}>
								<td>{order._id}</td>
								<td>{order.user && order.user.name}</td>
								<td>{order.createdAt}</td>
								<td>{order.totalPrice}</td>
								<td>{order.isPaid ? order.paidAt : 'No'}</td>
								<td>{order.isDeliverd ? order.deliveredAt : 'No'}</td>
								<td>
									<button
										type='button'
										className='details-btn'
										onClick={() => {
											history.push(`/delivery/${order._id}`);
										}}>
										Details
									</button>
									<button
										type='button'
										className='details-btn'
										onClick={() => deleteHandler(order._id)}>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default OrderListUsers;
