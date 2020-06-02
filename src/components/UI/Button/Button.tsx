import React from 'react';
import cx from 'classnames';
import s from './Button.module.sass';

interface Props {
	square?: boolean;
	transparent?: boolean;
}

const Button: React.FC<Props> = ({ children, square, transparent }) => {
	const classNames: string[] = [];
	square && classNames.push('square-button');
	transparent && classNames.push('transparent-button');

	return <button className={cx('button', [...classNames])}>{children}</button>;
};

export default Button;
