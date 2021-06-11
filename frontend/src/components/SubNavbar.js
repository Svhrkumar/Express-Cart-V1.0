import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
const SubNavbar = () => {
	return (
		<div className='sub-nav'>
			<ul className='sub-nav-ctn'>
				<li>
					<Link className='sub-nav-list' to='/electronics'>
						{' '}
						Electronics
					</Link>
				</li>
				<li className='sub-nav-list'>Home Appliance</li>
				<li className='sub-nav-list'>Furniture</li>
				<li>
					<Link className='sub-nav-list' to='/fashion'>
						Fashion
					</Link>
				</li>
				<li className='sub-nav-list'>Grocery</li>
			</ul>
		</div>
	);
};

export default SubNavbar;
