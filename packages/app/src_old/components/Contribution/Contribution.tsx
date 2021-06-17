import * as React from 'react';
// import { connect } from 'react-redux';

import './Contribution.scss';

export interface Contribution {
  type: 'PS' | 'PC' | 'PM';
  /* Interval of contribution, in ms */
  interval: number;
  /* Amount of contribution */
  amount: number;
  /* Resouce provided */
  resource: string;
}

export class Contribution extends React.Component<Contribution> {
  constructor(props: Contribution) {
    super(props);
  }

  public render() {
    const { type, amount, resource } = this.props;
    return (
      <div
        className="contribution"
        style={{ fontSize: '12px', margin: '0 .25rem' }}
      >
        {amount}{' '}
        <img style={{ height: '.5rem' }} src={`./images/${resource}.svg`} />{' '}
        {type}
      </div>
    );
  }
}
