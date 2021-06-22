import * as React from 'react';
import { Screen } from 'components/Screen';
import { Indicator } from 'components/Indicator';
import { Button } from 'components/Button';
import { Civilization } from 'interfaces';
import { connect } from 'react-redux';

import { colors } from 'utils';

import './EconomyScreen.scss';

export interface EconomyScreenProps {
	civilization: Civilization;
}

const totalCashStyle = {
	fontSize: '1.5rem',
	margin: '1rem',
	height: '2rem',
	display: 'flex',
	padding: '8px',
	alignItems: 'center',
	justifyContent: 'center'
};

export class EconomyScreenBase extends React.Component<EconomyScreenProps> {
	constructor(props: EconomyScreenProps) {
		super(props);
	}

	public render() {
		return (
			<Screen type="Economy" color={colors.get('economy')}>
				<Indicator
					value={this.props.civilization.cash.total}
					style={totalCashStyle}
					positiveColor={colors.get('economy')}
					neutralColor={colors.get('economy')}
					negativeColor={colors.get('economy')}
					iconHeight={'1.4rem'}
					icon={'./images/cash.svg'}
					description={`The total cash in your empire`}
				/>

				<div style={{ margin: '1rem' }}>
					<h3 style={{ color: colors.get('economy') }}>Trade Routes</h3>
					<table className="trade-routes">
						<thead>
							<td>Route To...</td>
							<td>
								<img style={{ height: '1rem' }} src="./images/cash.svg" />
							</td>
							<td>
								<img style={{ height: '1rem' }} src="./images/research.svg" />
							</td>
							<td>
								<img style={{ height: '1rem' }} src="./images/faith.svg" />
							</td>
							<td>
								<img style={{ height: '1rem' }} src="./images/culture.svg" />
							</td>
							<td>Duration Per Trip (min)</td>
						</thead>
						<tbody>
							<tr>
								<td>Azabar</td>
								<td>+1</td>
								<td>+2</td>
								<td>+4</td>
								<td>0</td>
								<td>3</td>
							</tr>
							<tr>
								<td>Morosia</td>
								<td>0</td>
								<td>+2</td>
								<td>+200</td>
								<td>+2</td>
								<td>3</td>
							</tr>
						</tbody>
					</table>
				</div>
			</Screen>
		);
	}
}

export const EconomyScreen: React.ComponentClass<{}> = connect(
	(state: any) => ({
		civilization: state.civilization
	}),
	null
)(EconomyScreenBase);
