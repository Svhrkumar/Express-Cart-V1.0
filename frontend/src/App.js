import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { data } from './data';
import FashionScreen from './pages/FashionScreen';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Signin from './pages/Signin';
import { useSelector } from 'react-redux';
import Registration from './pages/Registraion';
import ShippingAddress from './pages/ShippingAddress';
import PaymentMethodScreen from './pages/PaymentMethodScreen';
import './App.css';
import OrderScreen from './pages/OrderScreen';
import OrderStatusScreen from './pages/OrderStatusScreen';
import OrderHistory from './pages/OrderHistory';
import Profile from './pages/Profile';
import ProductManager from './pages/ProductManager';
import PrivateRoute from './route/PrivateRoute';
import AdminRoute from './route/AdminRoute';
import ProductEditScreen from './pages/ProductEditScreen';
import ProductCreateScreen from './pages/ProductCreateScreen';
import OrderListUsers from './pages/OrderListUsers';
import OrderDeliverScreen from './pages/OrderDeliverScreen';
import UsersListScreen from './pages/UsersListScreen';
import SellerRoute from './route/SellerRoute';
import OffersUploadScreen from './pages/OffersUploadScreen';
import ElectronicScreen from './pages/ElectronicScreen';
import ProductDetailsScreen from './pages/ProductDetailsScreen';
import SubNavbar from './components/SubNavbar';
import Home from './pages/Home';
import Breadcrumb from './components/Breadcrumb';

function App() {
	const user = useSelector((state) => state.user);

	console.log(
		'-------------app user---------',
		user && user.user && user.user.name
	);
	return (
		<Router>
			<div class='grid-container'>
				<Navbar />

				<Switch>
					<PrivateRoute exact path='/profile' component={Profile} />
					<Route exact path='/' component={Home} />
					<Route exact path='/fashion' component={FashionScreen} />
					<Route excat path='/electronics' component={ElectronicScreen} />
					<Route exact path='/signin' component={Signin} />
					<Route exact path='/products/:id' component={Product} />
					<Route
						exact
						path='/products/electronics/:id'
						component={ProductDetailsScreen}
					/>
					<Route exact path='/cart/:id?' component={Cart} />
					<Route exact path='/register' component={Registration} />
					<Route exact path='/shipping' component={ShippingAddress} />
					<Route exact path='/payment' component={PaymentMethodScreen} />
					<Route exact path='/placeorder' component={OrderScreen} />
					<Route exact path='/order/:id' component={OrderStatusScreen} />
					<Route exact path='/orderhistory' component={OrderHistory} />
					<Route exact path='/product/:id/edit' component={ProductEditScreen} />
					<Route exact path='/product/create' component={ProductCreateScreen} />
					<Route exact path='/offers/Manager' component={OffersUploadScreen} />
					<AdminRoute
						exact
						path='/productsmanager'
						component={ProductManager}
					/>
					<AdminRoute exact path='/orderlist' component={OrderListUsers} />
					<AdminRoute
						exact
						path='/delivery/:id'
						component={OrderDeliverScreen}
					/>

					<AdminRoute exact path='/usersList' component={UsersListScreen} />
					<SellerRoute
						exact
						path='/productsmanager/seller'
						component={ProductManager}
					/>
					<SellerRoute
						exact
						path='/orderlist/seller'
						component={OrderListUsers}
					/>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
