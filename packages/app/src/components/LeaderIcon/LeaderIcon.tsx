import * as React from 'react';

import './LeaderIcon.scss';

export interface LeaderIconProps {
    height: string;
    icon: string;
    style: object;
    width: string;
}

export class LeaderIcon extends React.PureComponent<LeaderIconProps> {
    constructor(props:LeaderIconProps) {
        super(props);
    }

    public render() {
        const { icon } = this.props;
        return (
            <div style={{ ...this.props.style, height: this.props.height, width: this.props.width, borderRadius: '50%', }} className={`leader-icon leader-${icon}`}>
                <img src={`./images/${icon}.png`} />
            </div>
        );
    }
}
