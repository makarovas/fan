import React from 'react'
import { Link } from 'react-router-dom';
import logo from './../../Resources/images/logos/logo.png';


const MCLogo = (props) => {
	const tempate = <div
		className='img_cover'
		style={{
			width: props.width,
			height: props.height,
			background: `url(${logo}) no-repeat`
		}}></div>
	if (props.link) {
		return (
			<Link
				to={props.linkTo}
				className='link_logo'>
				{tempate}
			</Link>
		)
	} else {
		return tempate
	}
};

export default MCLogo;