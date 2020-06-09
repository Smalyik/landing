import React from 'react';
import cx from 'classnames'
import s from './PricingCard.module.sass';
import Col from 'react-bootstrap/Col';
import Button from '../../UI/Button';

export interface PricingCardProps {
	title?: string;
	price?: string;
	cardAdvantages: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, cardAdvantages }) => {
	return (
		<Col lg={4} sm={7} className={cx(s.cardCol, 'ml-auto', 'mr-auto')}>
			<div className={s.card}>
				<div className={s.titleContainer}>
					<div className={s.title}>{title}</div>
					<div className={s.priceContainer}>
						<span className={s.dollar}>$</span>
						<span className={s.price}>{price}</span>
						<span className="mt-auto">per month</span>
					</div>
				</div>
				<div>
					<ul className={s.advantagesList}>
						{cardAdvantages.map((advantage, index) => {
							return <li key={index}>{advantage}</li>;
						})}
					</ul>
					<Button square gray medium>
						Order now
					</Button>
				</div>
			</div>
		</Col>
	);
};

export default PricingCard;
