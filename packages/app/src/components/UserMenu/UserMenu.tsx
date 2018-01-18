import * as React from 'react';

import './UserMenu.scss';

export interface UserMenuProps {
    username: string;
    userCivName: string;
}

export class UserMenu extends React.Component<UserMenuProps> {
    constructor(props:UserMenuProps) {
        super(props);
    }

    public render() {
        const { username, userCivName } = this.props;

        return (
            <div className='user-menu'>
                <div className='user-info'>
                    <div className='user-info-name'>{ username }</div>
                    <div className='user-info-civ'>{ userCivName }</div>
                </div>
                <div className='user-profile'>
                    <img src='./images/avatar.png' />
                </div>
            </div>
        );
    }
}