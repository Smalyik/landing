/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import cx from 'classnames';
import s from './Button.module.sass';

interface Props {
	square?: boolean;
	round?: boolean;
	transparent?: boolean;
	transparentGray?: boolean;
	green?: boolean;
	gray?: boolean;
	white?: boolean;
	big?: boolean;
	medium?: boolean;
	link?: boolean;
	expandable?: boolean;
	className?: string;
}

const Button: React.FC<Props> = props => {
	const classNames: string[] = [];

	props.className && classNames.push(props.className)

	props.square && classNames.push(s.squareButton);
	props.round && classNames.push(s.roundButton);

	props.transparent && classNames.push(s.transparentButton);
	props.transparentGray && classNames.push(s.transparentGrayButton);
	props.green && classNames.push(s.greenButton);
	props.gray && classNames.push(s.grayButton);
	props.white && classNames.push(s.whiteButton);

	props.big && classNames.push(s.bigButton);
	props.medium && classNames.push(s.mediumButton);

	props.expandable && classNames.push(s.expandableButton);

	const Element = props.link ?
		<a href="#" className={cx(s.button, ...classNames)}>{props.children}</a> :
		<button className={cx(s.button, ...classNames)}>{props.children}</button>

	return Element;
};

export default Button;
