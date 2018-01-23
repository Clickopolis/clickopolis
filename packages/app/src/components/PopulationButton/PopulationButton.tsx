import * as React from 'react';
import { connect } from 'react-redux';
import { growPopulation } from 'actions';

import './PopulationButton.scss';

export interface PopulationButtonProps {
    foodNeededForGrowth: number;
    population: number;
    food: any;
    growPopulation: Function;
}

export class PopulationButtonBase extends React.Component<PopulationButtonProps> {
    constructor(props:PopulationButtonProps) {
        super(props);
    }

    private handleGrowth = (e:any) => {
        this.props.growPopulation(1, 22);
    }

    private isGrowthPossible () {
        if (this.props.food.total >= this.props.foodNeededForGrowth) return 'disabled';
        return '';
    }

    public render() {
        const { foodNeededForGrowth, population } = this.props;
        return (
            <div className={`population-button ${this.isGrowthPossible()}`} onClick={this.handleGrowth}>
                <div className='population-text'>{ 'Population: ' + population }</div>
                <div className='population-to-growth'>
                    { foodNeededForGrowth }<img style={{ height: '1rem' }} src='./images/food.svg' />
                </div>
            </div>
        );
    }
}

export const PopulationButton = connect(
    (state:any) => ({ population: state.civilization.population, food: state.food, foodNeededForGrowth: state.civilization.foodNeededForGrowth }),
    { growPopulation }
)(PopulationButtonBase as any);