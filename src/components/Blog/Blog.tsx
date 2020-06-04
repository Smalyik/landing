import React from 'react';
import s from './Blog.module.sass';
import Container from 'react-bootstrap/Container';
import Title from '../Title';
import BlogArticle from './BlogArticle';
import { BlogArticleProps } from './BlogArticle/BlogArticle';
import article1 from '../../images/article-1.png';
import article2 from '../../images/article-2.png';
import article3 from '../../images/article-3.png';

interface BlogComponent {
	Article: React.FC<BlogArticleProps>;
}

const Blog: React.FC & BlogComponent = () => {
	return (
		<div className={s.blogContainer}>
			<Container>
				<Title title="Blog">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do&nbsp;eiusmod tempor incididunt ut&nbsp;labore
					et&nbsp;dolore magna aliqua. Ut&nbsp;enim ad&nbsp;minim veniam,
				</Title>

				<BlogArticle title="SEO Quis Vestibulum" date="04.06.2020" type="Development" image={article1}>
					Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat...
				</BlogArticle>
				<BlogArticle title="SEO Quis Vestibulum" date="04.06.2020" type="Development" image={article2}>
					Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat...
				</BlogArticle>
				<BlogArticle title="SEO Quis Vestibulum" date="04.06.2020" type="Development" image={article3}>
					Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat...
				</BlogArticle>
			</Container>
		</div>
	);
};

Blog.Article = BlogArticle;

export default Blog;
