import * as React from 'react';
import { connect } from 'react-redux';

import { addCitizen, removeCitizen, updateFoodPerSecond, updateFoodPerClick, updateProductionPerSecond, updateProductionPerClick } from 'actions';
import { Citizen, Contribution, Button, Civilization } from '@clickopolis/core';
import { Contribution as CC } from '../Contribution';
// @ts-ignore: no types
import { Tooltip } from 'react-tippy';
import { getContributionFor, abbrNum } from 'utils'

import './CitizensList.scss';
import { colors } from 'utils';

export interface CitizensListProps {
    amount?: number;
    addCitizen?: addCitizen;
    removeCitizen?: removeCitizen;
    updateFoodPerSecond?: updateFoodPerSecond;
    updateProductionPerSecond?: updateProductionPerSecond;
    updateProductionPerClick: updateProductionPerClick;
    updateFoodPerClick: updateFoodPerClick;
    civilization?: Civilization;
    citizens?: Citizen[];
}

const ContributionComponent:any = CC;

export class CitizensListBase extends React.PureComponent<CitizensListProps> {
    constructor(props:CitizensListProps) {
        super(props);
    }

    getCitizenColor(name: string) {
        const map: Record<string, string> = {
            ruler: '#f15f95',
            farmer: colors.get('resources'),
            miner: '#f3cc3f',
            soldier: '#f33838',
        }

        return map[name]
    }

    private calculateAllContributions() {
        const {citizens} = this.props;

        const findContribs = (type: string, resource: string) => citizens.map(citizen => {
            return citizen.amount * (citizen?.contribution?.find(contrib => contrib.type === type && contrib.resource === resource)?.amount || 0)
        }).reduce((prev, curr) => prev + curr, 0);
        

        return {
            foodPerClick: findContribs('PC', 'food'),
            foodPerSecond: findContribs('PS', 'food'),
            productionPerSecond: findContribs('PS', 'production'),
            productionPerClick: findContribs('PC', 'production'),
        };
    }

    private addCitizen (amount: number, c: Citizen) {
        const {citizens} = this.props

        const fullEmployment = this.props.civilization.population - this.props.citizens.map(c => c.amount).reduce((prev, curr) => {
            return prev + curr;
        }, 0) === 0;

        const foodPerSecond = getContributionFor({
            consumptionFunction: () => this.props.civilization.population,
            findFunction: (c: Contribution) => c.resource === 'food' && c.type === 'PS',
            citizens,
            amount,
        });

        const productionPerSecond = getContributionFor({
            consumptionFunction: () => 0,
            findFunction: (c: Contribution) => c.resource === 'production' && c.type === 'PS',
            citizens,
            amount,
        });

        const foodPerClick = getContributionFor({
            consumptionFunction: () => 0,
            findFunction: (c: Contribution) => c.resource === 'food' && c.type === 'PC',
            citizens,
            amount,
        });

        const productionPerClick = getContributionFor({
            consumptionFunction: () => 0,
            findFunction: (c: Contribution) => c.resource === 'production' && c.type === 'PC',
            citizens,
            amount,
        });

        if (!fullEmployment) {
            this.props.addCitizen(amount, c.name);
            this.props.updateFoodPerSecond(foodPerSecond);
            this.props.updateFoodPerClick(foodPerClick);
            this.props.updateProductionPerSecond(productionPerSecond);
            this.props.updateProductionPerClick(productionPerClick);
        }
    }

    private removeCitizen (amount: number, c: Citizen) {
        const {citizens} = this.props

        const foodPerSecond = getContributionFor({
            consumptionFunction: () => this.props.civilization.population - 2,
            findFunction: (c: Contribution) => c.resource === 'food' && c.type === 'PS',
            citizens,
            amount,
        });

        const foodPerClick = getContributionFor({
            consumptionFunction: () => 0,
            findFunction: (c: Contribution) => c.resource === 'food' && c.type === 'PC',
            citizens,
            amount,
        });

        const productionPerSecond = getContributionFor({
            consumptionFunction: () => 0,
            findFunction: (c: Contribution) => c.resource === 'production' && c.type === 'PS',
            citizens,
            amount,
        });

        const productionPerClick = getContributionFor({
            consumptionFunction: () => 0,
            findFunction: (c: Contribution) => c.resource === 'production' && c.type === 'PC',
            citizens,
            amount,
        });

        this.props.addCitizen(amount, c.name);
        this.props.updateFoodPerSecond(foodPerSecond);
        this.props.updateFoodPerClick(foodPerClick);
        this.props.updateProductionPerSecond(productionPerSecond);
        this.props.updateProductionPerClick(productionPerClick);
    }

