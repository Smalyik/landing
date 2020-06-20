import React from 'react';
import cx from 'classnames';
import s from './Pricing.module.sass';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Title from '../Title';
import PricingCard from './PricingCard';
import { PricingCardProps } from './PricingCard/PricingCard';

interface PricingComponent {
	Card: React.FC<PricingCardProps>;
}

const Pricing: React.FC & PricingComponent = () => {
	return (
		<div className={cx(s.pricingContainer, 'article-container')} id="Pricing">
			<Container>
				<Title title="Pricing Plan">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do&nbsp;eiusmod tempor incididunt ut&nbsp;labore
					et&nbsp;dolore magna aliqua. Ut&nbsp;enim ad&nbsp;minim veniam,
				</Title>
				<Row>
					<Pricing.Card
						title="Free Trail"
						price="00"
						cardAdvantages={['30 free trail', '5 free projects', 'PHP 5 Enabled', '24/7 Supports']}
					/>
					<Pricing.Card
						title="Basic"
						price="50"
						cardAdvantages={['30 free trail', '5 free projects', 'PHP 5 Enabled', '24/7 Supports']}
					/>
					<Pricing.Card
						title="Ultimates"
						price="99"
						cardAdvantages={['30 free trail', '5 free projects', 'PHP 5 Enabled', '24/7 Supports']}
					/>
				</Row>
			</Container>
		</div>
	);
};

Pricing.Card = PricingCard;

export default Pricing;
