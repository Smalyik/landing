import React from 'react';
import s from './Contact.module.sass';
import Container from 'react-bootstrap/Container';
import Title from '../Title';
import ContactForm from './ContactForm';

const Contact: React.FC = () => {
	return (
		<div className={s.contactContainer}>
			<Container>
				<Title title="Contact Us">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do&nbsp;eiusmod tempor incididunt ut&nbsp;labore
					et&nbsp;dolore magna aliqua. Ut&nbsp;enim ad&nbsp;minim veniam,
				</Title>
				<ContactForm />
			</Container>
		</div>
	);
};

export default Contact;
