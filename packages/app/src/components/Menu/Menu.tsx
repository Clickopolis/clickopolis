import * as React from 'react';
// @ts-ignore: no @types defintion
import { Tooltip } from 'react-tippy';

import { Indicator, Resource, Leader, Button } from '@clickopolis/core';
import { UserMenu } from 'components';
import { colorKeys, colors } from 'utils';
import { EraIndicator } from 'components/EraIndicator';
import { connect } from 'react-redux';

import './Menu.scss';

export interface MenuProps {
    ac?: number;
    food?: Resource;
    production?: Resource;
    leader: Leader;
    population: number;
}

const margin = {margin: '0 .5rem', color: '#111'}

const ProgressBar = () => {
    return <div style={{
        height: '.5rem',
        borderRadius: '.25rem',
        margin: '2px',
        width: '100%',
        background: `linear-gradient(to right, skyblue 33%, #222 33%, #222)`
    }} />
}

export class MenuBase extends React.Component<MenuProps> {

    private displayQuests = (_:any) => ({})

    public render() {
        const {ac, food, leader, production, population} = this.props;

        const menus = [
            {
                name: 'Civilization',
            },
            {
                name: 'Resources',
            },
            {
                name: 'Citizens',
            },
            {
                name: 'Buildings',
            },
            {
                name: 'Economy',
            },
            {
                name: 'Culture',
            },
            {
                name: 'Advancements',
            },
            {
                name: 'Faith',
            },
            {
                name: 'Legacy',
            },
            {
                name: 'Settings',
            },
        ];

        return (
            <nav className='clickopolis-menu'>
                <UserMenu username={leader.name} userCivName={leader.defaultCivName} />

                <div className='at-a-glance'>
                    <h3 style={{
                        textTransform: 'lowercase',
                        textAlign: 'center',
                        fontWeight: 'lighter',
                        fontSize: '0.75rem',
                        margin: 0,
                    }}>At A Glance</h3>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        margin: '0.25rem',
                    }}>
                        <Indicator
                            value={food.total}
                            positiveColor={colors.get('resources')}
                            neutralColor={colors.get('resources')}
                            icon={'./images/food.svg'}
                            description='Total Food in your empire'
                            style={margin}
                        />
                        <Indicator
                            value={production.total}
                            positiveColor={colors.get('production')}
                            neutralColor={colors.get('production')}
                            icon={'./images/production.svg'}
                            description='Total Productivity of your empire'
                            style={margin}
                        />
                        <Indicator
                            value={population}
                            positiveColor={colors.get('citizens')}
                            neutralColor={colors.get('citizens')}
                            icon={'./images/citizens.svg'}
                            description='Total population'
                            style={margin}
                        />
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        margin: '0.25rem',
                    }}>
                        <EraIndicator />
                        <Indicator
                            value={`${ac} AC`}
                            description={'AC: After Click'}
                            neutralColor='#333'
                            style={ { margin: '0 .33rem' }}
                        />
                    </div>
                </div>

                <nav className='main-nav'>
                    <ul>
                        {menus.map(menu => {
                            return <li style={{
                                //background: colors.get(menu.name.toLowerCase() as colorKeys),
                                //background: '#ccc',
                                borderBottom: '1px solid #ccc',
                                cursor: 'pointer',
                            }}>
                                <img src={`./images/${menu.name}.svg`} />
                                <span>{menu.name}</span>
                            </li>
                        })}
                    </ul>

                </nav>

                {/* <Indicator
                    value={`${3} Quests`}
                    icon={'./images/quests.svg'}
                    positiveColor={colors.get('quests')}
                    neutralColor={colors.get('quests')}
                    tooltipProps={{
                        arrow: true,
                        followCursor: false,
                        interactive: true,
                    }}
                    style={{color: '#222'}}
                    description={<div>
                        Gain 20/30 Population
                        <ProgressBar />
                        Have 3/6 Advancements
                        <ProgressBar />
                        Gain 40 Population
                        <ProgressBar />
                        <Button style={{background: '#111', color: 'white'}} value={'Claim Treasure'} />
                    </div>}
                    onClick={this.displayQuests}
                /> */}
            </nav>
        );
    }
}

export const Menu: React.ComponentClass<{}> = connect(
    (state: any) => ({
        ac: state.civilization.ac,
        food: state.food,
        production: state.production,
        leader: state.leader,
        population: state.civilization.population,
    })
)(MenuBase as any)

