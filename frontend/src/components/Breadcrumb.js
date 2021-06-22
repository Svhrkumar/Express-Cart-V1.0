import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const SimpleBreadcrumbs = () => {
	return (
		<Route>
			{({ location }) => {
				const pathnames = location.pathname.split('/').filter((x) => x);
				console.log('path', pathnames);
				return (
					<div className='breadCrumb-ctn'>
						<RouterLink to='/'>
							<p
								style={{
									fontSize: '15px',
									color: '#2827CC',
									marginLeft: '5rem',
								}}>
								Home
							</p>
						</RouterLink>
						<p
							style={{
								fontSize: '15px',
								color: '#2827CC',
								marginLeft: '0.5rem',
							}}>
							/
						</p>
						{pathnames.map((value, index) => {
							const last = index === pathnames.length - 1;
							console.log('last', last);

							const to = `/${pathnames.slice(0, index + 1).join('/')}`;

							return last ? (
								<p
									style={{
										fontSize: '15px',
										color: '#2827CC',
										marginLeft: '0.5rem',
									}}
									key={to}>
									{value}
								</p>
							) : (
								<RouterLink color='inherit' to={to} key={to}>
									{value}
								</RouterLink>
							);
						})}
					</div>
				);
			}}
		</Route>
	);
};

export default SimpleBreadcrumbs;
