import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Title from '../Title';
import ServiceCard from '../ServiceCard';
import s from './Services.module.sass';

const Services: React.FC = () => {
	return (
		<div className={s.serviceContainer}>
			<Container>
				<Title title="Our Services">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do&nbsp;eiusmod tempor incididunt ut&nbsp;labore
					et&nbsp;dolore magna aliqua. Ut&nbsp;enim ad&nbsp;minim veniam,
				</Title>
				<Row>
					<ServiceCard title="Research">
						At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque
						corrupti quos.
					</ServiceCard>
					<ServiceCard title="Portfolio">
						At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque
						corrupti quos.
					</ServiceCard>
					<ServiceCard title="Support">
						At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque
						corrupti quos.
					</ServiceCard>
					<ServiceCard title="Documentation">
						At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque
						corrupti quos.
					</ServiceCard>
					<ServiceCard title="Development">
						At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque
						corrupti quos.
					</ServiceCard>
					<ServiceCard title="Design">
						At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque
						corrupti quos.
					</ServiceCard>
				</Row>
			</Container>
		</div>
	);
};

export default Services;
