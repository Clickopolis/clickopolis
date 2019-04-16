import * as React from 'react';
// @ts-ignore: no @types defintion
import { Tooltip } from 'react-tippy';

import { Indicator, Resource, Leader, Button } from '@clickopolis/core';
import { UserMenu } from 'components';
import { colors } from 'utils';
import { EraIndicator } from 'components/EraIndicator';
import { connect } from 'react-redux';

import './Menu.scss';

export interface MenuProps {
    ac?: number;
    food?: Resource;
    production?: Resource;
    leader: Leader;
}

const margin = {margin: '0 .5rem', color: '#111'}

export class MenuBase extends React.Component<MenuProps> {

    private displayQuests = (_:any) => ({})

    public render() {
        const {ac, food, leader, production} = this.props

        return (
            <nav className='clickopolis-menu'>
                <div className='clickopolis-menu-text'>menu</div>
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
                <EraIndicator />
                <Indicator
                    value={`${ac} AC`}
                    description={'AC: After Click'}
                    neutralColor='#333'
                    style={ { margin: '0 .33rem' }}
                />
                <Indicator
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
                        (1) Gain 20/30 Population
                        <br/>
                        (2) Have 3/6 Advancements
                        <br />
                        (3) Gain 40 Population
                        <Button>Claim Treasure</Button>
                    </div>}
                    onClick={this.displayQuests}
                />
                <UserMenu username={leader.name} userCivName={leader.defaultCivName} />
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
    })
)(MenuBase as any)

