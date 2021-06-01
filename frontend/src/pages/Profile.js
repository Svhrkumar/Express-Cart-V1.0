import React, { useState, useEffect } from 'react';
import '../index.css';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from 'react-avatar';
import { detailsUser, userUpdateProfileAction } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { USER_UPDATE_PROFILE_RESET } from '../types/userTypes';

const Profile = () => {
	const user = useSelector((state) => state.user);
	const userDetails = useSelector((state) => state.userDetails);
	const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
	const {
		success: successUpdate,
		loading: loadingUpdate,
		error: errorUpdate,
	} = userUpdateProfile;
	const userinfo = userDetails;
	console.log('userinfo', userinfo);
	const [edit, setEdit] = useState(false);
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [sellerName, setSellerName] = useState('');
	const [sellerDescription, setSellerDescription] = useState('');
	const [sellerLogo, setSellerLogo] = useState();
	const [isSellerTrue, setIsSellerTrue] = useState();
	const dispatch = useDispatch();
	const style = {
		padding: '5px 10px',
		margin: '10px 0px',
		width: '70%',
		height: '20px',
	};

	useEffect(() => {
		if (!userDetails.user) {
			dispatch({ type: USER_UPDATE_PROFILE_RESET });
			dispatch(detailsUser(user.user._id));
		} else {
			setUserName(userDetails.user.name);
			setEmail(userDetails.user.email);
			if (userDetails && userDetails.user && userDetails.user.seller) {
				setSellerName(userDetails.user.seller.name);
				setSellerLogo(userDetails.user.seller.logo);
				setSellerDescription(userDetails.user.seller.description);
			}
		}

		// dispatch(detailsUser(user.user._id));

		//

		// console.log('user details call', user.user && user.user._id);
		// if(user.user.isSeller){
		// 	setSellerName(user.user.seller.name)

		// }
	}, [dispatch, user, sellerName, sellerLogo, sellerDescription]);

	const submitHamdler = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert('Password and Confirm Password not Matched ');
		} else {
			dispatch(
				userUpdateProfileAction({
					userId: user.user._id,
					userName,
					email,
					password,
					sellerName,
					sellerLogo,
					sellerDescription,
				})
			);
		}
	};
	return (
		<div
			style={{
				marginTop: '50px',
				marginLeft: '180px',
				marginRight: '180px',
			}}>
			<h2
				style={{
					marginLeft: '180px',
					marginBottom: '10px',
				}}>
				Profile
			</h2>
			<hr />
			{loadingUpdate && <LoadingBox></LoadingBox>}
			{errorUpdate && <MessageBox variant='danger'>{errorUpdate}</MessageBox>}
			{successUpdate && (
				<MessageBox variant='success'>Profile Updated Successfully</MessageBox>
			)}
			<div
				style={{
					marginTop: '30px',
					display: 'flex',
					justifyContent: 'space-around',
				}}>
				<div style={{ textAlign: 'center', margin: '30px 30px' }}>
					<Avatar
						name={userDetails && userDetails.user && userDetails.user.name}
						round='999px'
						size='200'
					/>
					<h3 style={{ marginTop: '9px' }}>
						{userDetails && userDetails.user && userDetails.user.name}
					</h3>
				</div>

				<div>
					<div style={{ display: 'flex' }}>
						<h3 style={{ marginTop: '30px' }}>User Details</h3>{' '}
						<div style={{ marginLeft: '200px', margingBottom: '30px' }}>
							{!edit ? (
								<button className='details-btn' onClick={() => setEdit(true)}>
									Edit
								</button>
							) : (
								''
							)}
						</div>
					</div>

					{!edit ? (
						<div style={{ marginTop: '10px' }}>
							{user.user && user.user.isSeller ? (
								<div>
									<h3>Welcome Seller</h3>
									<div>
										<p>{user.user && user.user.name}</p>
									</div>
								</div>
							) : (
								<div>
									<p>
										{userDetails && userDetails.user && userDetails.user.name}
									</p>
									<br></br>
									<p>
										{userDetails && userDetails.user && userDetails.user.email}
									</p>
									<p></p>
								</div>
							)}
						</div>
					) : (
						<div>
							<div style={{ display: 'flex' }}>
								<div className='profile-input-field'>
									<input
										id='username'
										style={style}
										placeholder='username'
										type='text'
										value={
											userDetails && userDetails.user && userDetails.user.name
										}
										onChange={(e) => setUserName(e.target.value)}
									/>
								</div>
								<div className='profile-input-field'>
									<input
										id='email'
										style={style}
										placeholder='E-mail'
										type='text'
										value={
											userDetails && userDetails.user && userDetails.user.email
										}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
							</div>

							<div style={{ marginTop: '20px' }}>
								<div className='ctn-row'>
									<div className='profile-input-field'>
										<label htmlFor='password'>Password</label>
										<input
											id='password'
											style={style}
											placeholder='password'
											type='text'
											value={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
										<br />
									</div>
									<div className='profile-input-field'>
										<label htmlFor='confirmpassword'>confirm Password</label>
										<input
											id='confirmpassword'
											style={style}
											placeholder='confirm Password'
											type='text'
											value={confirmPassword}
											onChange={(e) => setConfirmPassword(e.target.value)}
										/>
									</div>
								</div>
								{user.user && user.user.isSeller && (
									<div>
										<hr style={{ marginTop: '50px' }} />
										<h3 style={{ marginTop: '30px' }}>Seller Details</h3>{' '}
										<div className='ctn-row'>
											<div className='profile-input-field'>
												<label htmlFor='sellerDescription'>Seller Name</label>
												<input
													style={style}
													id='sellerDescription'
													placeholder='confirm Password'
													type='text'
													value={sellerName}
													onChange={(e) => setSellerName(e.target.value)}
												/>
											</div>
											<div className='profile-input-field'>
												<label htmlFor='sellerDescription'>
													Seller Description
												</label>
												<input
													style={style}
													id='sellerDescription'
													placeholder='confirm Password'
													type='text'
													value={sellerDescription}
													onChange={(e) => setSellerDescription(e.target.value)}
												/>
											</div>
										</div>
										<div className='profile-input-field'>
											<label htmlFor='sellerLogo'>Logo :</label>
											<input
												style={style}
												id='sellerLogo'
												placeholder='sellerLogo'
												type='file'
												value={sellerLogo}
												onChange={(e) => setSellerLogo(e.target.value)}
											/>
										</div>
									</div>
								)}
							</div>
							<div style={{ display: 'grid', placeItems: 'center' }}>
								<div style={{ display: 'flex' }}>
									<button className='details-btn' onClick={submitHamdler}>
										Update
									</button>
									<button
										className='details-btn'
										onClick={() => setEdit(false)}>
										cancel
									</button>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Profile;
