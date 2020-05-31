import React from 'react';
import { Row, Col } from '../UI/Grid';
import s from './Header.module.sass';

const Header: React.FC = () => {
	return (
		<div>
			<span className={s.foo}>Header</span>
		</div>
	);
};

export default Header;
