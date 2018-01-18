import * as React from 'react';
// @ts-ignore: no @types defintion
import { Tooltip } from 'react-tippy';

import { Indicator } from '../../../../core';

import { UserMenu } from 'components';
import { CONSTANTS } from 'utils';

import './Menu.scss';

export interface MenuProps {
    menuData: any;
}

export class Menu extends React.Component {
    constructor(props:MenuProps) {
        super(props);
    }

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
        return (
            <nav className='clickopolis-menu'>
                <div className='clickopolis-menu-text'>menu</div>
                <ul>
                    {
                        this.generateMenu()
                    }
                </ul>
                <Indicator
                    value='Ancient Era'
                    description={`Huts, mammoths, early life expectancy -- can't get much better!`}
                    neutralColor='#444'
                    style={ { margin: '0 .33rem' }}
                />
                <Indicator
                    value='77 AC'
                    description={'AC: After Click'}
                    neutralColor='#333'
                    style={ { margin: '0 .33rem' }}
                />
                <UserMenu username='Emma' userCivName='Clickopolis' />
            </nav>
        );
    }
}