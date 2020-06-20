/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import s from './Works.module.sass';
import Container from 'react-bootstrap/Container';
import Title from '../Title';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../UI/Button';
import ProjectCard from './ProjectCard';

import watchesImage from '../../images/watches.png';
import pocketImage from '../../images/pocket.png';
import tShirtImage from '../../images/t-shirt.png';
import wineImage from '../../images/wine.png';
import webImage from '../../images/web-design.jpg';

const Work: React.FC = () => {
	return (
		<div className="article-container" id="Works">
			<Container>
				<Title title="Latest Works">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do&nbsp;eiusmod tempor incididunt ut&nbsp;labore
					et&nbsp;dolore magna aliqua. Ut&nbsp;enim ad&nbsp;minim veniam,
				</Title>
				<Tabs selectedTabClassName={s.selectedTab} selectedTabPanelClassName={s.selectedPanel}>
					<Row className="justify-content-center">
						<TabList className={s.tabList}>
							<Tab className={s.tab}>
								<Button square expandable>
									All
								</Button>
							</Tab>
							<Tab className={s.tab}>
								<Button square expandable>
									Web Design
								</Button>
							</Tab>
							<Tab className={s.tab}>
								<Button square expandable>
									UI/UX Design
								</Button>
							</Tab>
							<Tab className={s.tab}>
								<Button square expandable>
									Mockups
								</Button>
							</Tab>
						</TabList>
					</Row>
					<Row className="justify-content-center">
						<TabPanel className={s.panel}>
							<Row>
								<ProjectCard image={watchesImage} name={'Hand Watch'} type={'ui/ux design'} />
								<ProjectCard image={tShirtImage} name={'T-shirt'} type={'mockups'} />
								<ProjectCard image={pocketImage} name={'Pocket'} type={'ui/ux design'} />
								<ProjectCard image={wineImage} name={'Wine'} type={'mockups'} />
								<ProjectCard image={webImage} name={'Web Design'} type={'web design'} />
								<ProjectCard image={watchesImage} name={'Hand Watch'} type={'ui/ux design'} />
							</Row>
						</TabPanel>
						<TabPanel className={s.panel}>
							<Row>
								<ProjectCard image={webImage} name={'Web Design'} type={'web design'} />
								<ProjectCard image={webImage} name={'Web Design'} type={'web design'} />
								<ProjectCard image={webImage} name={'Web Design'} type={'web design'} />
								<ProjectCard image={webImage} name={'Web Design'} type={'web design'} />
								<ProjectCard image={webImage} name={'Web Design'} type={'web design'} />
								<ProjectCard image={webImage} name={'Web Design'} type={'web design'} />
							</Row>
						</TabPanel>
						<TabPanel className={s.panel}>
							<Row>
								<ProjectCard image={pocketImage} name={'Pocket'} type={'ui/ux design'} />
								<ProjectCard image={watchesImage} name={'Hand Watch'} type={'ui/ux design'} />
								<ProjectCard image={pocketImage} name={'Pocket'} type={'ui/ux design'} />
								<ProjectCard image={watchesImage} name={'Hand Watch'} type={'ui/ux design'} />
								<ProjectCard image={pocketImage} name={'Pocket'} type={'ui/ux design'} />
								<ProjectCard image={watchesImage} name={'Hand Watch'} type={'ui/ux design'} />
							</Row>
						</TabPanel>
						<TabPanel className={s.panel}>
							<Row>
								<ProjectCard image={tShirtImage} name={'T-shirt'} type={'mockups'} />
								<ProjectCard image={wineImage} name={'Wine'} type={'mockups'} />
								<ProjectCard image={tShirtImage} name={'T-shirt'} type={'mockups'} />
								<ProjectCard image={wineImage} name={'Wine'} type={'mockups'} />
								<ProjectCard image={tShirtImage} name={'T-shirt'} type={'mockups'} />
								<ProjectCard image={wineImage} name={'Wine'} type={'mockups'} />
							</Row>
						</TabPanel>
					</Row>
				</Tabs>
				<Row>
					<Col>
						<div className="d-flex justify-content-center">
							<Button className={s.button} square green big link>
								View all
							</Button>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Work;
