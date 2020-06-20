import React from 'react';
import s from './Footer.module.sass';

const Footer: React.FC = () => {
	const year = new Date().getFullYear();

	return (
		<div className={s.footer} id="Header">
			<span className="textBold"> All rights Reserved © {year}</span>
		</div>
	);
};

export default Footer;
