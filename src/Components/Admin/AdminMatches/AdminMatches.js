import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AdminLayout from './../../HOC/AdminLayout';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { firebaseMatches } from './../../../firebase';
import { firebaseLooper, reverseArray } from './../../ui/misc';
import CircularProgress from '@material-ui/core/CircularProgress';
import Matches from '../../Matches/Matches';

export default class AdminMatches extends Component {
	state = {
		isloading: true,
		mathces: []
	}

	componentDidMount() {
		firebaseMatches
			.once('value')
			.then(snapshot => {
				const mathces = firebaseLooper(snapshot);
				this.setState({
					isloading: false,
					mathces: reverseArray(mathces)
				})
			})
	}
	render() {
		return (
			<AdminLayout>
				<div>
					<Paper>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>Date	</TableCell>
									<TableCell>Match	</TableCell>
									<TableCell>Result</TableCell>
									<TableCell>Status</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{
									this.state.mathces
										? this.state.mathces.map((match, i) => (
											<TableRow key={i}>
												<TableCell>
													{match.date}
												</TableCell>
												<TableCell>
													<Link to={`/admin_matches/edit_match/${match.id}`}>
														{match.away} <strong>-</strong> {match.local}
													</Link>
												</TableCell>
												<TableCell>
													{match.resultAway} <strong>-</strong> {match.resultLocal}
												</TableCell>
												<TableCell>
													{match.final === 'Yes'
														? <span className='matches_tag_red'>Final</span>
														: <span className='matches_tag_green'>Not played yet</span>
													}
												</TableCell>
											</TableRow>
										))
										: null
								}
							</TableBody>
						</Table>
					</Paper>

				</div>
				<div className='admin_progess'>
					{this.state.isloading
						? <CircularProgress thickness={7} style={{ color: '#98c5e9' }} />
						: null}
				</div>
			</AdminLayout>
		)
	}
}
