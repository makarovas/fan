import React, { Component } from 'react'
import PlayerCard from './../ui/playerCard';
import Fade from 'react-reveal/Fade';
import stripes from '../../Resources/images/stripes.png';
import { firebasePlayers, firebase } from './../../firebase';
import { firebaseLooper } from './../ui/misc';
// import { Promise } from 'core-js';


export default class TheTeam extends Component {
	state = {
		loading: true,
		players: [],
	}
	componentDidMount() {
		firebasePlayers.once('value').then(snapshot => {
			const players = firebaseLooper(snapshot);
			let promises = [];
			let some = firebase.storage().ref('players').child(players[0].image);
			console.log(some);
			// some.getDownloadURL();



			for (let key in players) {
				promises.push(
					new Promise((resolve, reject) => {
						let some = firebase.storage().ref('players').child(players[key].image);

						some.getDownloadURL()
							.getDownloadURL()
							.then(url => {
								players[key].url = url;
								resolve();
							})
					})
				)
			}
			Promise.all(promises).then(() => {
				this.setState({
					loading: false,
					players
				})
			})
		})
	}

	render() {
		return (
			<div>
				The Team
			</div>
		)
	}
}
