import React, { Component } from 'react';
import stripes from './../../Resources/images/stripes.png';
import { Tag } from '../ui/misc';

export default class MeetPlayers extends Component {
	render() {
		return (
			<div className='home_meetplayers'
				style={{
					background: `#ffffff url(${stripes})`
				}}>
				<div className="container">
					<div className="home_meetplayers_wrapper">
						<div className="home_card_wrapper">

						</div>
						<div className="home_text_wrapper">
							<div>
								<Tag
									bck='#0e1731'
									size='100px'
									color='#ffffff'
									add={{
										display: 'inline-block',
										marginBottom: '20px'
									}}>
									Meet
								</Tag>
								<Tag
									bck='#0e1731'
									size='100px'
									color='#ffffff'
									add={{
										display: 'inline-block',
										marginBottom: '20px'
									}}>
									The
								</Tag>
								<Tag
									bck='#0e1731'
									size='100px'
									color='#ffffff'
									add={{
										display: 'inline-block',
										marginBottom: '20px'
									}}>
									Players
								</Tag>
								<Tag
									bck='#ffffff'
									size='27px'
									color='#0e1731'
									link={true}
									linkto='/the_team'
									add={{
										display: 'inline-block',
										marginBottom: '27px',
										border: '1px solid #0e1731'
									}}	>
									Meet them here
								</Tag>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
