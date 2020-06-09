import React from 'react';
import cx from 'classnames';
import Col from 'react-bootstrap/Col';
import SmartphoneIcon from '../../UI/SmartphoneIcon';
import Button from '../../UI/Button';
import s from './ServicesCard.module.sass';

export interface ServicesCardProps {
	title: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ children, title }) => {
	return (
		<Col lg={4}>
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

export default ServicesCard;
