import React from 'react';
import cx from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Title from '../Title';
import s from './About.module.sass';

import internetIcon from '../../images/internet-icon.png';
import transferIcon from '../../images/transfer-icon.png';
import headIcon from '../../images/head-icon.png';

const About: React.FC = () => {
	return (
		<Container className="article-container" id="About">
			<Title title="About us">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do&nbsp;eiusmod tempor incididunt ut&nbsp;labore
				et&nbsp;dolore magna aliqua. Ut&nbsp;enim ad&nbsp;minim veniam,
			</Title>
			<Row className="justify-content-between">
				<Col sm={4} xs={12}>
					<div className={s.aboutItem}>
						<img src={internetIcon} alt="internetIcon" />
						<div className={cx(s.title, 'textSemibold')}>Awesome Icons</div>
						<div className={s.subtitle}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
						</div>
					</div>
				</Col>
				<Col sm={4} xs={12}>
					<div className={s.aboutItem}>
						<img src={transferIcon} alt="transferIcon" />
						<div className={cx(s.title, 'textSemibold')}>One Page</div>
						<div className={s.subtitle}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
						</div>
					</div>
				</Col>
				<Col sm={4} xs={12}>
					<div className={s.aboutItem}>
						<img src={headIcon} alt="headIcon" />
						<div className={cx(s.title, 'textSemibold')}>Fully Responsive</div>
						<div className={s.subtitle}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default About;
