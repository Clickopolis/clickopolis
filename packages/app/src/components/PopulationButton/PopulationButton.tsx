import * as React from 'react';
import { connect } from 'react-redux';
import { growPopulation, consumeFood, addCitizen, updateFoodPerSecond } from 'actions';
// @ts-ignore: no types
import { Tooltip } from 'react-tippy';

import { abbrNum, Citizen } from '@clickopolis/core';

import './PopulationButton.scss';

export interface PopulationButtonProps {
    foodNeededForGrowth: number;
    population: number;
    food: any;
    growPopulation: Function;
    consumeFood: Function;
    addCitizen: addCitizen;
    updateFoodPerSecond: updateFoodPerSecond;
    farmer: Citizen;
}

export interface PopulationButtonState {
    isGrowthPossible: boolean;
}

export class PopulationButtonBase extends React.Component<PopulationButtonProps, PopulationButtonState> {
    constructor(props:PopulationButtonProps) {
        super(props);
        this.state = {
            isGrowthPossible: false
        };
    }

    private handleGrowth = (e:any) => {
        const newGrowth = Math.floor(this.props.foodNeededForGrowth * 1.07);
        this.props.growPopulation(1, newGrowth);
        this.props.addCitizen(1, 'farmer');
        this.props.consumeFood(this.props.foodNeededForGrowth);
    }

    private isGrowthPossible (foodTotal?: number, growth?:number):boolean {
        if ((foodTotal || this.props.food.total) - (growth || this.props.foodNeededForGrowth) > 0) return true;
        return false;
    }

    public componentWillMount() {
        this.setState({
            isGrowthPossible: this.isGrowthPossible()
        });
    }

    public componentWillReceiveProps(nextProps:PopulationButtonProps) {
        this.setState({
            isGrowthPossible: this.isGrowthPossible(nextProps.food.total, nextProps.foodNeededForGrowth)
        });
    }

    public render() {
        const { foodNeededForGrowth, population } = this.props;
        return (
            <div className={`population-button ${this.state.isGrowthPossible ? '' : 'disabled'}`} onClick={this.handleGrowth}>
                <div className='pop-growth-text'>+1 POP</div>
                <div className='population-text'>{ 'Population: ' + population }</div>
                <Tooltip
                    title={'The total amount of food needed to grow your pouplation by 1.'}
                    position={'top'}
                    style={{ marginLeft: 'auto' }}
                >
                    <div className='population-to-growth'>
                        { abbrNum(foodNeededForGrowth.toFixed(0)) }<img style={{ height: '1rem' }} src='./images/food.svg' />
                    </div>
                </Tooltip>
            </div>
        );
    }
}

export const PopulationButton = connect(
    (state:any) => ({ population: state.civilization.population, food: state.food, foodNeededForGrowth: state.civilization.foodNeededForGrowth, farmer: state.farmer  }),
    { growPopulation, consumeFood, addCitizen, updateFoodPerSecond }
)(PopulationButtonBase as any);