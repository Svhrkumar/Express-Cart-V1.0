import React, { useState, useEffect } from 'react';
import Accordion from './Accordion';

const SideNavbar = (props) => {
	const [mobiles, setMobiles] = useState(false);
	const [laptops, setLaptops] = useState(false);

	console.log('----------mobile & laptop----', mobiles, laptops);
	// useEffect(() => {
	// 	props.handleMobiles(mobiles);
	// 	props.handleLaptops(laptops);
	// }, [mobiles, laptops]);

	return (
		<div className='side-navbar'>
			<Accordion title='Brands'>
				<ul className='side-nav-ctn'>
					<li className='side-nav-ctn-list'>
						<h5>Mobiles</h5>
					</li>
					<li className='side-nav-ctn-list'>
						<input className='side-nav-check' type='checkbox' />
						<label>Apple</label>
					</li>
					<li className='side-nav-ctn-list'>
						<input className='side-nav-check' type='checkbox' />
						<label>Samsung</label>
					</li>
					<li className='side-nav-ctn-list'>
						<input className='side-nav-check' type='checkbox' />
						<label>OnePlus</label>
					</li>
					<li className='side-nav-ctn-list'>
						<input className='side-nav-check' type='checkbox' />
						<label>Oppo</label>
					</li>
					<li className='side-nav-ctn-list'>
						<input className='side-nav-check' type='checkbox' />
						<label>RealMe</label>
					</li>
					<li className='side-nav-ctn-list'>
						<input className='side-nav-check' type='checkbox' />
						<label>Asus</label>
					</li>
					<li className='side-nav-ctn-list'>
						<input className='side-nav-check' type='checkbox' />
						<label>LG</label>
					</li>
				</ul>
				<hr />
				<ul className='side-nav-ctn'>
					<li className='side-nav-ctn-list'>
						<h5>Laptops</h5>
					</li>

					<li className='side-nav-ctn-list'>
						<input className='side-nav-check' type='checkbox' />
						<label>Microsoft</label>
					</li>
					<li className='side-nav-ctn-list'>
						<input className='side-nav-check' type='checkbox' />
						<label>Acer</label>
					</li>
					<li className='side-nav-ctn-list'>
						<input className='side-nav-check' type='checkbox' />
						<label>Apple</label>
					</li>
					<li className='side-nav-ctn-list'>
						<input className='side-nav-check' type='checkbox' />
						<label>Dell</label>
					</li>
					<li className='side-nav-ctn-list'>
						<input className='side-nav-check' type='checkbox' />
						<label>Asus</label>
					</li>
					<li className='side-nav-ctn-list'>
						<input className='side-nav-check' type='checkbox' />
						<label>Lenovo</label>
					</li>
					<li className='side-nav-ctn-list'>
						<input className='side-nav-check' type='checkbox' />
						<label>HP</label>
					</li>
					<li className='side-nav-ctn-list'>
						<input className='side-nav-check' type='checkbox' />
						<label>MSI</label>
					</li>

					<li className='side-nav-ctn-list'>
						<input className='side-nav-check' type='checkbox' />
						<label>Samsung</label>
					</li>
				</ul>
			</Accordion>
		</div>
	);
};

export default SideNavbar;
