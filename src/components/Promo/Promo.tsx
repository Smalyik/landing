import React from 'react';
import cx from 'classnames'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import s from './Promo.module.sass';


const Promo: React.FC = () => {
	return (
		<Container fluid>
			<Row className={cx(s.promo, 'align-items-center')}>
				<Col>
					<div className={s.info}>
						<div className={s.title}>Web development project</div>
						<div className={s.subtitle}>Very suitable to support all web development projects</div>
						<div className={s.buttons}>
							<button className="square-button square-button--transparent-white">Our services</button>
							<button className="square-button square-button--green">Hire is now</button>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Promo;
