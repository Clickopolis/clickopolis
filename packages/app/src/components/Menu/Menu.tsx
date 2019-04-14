import * as React from 'react';
// @ts-ignore: no @types defintion
import { Tooltip } from 'react-tippy';

// @ts-ignore: importing core
import { Indicator, Resource, Leader } from '@clickopolis/core';

import { UserMenu } from 'components';
import { colors } from 'utils';

import './Menu.scss';
import { EraIndicator } from 'components/EraIndicator';
import { connect } from 'react-redux';

export interface MenuProps {
    ac?: number;
    food?: Resource;
    production?: Resource;
    leader: Leader;
}

const margin = {margin: '0 .5rem', color: '#111'}

export class MenuBase extends React.Component<MenuProps> {

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

