import React, { useState } from 'react';
import s from './ContactForm.module.sass';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../../UI/Button';

interface formMap {
	[key: string]: string;
	name: string;
	email: string;
}

const ContactForm: React.FC = () => {
	const [formSent, setFormSent] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const handleSubmit = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
		e.preventDefault();
		const formMap: formMap = {
			name: name,
			email: email,
		};

		const isFormValid = Object.keys(formMap).map(key => checkError(key, formMap[key]));
		if (isFormValid.includes(false)) {
			return
		}
		setFormSent(true);
	};

	const checkError = (key: string, value: string) => {
		if (!value) {
			const invalidInput = document.querySelector(`#c${key}`)
			invalidInput!.classList.add('error')
			return false
		}
		return true
	};

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		document.querySelector(`#cname`)?.classList.remove('error')
		setName(e.target.value);
	};

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		document.querySelector(`#cemail`)?.classList.remove('error')
		setEmail(e.target.value);
	};

	return !formSent ? (
		<form>
			<Row className="justify-content-center">
				<Col md={5}>
					<input
						onChange={handleNameChange}
						id="cname"
						className={s.input}
						type="text"
						placeholder="Your Name"
						value={name}
					/>
				</Col>
				<Col md={5}>
					<input
						onChange={handleEmailChange}
						id="cemail"
						className={s.input}
						type="email"
						placeholder="Your Email"
						value={email}
					/>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col md={10}>
					<textarea className={s.textarea} placeholder="Write Message" />
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col md={10}>
					<div className="d-flex justify-content-end">
						<div onClick={handleSubmit}>
							<Button round white big>
								Send
							</Button>
						</div>
					</div>
				</Col>
			</Row>
		</form>
	) : (
		<Row>
			<Col className="text-center">Thank You!</Col>
		</Row>
	);
};

export default ContactForm;
