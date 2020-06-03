import React from 'react';
import cx from 'classnames';
import Col from 'react-bootstrap/Col';
import SmartphoneIcon from '../UI/SmartphoneIcon';
import Button from '../UI/Button';
import s from './ServiceCard.module.sass';

interface Props {
	title: string;
}

const ServiceCard: React.FC<Props> = ({ children, title }) => {
	return (
		<Col sm={4}>
			<div className={s.card}>
				<SmartphoneIcon size={[40, 50]}/>
				<div className={cx(s.title, 'textSemibold')}>{title}</div>
				<div className={s.subtitle}>{children}</div>
				<Button square transparentGray>
					Read more
				</Button>
			</div>
		</Col>
	);
};

export default ServiceCard;
