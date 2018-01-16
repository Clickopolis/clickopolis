import * as React from 'react';
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
        return CONSTANTS.screenData.map((i, idx) => {
            return (
                <li>
                    <a href={'#' + i} title={i}>
                        <img src={'./' + i.toLowerCase() + '.png'} />
                    </a>
                </li>
            );
        });
    }

    public render() {
        return (
            <nav className='clickopolis-menu'>
                <div>menu</div>
                <ul>
                    {
                        this.generateMenu()
                    }
                </ul>
            </nav>
        );
    }
}