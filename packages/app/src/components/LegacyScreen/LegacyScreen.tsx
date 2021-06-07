import * as React from 'react';
import { connect } from 'react-redux';

import { colors } from 'utils';
import { Screen, Indicator } from '@clickopolis/core';
import { stylesheet, keyframes } from 'typestyle';
import { State } from 'utils/State';

const SunsetAnimation = keyframes({
    '0%': {backgroundPosition: `0% 50%`},
    '50%': {backgroundPosition: `100% 50%`},
    '100%': {backgroundPosition: `0% 50%`},
});

const css = stylesheet({
    legacyItemWrapper: {
        position: 'relative',
        margin: '1rem 2rem',
    },
    legacyItem: {
        clipPath: `polygon(0% 0%, 96% 4%, 100% 50%, 95% 100%, 0% 100%)`,
        background: colors.get('legacy'),
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20rem',
        height: '4rem',
        $nest: {
            '&:hover': {
                background: `linear-gradient(255deg, #e8d271, #db6e52)`,
                backgroundSize: `400% 400%`,

                animationName: SunsetAnimation,
                animationDuration: '3s',
                animationTimingFunction: 'ease-in-out',
                animationIterationCount: 'infinite',
            }
        }
    },
    
    legacyIconWrapper: {
        background: '#333',
        borderRadius: '50%',
        //padding: '0.25rem',
        height: '4rem',
        width: '4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '0',
        left: '-2rem',
        zIndex: 1,
    },
    legacyIcon: {
        height: '3rem',
        width: '3rem',
    },
    legacyName: {
        textAlign: 'center',
        color: 'white',
        textTransform: 'uppercase',
        marginLeft: '3rem',
        marginRight: '1rem',
        letterSpacing: '2px',
    },
    legacyLevel: {
        background: '#222',
        color: 'white',
        padding: '0.5rem 1rem',
        //borderRadius: '0.25rem',
        marginLeft: 'auto',
    },
});

export interface Legacy {
    name: string;
    level: number;
    style?: object;
}

const LegacyIcon = (leg: Legacy) => {
    return (
        <div className={css.legacyItemWrapper}>
            <div className={css.legacyIconWrapper}>
                <img className={css.legacyIcon} src={`./images/${leg.name}.svg`} />
            </div>
            <div className={css.legacyItem}>

                <div className={css.legacyName}>
                    {leg.name.replace(/-/g, ' ')}
                </div>

                <div className={css.legacyLevel}>
                    {leg.level}
                </div>
            </div>
        </div>
    );
}

export interface LegacyScreenProps {
    population?: number;
    ac?: number;
}

export class LegacyScreenBase extends React.Component<LegacyScreenProps> {
    constructor(props:LegacyScreenProps) {
        super(props);
    }

    private renderLegacyIcons(legs: Legacy[]) {
        return legs.map((leg: Legacy, idx) => {
            
            // let style = {};
            // if (idx === 5) {
            //     style = {marginLeft: '4rem', marginTop: '-2rem'}
            // }
            // if (idx === 6 || idx === 6 || idx === 7 || idx === 8) {
            //     style = {marginTop: '-2rem'}
            // }
            // if (idx === 9) {
            //     style = {marginLeft: '8rem', marginTop: '-2rem'}
            // }
            // if (idx === 10 || idx === 11) {
            //     style = {marginTop: '-2rem'}
            // }

            return <LegacyIcon {...leg} />
        })
    }

    private calculateLegacyPoints() {
        const {population, ac} = this.props;

        return population + ac;
    }

    public render() {
        const legs = [
            {name: 'empire-of-the-arts', level: 1},
            {name: 'divine-kingdom', level: 2},
            {name: 'economic-superpower', level: 3},
            {name: 'never-setting-sun', level: 1},
            {name: 'peace-through-war', level: 1},
            {name: 'power-of-minds', level: 1},
            {name: 'world-stage-playa', level: 1},
            {name: 'famous-skylines', level: 1},
            {name: 'dearest-leader', level: 1},
            {name: 'wonder-god', level: 1},
            {name: 'child-of-nature', level: 1},
            {name: 'robotic-overlord', level: 1}
        ]

        return (
            <Screen
                type='Legacy'
                color={colors.get('legacy')}
            >
                <div style={{margin: '1rem', display: 'flex', justifyContent: 'space-between'}}>
                    <div
                        style={{
                            border: `1px solid ${colors.get('legacy')}`,
                            background: '#111',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            borderRadius: '.25rem',
                            cursor: 'pointer',
                            // ':hover': {
                            //     opacity: 0.9
                            // }
                        }}
                        
                    >
                        <img style={{marginLeft: '.5rem', height: '1.5rem'}} src='./images/legacy.svg' />
                        <div style={{margin: '0 .5rem'}}>Pass On Your Legacy</div>
                        <div style={{
                            background: colors.get('legacy'),
                            color: 'white',
                            padding: '.5rem',
                            textAlign: 'center',
                        }}>
                            earn {this.calculateLegacyPoints()} points
                        </div>
                    </div>

                    <Indicator
                        icon='./images/legacy.svg'
                        positiveColor={'#444'}
                        value={355}
                        description={`Your current legacy points`}
                    />
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', }}>
                    {this.renderLegacyIcons(legs)}
                </div>

            </Screen>
        );
    }
}

export const LegacyScreen = connect(
    (state: any) => ({
        population: state.civilization.population,
        ac: state.civilization.ac,
    }),
    null
)(LegacyScreenBase);
