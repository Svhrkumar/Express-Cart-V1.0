import React, { useEffect, useState } from 'react';
import login from '../images/login-illustartor.png';
import { useDispatch, useSelector } from 'react-redux';
import { registerAction, signinAction } from '../actions/userActions';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../index.css';

import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Link } from 'react-router-dom';
const Registration = (props) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMeassage] = useState('');
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const { loading, error } = user;

	const history = useHistory();
	console.log('...........user response ----------', user);

	console.log('...........user info response ----------', error);
	const redirect = props.location.search
		? props.location.search.split('=')[1]
		: '/';
	const registerHandler = (e) => {
		e.preventDefault();
		if (password != confirmPassword) {
			setMeassage('Password and confirm Password are not matched');
		} else {
			dispatch(registerAction(name, email, password));
		}
	};
	useEffect(() => {
		if (user.user) {
			props.history.push(redirect);
		}
	}, [props.history, redirect, user]);

	return (
		<div className='main-ctn' style={{ padding: '70px' }}>
			<div className='sub-ctn'>
				<div className='login-img' style={{ marginTop: '100px' }}>
					<img src={login} height='300px' width='400px' />
				</div>
				<div className='card--register-ctn  '>
					<h2>Registration</h2>
					<div class='field'>
						<input
							className='input'
							type='text'
							name='name'
							id='name'
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder='Enter Name'
						/>
						<label className='label' for='name'>
							Name
						</label>
					</div>

					<div class='field'>
						<input
							className='input'
							type='text'
							name='email'
							id='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder='Enter Email'
						/>
						<label className='label' for='email'>
							Email
						</label>
					</div>
					<div class='field'>
						<input
							className='input'
							name='password'
							id='password'
							placeholder='Enter Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type='password'
						/>
						<label className='label' for='Last Name'>
							Password
						</label>
					</div>
					<div class='field'>
						<input
							className='input'
							name='confirm password'
							id='confirm password'
							placeholder='Enter Confirm Password'
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							type='password'
						/>
						<label className='label' for='Last Name'>
							Confirm Password
						</label>
					</div>
					{loading && <LoadingBox></LoadingBox>}
					{error && <MessageBox variant='danger'>{message}</MessageBox>}
					<button className='login-btn' onClick={registerHandler}>
						Login
					</button>
					<p>
						Already have an account ?{' '}
						<Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>{' '}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Registration;
