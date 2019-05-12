import React, { Component } from 'react'
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import Player from '../../../Resources/images/player.png';

export default class Text extends Component {
	animateNumber = () => (
		<Animate
			show={true}
			start={{
				opacity: 0,
				rotate: 0,
			}}
			enter={{
				opacity: [1],
				rotate: [360],
				timing: { duration: 1000, ease: easePolyOut }
			}}
		>
			{({ opacity, rotate }) => {
				return (
					<div
						className='featured_number'
						style={{
							opacity,
							transform: `translate(260px, 170px) rotateY(${rotate}deg)`
						}}>
						3
					</div>
				)
			}}
		</Animate>
	)
	animateFirts = () => (
		<Animate
			show={true}
			start={{
				opacity: 0,
				x: 503,
				y: 450
			}}
			enter={{
				opacity: [1],
				x: [273],
				y: [450],
				timing: { duration: 500, ease: easePolyOut }
			}}	>
			{({ opacity, x, y }) => {
				return (
					<div
						className='featured_first'
						style={{
							opacity,
							transform: `translate(${x}px, ${y}px)`
						}}>
						League
					</div>
				)
			}}
		</Animate>
	)

	animateSecond = () => (
		<Animate
			show={true}
			start={{
				opacity: 0,
				x: 503,
				y: 580
			}}
			enter={{
				opacity: [1],
				x: [273],
				y: [580],
				timing: { delay: 400, duration: 500, ease: easePolyOut }
			}}	>
			{({ opacity, x, y }) => {
				return (
					<div
						className='featured_second'
						style={{
							opacity,
							transform: `translate(${x}px, ${y}px)`
						}}>
						Chaimponships
					</div>
				)
			}}
		</Animate>
	)
	animatePlayer = () => (
		<Animate
			show={true}
			start={{
				opacity: 0,
				right: 20
			}}
			enter={{
				opacity: [1],
				right: [20],
				timing: { delay: 800, duration: 500, ease: easePolyOut }
			}}	>
			{({ opacity, x, y }) => {
				return (
					<div
						className='featured_player'
						style={{
							opacity,
							background: `url(${Player})`,
							transform: `transform(550px, 201px)`
						}}>
					</div>
				)
			}}
		</Animate>
	)
	render() {
		return (
			<div className='featured_text'>
				{this.animatePlayer()}
				{this.animateNumber()}
				{this.animateFirts()}
				{this.animateSecond()}
			</div>
		)
	}
}
