import * as React from 'react';
import { connect } from 'react-redux';
import {
  growPopulation,
  consumeFood,
  addCitizen,
  updateFoodPerSecond,
  turnOnFlag,
  addNotification,
  updateFoodPerClick,
} from 'actions';
import { Screen } from 'components/Screen';
import { Indicator } from 'components/Indicator';
import { Button } from 'components/Button';
import { Contribution, Citizen, Flags } from 'interfaces';
import { abbrNum } from 'utils';

import './PopulationButton.scss';
import { getContributionFor } from 'utils';

export interface PopulationButtonProps {
  foodNeededForGrowth: number;
  population: number;
  food: any;
  growPopulation: Function;
  consumeFood: Function;
  addCitizen: addCitizen;
  updateFoodPerSecond: updateFoodPerSecond;
  updateFoodPerClick: updateFoodPerClick;
  farmer: Citizen;
  turnOnFlag: turnOnFlag;
  flags: Flags;
  addNotification: addNotification;
}

export interface PopulationButtonState {
  isGrowthPossible: boolean;
}

export class PopulationButtonBase extends React.Component<
  PopulationButtonProps,
  PopulationButtonState
> {
  constructor(props: PopulationButtonProps) {
    super(props);
    this.state = {
      isGrowthPossible: false,
    };
  }

  private handleGrowth = (_?: any) => {
    const { turnOnFlag, flags, addNotification, farmer, population } =
      this.props;

    if (!flags.HAS_UNLOCKED_CITIZENS) {
      turnOnFlag('HAS_UNLOCKED_CITIZENS');
      addNotification({
        id: 'citizens',
        content: <div>You've unlocked the Citizens panel!</div>,
      });
    }

    if (!flags.HAS_UNLOCKED_ADVANCEMENTS && population > 2) {
      turnOnFlag('HAS_UNLOCKED_ADVANCEMENTS');
      addNotification({
        id: 'advancements',
        content: <div>You've unlocked the Advancements panel!</div>,
      });
    }

    if (!flags.HAS_UNLOCKED_BUILDINGS && population > 3) {
      turnOnFlag('HAS_UNLOCKED_BUILDINGS');
      addNotification({
        id: 'buildings',
        content: <div>You've unlocked the Buildings panel!</div>,
      });
    }

    const newGrowth = Math.floor(this.props.foodNeededForGrowth * 1.07);
    this.props.growPopulation(1, newGrowth);
    this.props.addCitizen(1, 'farmer');
    this.props.consumeFood(this.props.foodNeededForGrowth);

    const foodPerSecond = getContributionFor({
      consumptionFunction: () => population,
      findFunction: (c: Contribution) =>
        c.resource === 'food' && c.type === 'PS',
      citizens: [farmer],
    });

    // @TODO: refactor the fuck out of this shit
    const foodPerClick = getContributionFor({
      consumptionFunction: () => 0,
      findFunction: (c: Contribution) =>
        c.resource === 'food' && c.type === 'PC',
      citizens: [farmer],
    });

    this.props.updateFoodPerSecond(foodPerSecond);
    this.props.updateFoodPerClick(0.1);
  };

  private isGrowthPossible(foodTotal?: number, growth?: number): boolean {
    if (
      (foodTotal || this.props.food.total) -
        (growth || this.props.foodNeededForGrowth) >=
      0
    )
      return true;
    return false;
  }

  public componentWillMount() {
    this.setState({
      isGrowthPossible: this.isGrowthPossible(),
    });
  }

  public componentWillReceiveProps(nextProps: PopulationButtonProps) {
    this.setState({
      isGrowthPossible: this.isGrowthPossible(
        nextProps.food.total,
        nextProps.foodNeededForGrowth
      ),
    });
  }

  public render() {
    const { foodNeededForGrowth, population } = this.props;
    return (
      <div
        className={`population-button ${
          this.state.isGrowthPossible ? '' : 'disabled'
        }`}
        onClick={this.handleGrowth}
      >
        <div className="pop-growth-text">+1 POP</div>
        <div className="population-text">{'Population: ' + population}</div>
        <Indicator
          style={{ background: 'unset', marginLeft: '1rem' }}
          className="population-to-growth"
          value={foodNeededForGrowth}
          formatFunction={(v: number) => abbrNum(v)}
          icon={'./images/food.svg'}
          description={
            'The total amount of food needed to grow your pouplation by 1.'
          }
        />
      </div>
    );
  }
}

export const PopulationButton = connect(
  (state: any) => ({
    population: state.civilization.population,
    food: state.food,
    foodNeededForGrowth: state.civilization.foodNeededForGrowth,
    farmer: state.farmer,
    flags: state.flags,
  }),
  {
    growPopulation,
    consumeFood,
    addCitizen,
    updateFoodPerSecond,
    updateFoodPerClick,
    turnOnFlag,
    addNotification,
  }
)(PopulationButtonBase as any);
