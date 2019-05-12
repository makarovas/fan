import React from 'react';
import MCLogo from './../ui/icons';
const Footer = () => {
	return (
		<footer className='bck_blue'>
			<div className="footer_logo">
				<MCLogo
					width='70px'
					height='70px'
					link={true}
					linkTo='/' />
			</div>
			<div className="footer_discl">
				Manchester city 2019. All rights reserved
			</div>
		</footer>
	);
};

export default Footer;