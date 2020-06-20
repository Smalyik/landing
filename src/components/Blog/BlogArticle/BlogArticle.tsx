/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import cx from 'classnames'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FileIcon from '../../UI/FileIcon';
import CalendarIcon from '../../UI/CalendarIcon';
import s from './BlogArticle.module.sass';

export interface BlogArticleProps {
	title: string;
	date: string;
	type: string;
	image: string;
}

const BlogArticle: React.FC<BlogArticleProps> = ({ children, title, date, type, image }) => {
	return (
		<Row className={s.articleRow}>
			<Col>
				<img className={s.image} src={image} alt="articleImage" />
			</Col>
			<Col>
				<div className={s.infoContainer}>
					<a className={cx(s.title, 'textSemibold')} href="#">
						{title}
					</a>
					<div className="d-flex textSemibold">
						<div className={s.info}>
							<CalendarIcon size={[17, 18]} />
							<span>{date}</span>
						</div>
						<div className={s.info}>
							<FileIcon size={[17, 18]} />
							<span>{type}</span>
						</div>
					</div>
					<div className={s.description}>{children}</div>
				</div>
			</Col>
		</Row>
	);
};

export default BlogArticle;
