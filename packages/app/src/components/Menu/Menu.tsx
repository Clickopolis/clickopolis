import * as React from 'react';
// @ts-ignore: no @types defintion
import { Tooltip } from 'react-tippy';

// @ts-ignore: importing core
import { Indicator } from '@clickopolis/core';

import { UserMenu } from 'components';
import { CONSTANTS } from 'utils';

import './Menu.scss';
import { EraIndicator } from 'components/EraIndicator';
import { connect } from 'react-redux';

export interface MenuProps {
    ac?: number;
}

export class MenuBase extends React.Component<MenuProps> {
    private generateMenu() {
        return CONSTANTS.screenData.map((i:string) => {
            return (
                <li key={i}>
                    <a href={'#' + i} title={i}>
                        <Tooltip
                            title={i}
                            position={'top'}
                            followCursor={true}
                        >
                            <img alt={i} src={'./images/' + i.toLowerCase() + '.svg'} style={{ height: '2rem' }} />
                        </Tooltip>
                    </a>
                </li>
            );
        });
    }

    public render() {
        const {ac} = this.props

        return (
            <nav className='clickopolis-menu'>
                <div className='clickopolis-menu-text'>menu</div>
                <ul>
                    {
                        this.generateMenu()
                    }
                </ul>
                <EraIndicator />
                <Indicator
                    value={`${ac} AC`}
                    description={'AC: After Click'}
                    neutralColor='#333'
                    style={ { margin: '0 .33rem' }}
                />
                <UserMenu username='Emma' userCivName='Clickopolis' />
            </nav>
        );
    }
}

export const Menu: React.ComponentClass<{}> = connect(
    (state: any) => ({ac: state.civilization.ac})
)(MenuBase as any)

