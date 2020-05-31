import cx from 'classnames';
import React from 'react';

import styles from './Row.module.sass';

/**
 * Ряд сетки. Внутрь должны помещаться Col
 */
interface Props {
	verticalCenter: boolean;
	verticalBottom: any;
	marginAuto: any;
	children: React.ReactNode;
	className: string | null;
	center: boolean;
	wrapper: boolean;
	wrapperHalf: any;
	variant: any;
	id: any;
	pdAll: any;
	noMargin: any;
}

const Row: React.FC<Props> = ({
	verticalCenter = false,
	verticalBottom,
	center = false,
	marginAuto,
	children,
	className = null,
	wrapper = false,
	wrapperHalf,
	variant = 'div',
	id,
	pdAll,
	noMargin,
}: Props) => {
	const classes = cx(
		styles.row,
		verticalCenter && styles.rowVerticalCenter,
		verticalBottom && styles.rowVerticalBottom,
		center && styles.center,
		marginAuto && styles.mauto,
		wrapper && 'wrapper',
		wrapperHalf && styles.wrapperHalf,
		pdAll && styles.pdAll,
		noMargin && styles.noMargin,
		className
	);

	return React.createElement(variant, { className: classes, id }, children);
};

export default Row;
