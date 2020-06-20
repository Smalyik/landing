/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import cx from 'classnames';
import s from './ProjectCard.module.sass';
import Col from 'react-bootstrap/Col';

interface Props {
	image: string;
	name: string;
	type: string;
}

const ProjectCard: React.FC<Props> = ({ image, name, type }) => {
	return (
		<Col lg={4} sm={8} className="ml-auto mr-auto">
			<a href="#">
				<div className={s.projectCard}>
					<img src={image} alt={name} />
					<div className={cx(s.info, 'textSemibold')}>
						<div className={s.title}>{name}</div>
						<div>{type}</div>
					</div>
				</div>
			</a>
		</Col>
	);
};

export default ProjectCard;
