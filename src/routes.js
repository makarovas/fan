import React from 'react';
import Layout from './Components/HOC/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Signin from './Components/signin/Signin';

const Routes = (props) => {
	return (
		<Layout>
			<Switch>
				<Route
					exact
					component={Home}
					path='/' />
				<Route
					exact
					component={Signin}
					path='/sign_in' />
			</Switch>
		</Layout>
	)
}

export default Routes;