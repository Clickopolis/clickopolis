import * as React from 'react';

import './LeaderIcon.scss';

export interface LeaderIconProps {
    icon: string;
}

export class LeaderIcon extends React.PureComponent<LeaderIconProps> {
    constructor(props:LeaderIconProps) {
        super(props);
    }

    public render() {
        const { icon } = this.props;
        return (
            <div className={`leader-icon leader-${icon}`}>
                <img src={`./images/${icon}.svg`} />
            </div>
        );
    }
}
