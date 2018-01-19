import * as React from 'react';
import { connect } from 'react-redux';
import { growPopulation } from 'actions';

import './PopulationButton.scss';

export interface PopulationButtonProps {
    population: number;
    growPopulation: Function;
}

export class PopulationButtonBase extends React.Component<PopulationButtonProps> {
    constructor(props:PopulationButtonProps) {
        super(props);
    }

    public render() {
        const { population, growPopulation } = this.props;
        return (
            <div className='population-button' onClick={e => growPopulation(1)}>
                <div className='population-text'>{ 'Population: ' + population }</div>
                <div className='population-to-growth'>
                    { 44 }<img style={{ height: '1rem' }} src='./images/food.svg' />
                </div>
            </div>
        );
    }
}

export const PopulationButton = connect(
    (state:any) => ({ population: state.civilization.population }),
    { growPopulation }
)(PopulationButtonBase as any);