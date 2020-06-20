/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import cx from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-scroll';
import s from './Header.module.sass';

const Header: React.FC = () => {
	return (
		<header className={s.header} id="Header">
			<Container>
				<Row className="align-items-center">
					<Col className="d-flex justify-content-between">
						<a className={cx('textBold', s.logo)} href="#">
							Your logo
						</a>
						<ul className={s.list}>
							<li>
								<Link smooth={true} to="About" className={s.link}>
									About
								</Link>
							</li>
							<li>
								<Link smooth={true} to="Services" className={s.link}>
									Servicing
								</Link>
							</li>
							<li>
								<Link smooth={true} to="Works" className={s.link}>
									Portfolio
								</Link>
							</li>
							<li>
								<Link smooth={true} to="Pricing" className={s.link}>
									Products
								</Link>
							</li>
							<li>
								<Link smooth={true} to="Blog" className={s.link}>
									Blog
								</Link>
							</li>
							<li>
								<Link smooth={true} to="Contact" className={s.link}>
									Contact Us
								</Link>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</header>
	);
};

export default Header;
