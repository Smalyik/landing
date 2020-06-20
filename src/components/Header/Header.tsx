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
								<Link smooth={true} to="About">
									<a className={s.link} href="#">
										About
									</a>
								</Link>
							</li>
							<li>
								<Link smooth={true} to="Services">
									<a className={s.link} href="#">
										Servicing
									</a>
								</Link>
							</li>
							<li>
								<Link smooth={true} to="Works">
									<a className={s.link} href="#">
										Portfolio
									</a>
								</Link>
							</li>
							<li>
								<Link smooth={true} to="Pricing">
									<a className={s.link} href="#">
										Products
									</a>
								</Link>
							</li>
							<li>
								<Link smooth={true} to="Blog">
									<a className={s.link} href="#">
										Blog
									</a>
								</Link>
							</li>
							<li>
								<Link smooth={true} to="Contact">
									<a className={s.link} href="#">
										Contact Us
									</a>
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
