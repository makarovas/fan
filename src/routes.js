import React from 'react';
import Layout from './Components/HOC/Layout';
import { Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import SignIn from './Components/signin/SignIn';
import Dashboard from './Components/Admin/Dashboard';
import PrivateRoutes from './Components/authRoutes/privateRoutes';
import PublicRoutes from './Components/authRoutes/publicRoutes';


const Routes = (props) => {
	return (
		<Layout>
			<Switch>
				<PrivateRoutes {...props} exact component={Dashboard} path='/dashboard' />
				<PublicRoutes {...props} restricted={true} exact component={SignIn} path='/sign_in' />
				<PublicRoutes {...props} restricted={false} exact component={Home} path='/' />
			</Switch>
		</Layout>
	)
}

export default Routes;