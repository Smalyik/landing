import React from 'react';
import cx from 'classnames';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import s from './Title.module.sass';

interface Props {
	title: string;
}

const Title: React.FC<Props> = ({ children, title }) => {
	return (
		<Row className="align-items-center">
			<Col>
				<div className={s.titleContainer}>
					<div className={cx(s.title, 'textBold')}>{title}</div>
					<div className={s.subtitle}>{children}</div>
				</div>
			</Col>
		</Row>
	);
};

export default Title;
