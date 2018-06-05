import * as React from 'react';
// import { connect } from 'react-redux';

import './Contribution.scss';

export interface Contribution {
    type: 'PS' | 'PC';
    /* Interval of contribution, in ms */
    interval: number;
    /* Amount of contribution */
    amount: number;
    /* Resouce provided */
    resource: string;
}

export class Contribution extends React.Component<Contribution> {
    constructor(props:Contribution) {
        super(props);
    }

    public render() {
        const { type, amount, resource } = this.props;
        return <span className='contribution'>
            { amount } <img style={{ height: '.75rem' }} src={`./images/${resource}.svg`} /> { type }
        </span>;
    }
}