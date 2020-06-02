import React from 'react';
import cx from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../UI/Button';
import s from './Promo.module.sass';
import ArrowIcon from '../UI/ArrowIcon';

const Promo: React.FC = () => {
	return (
		<Container fluid>
			<Row className={cx(s.promo, 'align-items-center')}>
				<Col>
					<div className={s.info}>
						<div className={s.title}>Web development project</div>
						<div className={s.subtitle}>Very suitable to support all web development projects</div>
						<div className={s.buttonsContainer}>
							<Button square transparent>
								Our services
							</Button>
							<Button square>Hire is now</Button>
						</div>
					</div>
				</Col>
				<div className={s.arrowContainer}>
					<ArrowIcon color="#fff" />
				</div>
			</Row>
		</Container>
	);
};

export default Promo;
