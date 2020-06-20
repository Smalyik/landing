import React from 'react';
import cx from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../UI/Button';
import s from './Promo.module.sass';
import ArrowIcon from '../UI/ArrowIcon';
import backgroundImage from '../../images/promo-background.png';

const Promo: React.FC = () => {
	return (
		<Container fluid id="Promo">
			<Row className={cx(s.promo, 'align-items-center')} style={{backgroundImage: `url(${backgroundImage})`}}>
				<Col>
					<div className={s.info}>
						<div className={s.title}>Web development project</div>
						<div className={s.subtitle}>Very suitable to support all web development projects</div>
						<div className={s.buttonsContainer}>
							<Button square transparent big>
								Our services
							</Button>
							<Button square green big>
								Hire is now
							</Button>
						</div>
						<ArrowIcon size={[30, 25]} color="#fff" />
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Promo;
