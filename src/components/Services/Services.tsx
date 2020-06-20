import React from 'react';
import cx from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Title from '../Title';
import ServicesCard from './ServicesCard';
import { ServicesCardProps } from './ServicesCard/ServicesCard';
import s from './Services.module.sass';

interface ServicesComponent {
	Card: React.FC<ServicesCardProps>;
}

const Services: React.FC & ServicesComponent = () => {
	return (
		<div className={cx(s.serviceContainer, 'article-container')} id="Services">
			<Container>
				<Title title="Our Services">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do&nbsp;eiusmod tempor incididunt ut&nbsp;labore
					et&nbsp;dolore magna aliqua. Ut&nbsp;enim ad&nbsp;minim veniam,
				</Title>
				<Row>
					<Services.Card title="Research">
						At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque
						corrupti quos.
					</Services.Card>
					<Services.Card title="Portfolio">
						At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque
						corrupti quos.
					</Services.Card>
					<Services.Card title="Support">
						At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque
						corrupti quos.
					</Services.Card>
					<Services.Card title="Documentation">
						At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque
						corrupti quos.
					</Services.Card>
					<Services.Card title="Development">
						At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque
						corrupti quos.
					</Services.Card>
					<Services.Card title="Design">
						At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque
						corrupti quos.
					</Services.Card>
				</Row>
			</Container>
		</div>
	);
};

Services.Card = ServicesCard;

export default Services;
