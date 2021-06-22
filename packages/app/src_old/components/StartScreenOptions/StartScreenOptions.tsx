import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { color } from 'csx';
import { classes, stylesheet } from 'typestyle';

import { selectLeader, turnOnFlag } from 'actions';
import { leaders } from 'data/leaders';
import { Leader } from 'interfaces';
import { addImages, colors } from 'utils';
import { Button } from 'components/Button';
import { State } from 'utils/State';

export function LeaderProfile({
	leader,
	selectedLeader
}: {
	leader: Leader;
	selectedLeader: Leader;
}) {
	const dispatch = useDispatch();

	return (
		<div className={css.leader}>
			<figure
				onClick={() => dispatch(selectLeader(leader.name))}
				className={classes(
					css.leaderProfile,
					selectedLeader?.name === leader?.name && css.leaderProfileSelected
				)}
			>
				<img
					style={{ width: '100%' }}
					src={`./images/${leader?.name?.toLowerCase().replace(/\s/g, '-')}.png`}
				/>
			</figure>
			<div className={css.leaderName}>{leader.name}</div>
		</div>
	);
}

export function StartScreenOptions() {
	const selectedLeader = useSelector<State, State['leader']>((state) => state.leader);
	const dispatch = useDispatch();

	useEffect(() => console.log(selectedLeader), [selectedLeader]);

	return (
		<div
			className={css.startScreenOptions}
			style={{
				display: 'flex',
				paddingTop: '2rem',
				flexDirection: 'column'
			}}
		>
			<div
				style={{
					margin: '0 auto',
					display: 'flex',
					justifyContent: 'center'
				}}
			>
				<div className={css.optionWrapper}>
					<span className={css.optionLabel}>Name</span>
					<input className={css.optionInput} type="text" />
				</div>

				<div className={css.optionWrapper}>
					<span className={css.optionLabel}>Civilization Name</span>
					<input className={css.optionInput} type="text" />
				</div>
			</div>

			<div className={css.leadersWrapper}>
				<div className={css.leaders}>
					{leaders.map((leader) => {
						return (
							<div key={leader?.name} className={css.leader}>
								<LeaderProfile leader={leader} selectedLeader={selectedLeader} />
							</div>
						);
					})}
				</div>
				<div className={css.selectedLeader}>
					<div className={css.selectedLeaderCiv}>{selectedLeader?.defaultCivName}</div>
					{selectedLeader && (
						<figure className={classes(css.leaderProfile, css.leaderProfileInSelected)}>
							<img
								style={{ width: '100%' }}
								src={`./images/${selectedLeader?.name?.toLowerCase().replace(/\s/g, '-')}.png`}
							/>
						</figure>
					)}
					<div className={css.selectedLeaderName}>{selectedLeader?.name}</div>

					{selectedLeader?.abilities?.map((ab: Leader['abilities'][number]) => {
						return (
							<div style={{ margin: '.5rem', marginTop: '1rem' }}>
								<strong
									style={{
										display: 'block',
										fontSize: '110%',
										letterSpacing: '3px',
										textTransform: 'uppercase',
										marginBottom: '0.5rem'
									}}
								>
									{ab.name} {!ab?.unlocked && <span className={css.leaderLocked}>locked</span>}
								</strong>
								<p style={{ margin: '0' }}>{addImages(ab.description)}</p>
							</div>
						);
					})}
				</div>
			</div>

			<Button onClick={() => dispatch(turnOnFlag('HAS_STARTED_GAME'))} className={css.goButton}>
				Go!
			</Button>
		</div>
	);
}

const css = stylesheet({
	startScreenOptions: {
		color: 'white',
		background: '#111',
		borderRadius: '.25rem',
		boxShadow: '0 0 8px rgba(0,0,0,0.333)',
		margin: '1rem',
		minHeight: '40vmin',
		overflowX: 'hidden'
	},
	optionWrapper: {
		display: 'flex',
		margin: '.5rem',
		alignItems: 'center',
		flexWrap: 'wrap'
	},
	optionLabel: {
		fontSize: '.9rem',
		margin: '0 .5rem',
		textAlign: 'left',
		color: '#ddd',
		textTransform: 'lowercase'
	},
	optionInput: {
		color: '#111',
		border: '1px solid #ccc',
		borderRadius: '.25rem',
		padding: '.25rem'
	},
	leadersWrapper: {
		background: `linear-gradient(94deg, rgba(45,12,61,0.5) 0%, rgba(45,12,61,0.5) 50%, rgba(10,33,51,0.5) 50%, rgba(13,62,93,0.5) 100%)`,
		padding: '1rem',
		marginTop: '2rem',
		display: 'flex'
	},
	leaders: {
		padding: '1rem',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		width: '60%'
	},
	leader: {
		//margin: '0.5rem',
	},
	leaderName: {
		textAlign: 'center'
	},
	leaderLocked: {
		margin: '.25rem 0',
		borderRadius: '1rem',
		padding: '0.25rem .5rem',
		background: '#fff',
		color: '#222',
		fontSize: '80%'
	},
	leaderProfile: {
		cursor: 'pointer',
		width: '6rem',
		height: '6rem',
		borderRadius: '50%',
		overflow: 'hidden',
		border: '4px solid #ffaf24',
		borderColor: color('#ffaf24').fadeOut(0.4).toString(),
		transition: '250ms border ease-in',
		$nest: {
			'&:hover': {
				borderColor: '#ffaf24',
				transition: '250ms border ease-out'
			},
			'&:active': {
				borderColor: '#ffaf24',
				transition: '250ms border ease-out'
			}
		}
	},
	leaderProfileInSelected: {
		margin: '0.5rem auto',
		borderColor: 'white',
		transition: '250ms border ease-out'
	},
	leaderProfileSelected: {},
	selectedLeader: {
		width: '50%',
		padding: '1rem',
		minHeight: '500px'
	},
	selectedLeaderName: {
		textAlign: 'center',
		fontSize: '120%',
		letterSpacing: '3px',
		textTransform: 'uppercase'
	},
	selectedLeaderCiv: {
		fontStyle: 'italic'
	},
	goButton: {
		maxWidth: '10rem',
		textTransform: 'uppercase',
		backgroundColor: colors.get('resources'),
		margin: '1rem auto',
		borderRadius: '1rem',
		padding: '.5rem 1rem',
		color: '#111',
		fontSize: '1.5rem',
		border: 'none',
		transition: '250ms background',
		$nest: {
			'&:hover': {
				backgroundColor: color(colors.get('resources')).lighten(0.2).toString(),
				transition: '250ms all'
			}
		}
	}
});
