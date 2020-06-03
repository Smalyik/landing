import React from 'react';
import cx from 'classnames';
import s from './Button.module.sass';

interface Props {
	square?: boolean;
	transparent?: boolean;
	green?: boolean;
	transparentGray?: boolean;
	big?: boolean;
}

const Button: React.FC<Props> = ({ children, square, transparent, green, transparentGray, big }) => {
	const classNames: string[] = [];
	square && classNames.push(s.squareButton);
	transparent && classNames.push(s.transparentButton);
	green && classNames.push(s.greenButton);
	transparentGray && classNames.push(s.transparentGrayButton);
	big && classNames.push(s.bigButton);

	return <button className={cx('button', [...classNames])}>{children}</button>;
};

export default Button;
