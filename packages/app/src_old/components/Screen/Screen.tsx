import * as React from 'react';
import { classes, style as typestyle, stylesheet } from 'typestyle';

export interface ScreenProps {
	className?: string | string[];
	color: string;
	color2?: string;
	style?: object;
	type: string;
	infoComponent?: React.ReactNode;
	header?: React.ReactNode;
}

export class Screen extends React.Component<ScreenProps, { showInfo: boolean }> {
	public state = {
		showInfo: false
	};

	private onShowInfo = (_: any) => {
		this.setState((state) => ({ showInfo: !state.showInfo }));
	};

	public render() {
		const { children, color, color2, className, style, type, header, infoComponent } = this.props;

		const headerWrapper = typestyle({
			margin: '0.5rem',
			marginTop: 0,
			padding: '0.25rem',
			borderRadius: '0 0 .5rem .5rem',
			background: `linear-gradient(to right, ${color}, ${color2 ?? color})`
		});

		return (
			<section
				style={{ ...style }}
				className={classes('clickopolis-screen', `${type.toLowerCase()}-screen`, className)}
				id={type}
			>
				{!header ? (
					<div className={headerWrapper}>
						<header className={css.header}>
							<img className={css.headerImage} src={`./images/${type.toLowerCase()}.svg`} />
							<h2 className={css.headerTitle}>{type}</h2>
						</header>
					</div>
				) : (
					header
				)}
				{this.state.showInfo && infoComponent && infoComponent}
				{children}
			</section>
		);
	}
}

const css = stylesheet({
	header: {
		display: 'flex',
		alignItems: 'center',
		borderRadius: '.5rem',
		background: '#222',
		padding: '0.25rem'
	},
	headerImage: {
		height: '2rem',
		margin: '.25rem'
	},
	headerTitle: {
		margin: 0,
		marginLeft: '.25rem',
		color: 'white',
		textTransform: 'uppercase',
		fontWeight: 'lighter'
	}
});
