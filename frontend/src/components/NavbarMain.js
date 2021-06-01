import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import logo from '../images/logo.png';
import '../index.css';
import { signoutAction } from '../actions/userActions';
import SearchBox from './SearchBox';

const NavbarMain = () => {
	const cart = useSelector((state) => state.cart);
	const history = useHistory();
	const { cartItems } = cart;
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();
	console.log('-------nava cart-------', cartItems);
	console.log('-------nava user-------', user && user.user && user.user.name);
	const signoutHandler = () => {
		dispatch(signoutAction());
	};
	// console.log('-------nava user-------', user && user.user.name);
	return (
		<header className='row'>
			<div className='nav-title'>
				<Link to={'/'}>
					<img src={logo} alt='cartExpress' className='logo' />
				</Link>
			</div>
			<div></div>
			<div className='nav-links'>
				{user && user.user && user.user.name ? (
					<Link to={'/cart/:id'}>
						<i
							class='fa fa-shopping-cart fa-2x icon-color '
							aria-hidden='true'></i>
						<div className='cart-count-icon'>
							<span className='cart-icon'>
								{' '}
								{cartItems.length >= 0 && (
									<span style={{ marginBottom: '10px' }}>
										{cartItems.length}
									</span>
								)}{' '}
							</span>
						</div>
					</Link>
				) : (
					<Link
						to={'/signin'}
						style={{
							margin: '15px 25px',
							fontSize: '15px',
							backgroundColor: '#ffffff',
							borderRadius: '999px',
							padding: '10px 20px',
							color: '#e07c24',
						}}>
						Register
					</Link>
				)}

				{user && user.user && user.user.name ? (
					<div className='dropdown'>
						<Link>
							{user && user.user && user.user.name}

							<i className='fa fa-caret-down'></i>
						</Link>
						<ul
							className='dropdown-content'
							style={{ marginRight: '10px', marginBottom: '10px' }}>
							<li className='dropdown-list'>
								<Link to='/profile'>Profile</Link>
							</li>
							<li className='dropdown-list'>
								<Link to='/orderhistory'>Orders</Link>
							</li>
							<li className='dropdown-list'>
								<Link to='#signout' onClick={signoutHandler}>
									Signout
								</Link>
							</li>
						</ul>
					</div>
				) : (
					<Link
						to={'/signin'}
						style={{
							margin: '15px 25px',
							fontSize: '15px',
							backgroundColor: '#ffffff',
							borderRadius: '999px',
							padding: '10px 20px',
							color: '#e07c24',
						}}>
						Sign In
					</Link>
				)}
				{user && user.user && user.user.isSeller && (
					<div className='dropdown'>
						<Link to='#seller'>
							Seller<i className='fa fa-caret-down'></i>
						</Link>
						<ul className='dropdown-content'>
							<li className='dropdown-list'>
								<Link to='/productsmanager/seller'>Products</Link>
							</li>
							<li className='dropdown-list'>
								<Link to='/orderlist/seller'>Orders</Link>
							</li>
						</ul>
					</div>
				)}
				{user && user.user && user.user.isAdmin && (
					<div className='dropdown'>
						<Link to='#admin'>
							Admin <i className='fa fa-caret-down'></i>
						</Link>
						<ul className='dropdown-content'>
							<li className='dropdown-list'>
								<Link to='/dashboard'>Dashboard</Link>
							</li>
							<li className='dropdown-list'>
								<Link to='/productsmanager'>Products</Link>
							</li>
							<li className='dropdown-list'>
								<Link to='/orderlist'>Orders</Link>
							</li>
							<li className='dropdown-list'>
								<Link to='/userslist'>Users</Link>
							</li>
							<li className='dropdown-list'>
								<Link to='/offers/Manager'>Manage Offers</Link>
							</li>
						</ul>
					</div>
				)}
			</div>
		</header>
	);
};

export default NavbarMain;
