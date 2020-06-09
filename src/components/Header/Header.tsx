/* eslint-disable no-script-url */
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
					<Col className="d-flex justify-content-between">
						<a className={cx("textBold", s.logo)} href="javascript:;">
							Your logo
						</a>
						<ul className={s.list}>
							<li>
								<a className={s.link} href="javascript:;">
									Home
								</a>
							</li>
							<li>
								<a className={s.link} href="javascript:;">
									About
								</a>
							</li>
							<li>
								<a className={s.link} href="javascript:;">
									Servicing
								</a>
							</li>
							<li>
								<a className={s.link} href="javascript:;">
									Portfolio
								</a>
							</li>
							<li>
								<a className={s.link} href="javascript:;">
									Blog
								</a>
							</li>
							<li>
								<a className={s.link} href="javascript:;">
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
