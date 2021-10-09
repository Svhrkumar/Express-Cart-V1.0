import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../images/logo.png';
import '../index.css';
import { signoutAction } from '../actions/userActions';
import SearchBox from './SearchBox';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {
	const cart = useSelector((state) => state.cart);

	const { cartItems } = cart;
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();
	console.log('-------nava cart-------', cartItems);
	console.log('-------nava user-------', user && user.user && user.user.name);
	const signoutHandler = () => {
		dispatch(signoutAction());
	};

	return (
		<header className='nav-container'>
			<div className='hamburger'>
				<i class='fas fa-bars'></i>
			</div>

			<div className='nav-title'>
				<Link to='/'>
					<img src={logo} alt='cartExpress' className='logo' />
				</Link>
			</div>

			<ul className='nav-links' style={{ marginTop: '23px' }}>
				{user && user.user && user.user.name ? (
					<React.Fragment>
						<li>
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
						</li>
						{user && user.user && user.user.isSeller && (
							<li className='dropdown'>
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
							</li>
						)}
						{user && user.user && user.user.isAdmin && (
							<li className='dropdown'>
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
							</li>
						)}
						<li className='dropdown'>
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
						</li>
					</React.Fragment>
				) : (
					<React.Fragment>
						<li style={{ marginTop: '10px' }}>
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
						</li>
						<li style={{ marginTop: '10px' }}>
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
						</li>
					</React.Fragment>
				)}
			</ul>
			<div className='mobile-view-cart'>
				{user && user.user && user.user.name && (
					<div style={{ marginBottom: '20px' }}>
						<Link to={'/cart/:id'}>
							<div className='cart-count-icon'>
								<span className='cart-icon'>
									{' '}
									{cartItems.length >= 0 && (
										<span
											className='mv-cart-count'
											style={{ marginBottom: '10px' }}>
											{cartItems.length}
										</span>
									)}{' '}
								</span>
							</div>
							<i
								class='fa fa-shopping-cart fa-2x icon-color '
								aria-hidden='true'></i>
						</Link>
					</div>
				)}
			</div>
		</header>
	);
};

export default Navbar;
