import React, { useEffect, useState } from 'react';
import login from '../images/login.png';
import { useDispatch, useSelector } from 'react-redux';
import { signinAction } from '../actions/userActions';

import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import '../index.css';
import '../style.css';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const Signin = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const { loading, error } = user;

	console.log(
		'...........user response ----------',
		user && user.user && user.user.name
	);

	console.log('...........user info response ----------', error);
	const redirect = props.location.search
		? props.location.search.split('=')[1]
		: '/';
	const loginHandler = (e) => {
		e.preventDefault();
		dispatch(signinAction(email, password));
	};
	useEffect(() => {
		if (user.user) {
			window.location.href = `${redirect}`;
		}
	}, [redirect, user]);

	return (
		<div className='main-ctn'>
			<div className='sub-ctn'>
				<div className='login-img'>
					<img src={login} height='300px' width='400px' />
				</div>
				<div className='card-ctn'>
					<h2>Sign in</h2>

					<div class='field'>
						<input
							className='input'
							type='text'
							name='email'
							id='First Name'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder='Enter Email'
						/>
						<label className='label' for='First Name'>
							Email
						</label>
					</div>
					<div class='field'>
						<input
							className='input'
							name='Last Name'
							id='Last Name'
							placeholder='Enter Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type='password'
						/>
						<label className='label' for='Last Name'>
							Password
						</label>
					</div>
					{loading && <LoadingBox></LoadingBox>}
					{error && <MessageBox variant='danger'>{error}</MessageBox>}
					<button className='login-btn' onClick={loginHandler}>
						Login
					</button>
					<p>
						New Customer ? <Link to={`/register`}>Register here</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Signin;
