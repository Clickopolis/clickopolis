import * as React from 'react';
import { classes, stylesheet } from 'typestyle';

const css = stylesheet({
	subscreen: {
		color: `white`,
		padding: ` 0.25rem`,
		width: `100%`,
		position: `relative`,
		background: '#111',
		minHeight: '400px',
		borderTop: '1px solid #444'
	},
	subscreenMarginTop: {
		marginTop: '2rem'
	},
	subscreenTitle: {
		display: 'block',
		margin: '0',
		fontWeight: 'lighter',
		marginLeft: '.5rem'
	},
	subscreenIcon: {
		marginLeft: '1rem',
		marginRight: '1rem',
		marginTop: '-2rem',
		height: '4rem'
	}
});

export interface SubscreenProps {
	children: React.ReactNode;
	name: string;
	icon?: string;
	includeMarginTop?: boolean;
}

export function Subscreen({ children, name, icon, includeMarginTop }: SubscreenProps) {
	return (
		<div className={classes(css.subscreen, includeMarginTop && css.subscreenMarginTop)}>
			<h3 className={classes(css.subscreenTitle)}>
				<img
					className={classes(css.subscreenIcon)}
					src={`./images/${name.toLowerCase().replace(/\s/, '-') || icon}.svg`}
				/>
				{name}
			</h3>

			{children}
		</div>
	);
}
