/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import cx from 'classnames'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import s from './Header.module.sass';

const Header: React.FC = () => {
	return (
		<header className={s.header}>
			<Container>
				<Row className="align-items-center">
					<Col>
						<a className={cx("textBold", s.logo)} href="#">
							Your logo
						</a>
					</Col>
					<Col className="ml-auto">
						<ul className={s.list}>
							<li>
								<a className={s.link} href="#">
									Home
								</a>
							</li>
							<li>
								<a className={s.link} href="#">
									About
								</a>
							</li>
							<li>
								<a className={s.link} href="#">
									Servicing
								</a>
							</li>
							<li>
								<a className={s.link} href="#">
									Portfolio
								</a>
							</li>
							<li>
								<a className={s.link} href="#">
									Blog
								</a>
							</li>
							<li>
								<a className={s.link} href="#">
									Contact us
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</header>
	);
};

export default Header;
