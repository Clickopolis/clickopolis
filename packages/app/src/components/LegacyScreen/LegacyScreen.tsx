import * as React from 'react';
import { connect } from 'react-redux';

import { colors } from 'utils';
import { Screen, Button, Indicator } from '@clickopolis/core';

import './LegacyScreen.scss';

export interface Legacy {
    name: string;
    level: number;
    style?: object;
}

const LegacyIcon = (leg: Legacy) => {
    return (
        <div style={{height: '8rem', width: '8rem', display: 'flex', justifyContent: 'center',
            alignItems: 'center', clipPath: `polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)`,
            background: colors.get('legacy'), position: 'relative', pointer: 'cursor',
            ...leg.style,
            }} className='legacy-item'>
            <img style={{margin: '.5rem', height: '5rem'}} src={`./images/${leg.name}.svg`} />
            <div className='legacy-level' style={{
                background: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '2rem',
                textAlign: 'center',
                display: 'none',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                height: '3rem',
                width: '3rem',
                clipPath: `polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)`,
                top: '2.5rem',
                left: '2.5rem',
            }}>
                {leg.level}
            </div>
        </div>
    )
}

export interface LegacyScreenProps {

}

export class LegacyScreenBase extends React.Component<LegacyScreenProps> {
    constructor(props:LegacyScreenProps) {
        super(props);
    }

    private renderLegacyIcons(legs: Legacy[]) {
        return legs.map((leg: Legacy, idx) => {
            
            let style = {};
            if (idx === 5) {
                style = {marginLeft: '4rem', marginTop: '-2rem'}
            }
            if (idx === 6 || idx === 6 || idx === 7 || idx === 8) {
                style = {marginTop: '-2rem'}
            }
            if (idx === 9) {
                style = {marginLeft: '8rem', marginTop: '-2rem'}
            }
            if (idx === 10 || idx === 11) {
                style = {marginTop: '-2rem'}
            }

            return <LegacyIcon style={style} {...leg} />
        })
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
                            ':hover': {
                                opacity: 0.9
                            }
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
                            earn 420 points
                        </div>
                    </div>

                    <Indicator
                        icon='./images/legacy.svg'
                        positiveColor={'#444'}
                        value={355}
                        description={`Your current legacy points`}
                    />
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    {this.renderLegacyIcons(legs)}
                </div>

            </Screen>
        );
    }
}

export const LegacyScreen = connect(
    null,
    null
)(LegacyScreenBase);
