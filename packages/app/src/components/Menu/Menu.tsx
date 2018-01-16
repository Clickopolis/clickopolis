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
        return CONSTANTS.screenData.map((i:string) => {
            return (
                <li key={i}>
                    <a href={'#' + i} title={i}>
                        <img alt={i} src={'./images/' + i.toLowerCase() + '.svg'} style={{ height: '2rem' }} />
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