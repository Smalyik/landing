import cx from 'classnames';
import React from 'react';

import styles from './Col.module.sass';

interface Props {
	size: number;
	sizeL: number | null;
	sizeMd: number | null;
	sizeSm: number | null;
	sizeSmd: number | null;
	offsetSize: number | null;
	stretchHeight: boolean;
	children: React.ReactNode;
	className: string | null;
	variant: any;
	fullMobile: boolean;
	pdAll: boolean;
}

const Col: React.FC<Props>= ({
	size = 12,
	sizeL = null,
	sizeMd = null,
	sizeSm = null,
	sizeSmd = null,
	offsetSize = null,
	stretchHeight = false,
	children,
	className,
	variant = 'div',
	fullMobile = false,
	pdAll,
}: Props) => {
	const classes = cx(
		styles.col,
		styles[`col-${size}`],
		sizeL && styles[`col-l-${sizeL}`],
		sizeMd && styles[`col-md-${sizeMd}`],
		sizeSm && styles[`col-sm-${sizeSm}`],
		sizeSmd && styles[`col-smd-${sizeSmd}`],
		offsetSize && styles[`col-offset-${offsetSize}`],
		stretchHeight && styles.colFlex,
		fullMobile && styles.fullMobile,
		pdAll && styles.pdAll,
		className
	);

	return React.createElement(variant, { className: classes }, children);
};

export default Col;