    private renderCitizensBar() {
        const {population} = this.props.civilization;
        const {citizens} = this.props;

        return citizens.map((c: Citizen) => {
            return (
                <div title={c.name} style={{background: this.getCitizenColor(c.name), height: '1rem', width: `${(c.amount / population) * 100}%`}} >
                    <Tooltip
                        title={`${((c.amount / population) * 100).toFixed(1)}% ${c.name}s`}>
                        <div style={{width: '100%', height: '1rem'}}></div>
                    </Tooltip>
                </div>
            )
        })
    }

    private renderCitizens() {
        const unemployed = this.props.civilization.population - this.props.citizens.map(c => c.amount).reduce((prev, curr) => {
            return prev + curr;
        }, 0)
        const fullEmployment = unemployed === 0;

        return this.props.citizens.map((c:Citizen, idx: number) => {
            return (
                <div className='citizens-list-item' key={idx}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div className='citizen-amount'>{c.amount}</div>
                        { c.name !== 'ruler' ? <Button
                            className='citizen-amount-button'
                            value={`-${abbrNum(this.props.amount)}`}
                            disabled={!c.amount || ((c.amount - this.props.amount) < 0)}
                            onClick={(_:any) => this.removeCitizen(this.props.amount * -1, c)}
                        /> : null }
                        <img className='citizen-image' src={`./images/${c.name}.svg`} />
                        { c.name !== 'ruler' ? <Button
                            className='citizen-amount-button'
                            value={`+${abbrNum(this.props.amount)}`}
                            disabled={fullEmployment || (this.props.amount > unemployed)}
                            onClick={(_:any) => this.addCitizen(this.props.amount, c)}
                        /> : null }
                        <div className='citizen-description'>{c.description}</div>
                    </div>
                    <div className='citizen-contribution' style={{display: 'flex', justifyContent: 'center' }}>
                        {
                            Array.isArray(c.contribution)
                            ? c.contribution.map((contrib:Contribution, index: number) => <ContributionComponent key={index} type={contrib.type} interval={contrib.interval} amount={contrib.amount} resource={contrib.resource}  />)
                            : null
                        }
                    </div>
                </div>
            );
        });
    }

    public render() {
        const contributions = this.calculateAllContributions();

        return (
            <div className='citizens-list-wrapper'>
                <div className='citizens-list-bar' style={{display: 'flex', margin: '.5rem', borderRadius: '.25rem', overflow: 'hidden'}}>
                    { this.renderCitizensBar() }
                </div>
                <div className='citizens-list'>
                    { this.renderCitizens() }
                </div>
                <div className='total-citizen-contributions' style={{color: 'white'}}>
                    <span>Total Citizen Contributions</span>

                    <div>{abbrNum(contributions.foodPerClick)} <img style={{height: '1rem'}} src='./images/food.svg' /> PC</div>

                    <div>{abbrNum(contributions.foodPerSecond)} <img style={{height: '1rem'}} src='./images/food.svg' /> PS</div>

                    <div>{abbrNum(contributions.productionPerSecond)} <img style={{height: '1rem'}} src='./images/production.svg' /> PS</div>

                </div>
            </div>
        );
    }
}

export const CitizensList:any = connect(
    (state:any) => ({
        citizens: [
            state.ruler,
            state.farmer,
            state.miner,
            state.soldier,
            state.merchant,
        ],
        civilization: state.civilization
    }),
    {
        addCitizen,
        removeCitizen,
        updateFoodPerSecond,
        updateFoodPerClick,
        updateProductionPerSecond,
        updateProductionPerClick,
    }
)(CitizensListBase as any);
