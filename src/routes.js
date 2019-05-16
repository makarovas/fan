import React from 'react';
import Layout from './Components/HOC/Layout';
import { Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import SignIn from './Components/signin/SignIn';
import Dashboard from './Components/Admin/Dashboard';
import PrivateRoutes from './Components/authRoutes/privateRoutes';
import PublicRoutes from './Components/authRoutes/publicRoutes';
import AdminMatches from './Components/Admin/AdminMatches/AdminMatches';
import AddEditMatch from './Components/Admin/AdminMatches/addEditMatch';


const Routes = (props) => {
	return (
		<Layout>
			<Switch>
				<PublicRoutes {...props} restricted={false} exact component={Home} path='/' />
				<PublicRoutes {...props} restricted={true} exact component={SignIn} path='/sign_in' />
				<PrivateRoutes {...props} exact component={Dashboard} path='/dashboard' />
				<PrivateRoutes {...props} exact component={AdminMatches} path='/admin_matches' />
				<PrivateRoutes {...props} exact component={AddEditMatch} path='/admin_matches/edit_match/:id' />
			</Switch>
		</Layout>
	)
}

export default Routes;