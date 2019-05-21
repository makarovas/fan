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
import AdminPlayers from './Components/Admin/players/AdminPlayers';
import AddEditPlayers from './Components/Admin/players/AddEditPlayers';
import TheTeam from './Components/TheTeam/TheTeam'

const Routes = (props) => {
	return (
		<Layout>
			<Switch>
				<PublicRoutes
					{...props} restricted={false}
					exact component={Home} path='/' />
				<PublicRoutes
					{...props} restricted={true}
					exact component={SignIn} path='/sign_in' />
				<PublicRoutes
					{...props}
					restricted={false}
					exact component={TheTeam} path='/the_team' />
				<PrivateRoutes
					{...props} exact
					component={Dashboard}
					path='/dashboard' />
				<PrivateRoutes
					{...props} exact
					component={AdminMatches}
					path='/admin_matches' />
				<PrivateRoutes
					{...props} exact
					component={AddEditMatch}
					path='/admin_matches/edit_match/:id' />
				<PrivateRoutes
					{...props} exact
					component={AddEditMatch}
					path='/admin_matches/edit_match' />
				<PrivateRoutes
					{...props} exact
					component={AdminPlayers}
					path='/admin_players' />
				<PrivateRoutes
					{...props} exact
					component={AddEditPlayers}
					path='/admin_players/add_player' />
				<PrivateRoutes
					{...props} exact
					component={AddEditPlayers}
					path='/admin_players/add_player/:id' />
			</Switch>
		</Layout>
	)
}

export default Routes;