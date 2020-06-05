/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import cx from 'classnames'
import s from './ProjectCard.module.sass';

interface Props {
	image: string;
	name: string;
	type: string;
}

const ProjectCard: React.FC<Props> = ({ image, name, type }) => {
	return (
		<a href="#">
			<div className={s.projectCard}>
				<img src={image} alt={name} />
				<div className={cx(s.info, 'textSemibold')}>
					<div className={s.title}>{name}</div>
					<div>{type}</div>
				</div>
			</div>
		</a>
	);
};

export default ProjectCard;
