import React, { useState, useEffect } from 'react';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteUser, listUsers } from '../actions/userActions';
import { USER_DELETE_RESET } from '../types/userTypes';
import Modal from '../components/Modal';

const UsersListScreen = () => {
	const usersList = useSelector((state) => state.usersList);
	const [isOpen, setIsOpen] = useState(false);
	const [userData, setUserData] = useState();
	// const productCreate = useSelector((state) => state.productCreate);
	const userUpdate = useSelector((state) => state.userUpdate);
	const userDelete = useSelector((state) => state.userDelete);
	const dispatch = useDispatch();

	const { loading, error, users } = usersList;
	const {
		loading: loadingUpdate,
		error: errorUpdate,
		success: successUpdate,
	} = userUpdate;
	const {
		loading: loadingDelete,
		error: errorDelete,
		success: successDelete,
	} = userDelete;

	useEffect(() => {
		if (successDelete || successUpdate) {
			dispatch({ type: USER_DELETE_RESET });
			dispatch(listUsers());
		}
	}, [dispatch, successDelete, successUpdate]);
	useEffect(() => {
		dispatch(listUsers());
	}, []);
	console.log('-----------------productlist-----------', users, successUpdate);

	const deleteHandler = (userId) => {
		dispatch(deleteUser(userId));
	};
	const handleOpen = (userDetails) => {
		setIsOpen(true);
		setUserData(userDetails);
	};

	const handleCloseModal = (close) => {
		setIsOpen(close);
	};
	return (
		<div>
			<div
				style={{
					marginTop: '60px',
					marginLeft: '180px',
					display: 'flex',
					justifyContent: 'space-between',
				}}>
				<h2 style={{ marginRight: '200px' }}>Users List</h2>
				<br></br>
				<h4></h4>
			</div>
			<hr style={{ width: '80%', margin: '5px 170px' }} />
			{/*{loadingDelete && <LoadingBox></LoadingBox>}
			{errorDelete && <MessageBox variant='danger'>{error}</MessageBox>}*/}

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
							<th>User ID</th>
							<th>UserName</th>
							<th>Email</th>
							<th>Account Created Date</th>
							<th>Admin</th>
							<th>Seller</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{users &&
							users.map((user) => (
								<tr key={user._id}>
									<td>{user._id}</td>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>{user.createdAt}</td>
									<td>{user.isAdmin == true ? 'Yes' : 'No'}</td>
									<td>{user.isSeller == true ? 'Yes' : 'No'}</td>
									<td>
										<button
											type='button'
											className='details-btn'
											onClick={() => handleOpen(user, user._id)}>
											Edit
										</button>
										<button
											type='button'
											className='details-btn'
											onClick={() => deleteHandler(user._id)}>
											Delete
										</button>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			)}
			<Modal
				handleClose={() => handleCloseModal()}
				isOpen={isOpen}
				userInfo={userData}
			/>
		</div>
	);
};

export default UsersListScreen;
