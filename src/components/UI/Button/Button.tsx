import React from 'react';
import cx from 'classnames';
import s from './Button.module.sass';

interface Props {
	square?: boolean;
	transparent?: boolean;
	transparentGray?: boolean;
	green?: boolean;
	gray?: boolean;
	big?: boolean;
	medium?: boolean;
}

const Button: React.FC<Props> = props => {
	const classNames: string[] = [];
	props.square && classNames.push(s.squareButton);

	props.transparent && classNames.push(s.transparentButton);
	props.transparentGray && classNames.push(s.transparentGrayButton);
	props.green && classNames.push(s.greenButton);
	props.gray && classNames.push(s.grayButton);

	props.big && classNames.push(s.bigButton);
	props.medium && classNames.push(s.mediumButton);

	return <button className={cx('button', [...classNames])}>{props.children}</button>;
};

export default Button;
