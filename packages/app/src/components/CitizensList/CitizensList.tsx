import * as React from 'react';
import { connect } from 'react-redux';

import { addCitizen, removeCitizen, updateFoodPerSecond, updateProductionPerSecond } from 'actions';
// @ts-ignore: importing core
import { Citizen, Contribution, Button, abbrNum, Civilization } from '@clickopolis/core';
import { Contribution as CC } from '../Contribution';

import './CitizensList.scss';
import { colors } from 'utils';

export interface CitizensListProps {
    amount?: number;
    addCitizen?: addCitizen;
    removeCitizen?: removeCitizen;
    updateFoodPerSecond?: updateFoodPerSecond;
    updateProductionPerSecond?: updateProductionPerSecond;
    civilization?: Civilization;
    citizens?: Citizen[];
}

const ContributionComponent:any = CC;

const getContributionFor = ({ consumptionFunction, findFunction, citizens }: {
    consumptionFunction: () => number,
    findFunction: (c: Contribution) => boolean,
    citizens: Citizen[],
}): number => {
    const contributionTotal = citizens.map(citizen => {
        if (citizen.name === 'ruler') return { citizenAmount: 0, contributionAmount: 0 };
        const contrib = citizen.contribution.find(findFunction);
        return {
            citizenAmount: citizen.amount,
            contributionAmount: contrib ? contrib.amount : 0
        };
    }).reduce((prev, curr) => {
        return prev + (curr.citizenAmount * curr.contributionAmount);
    }, 0);
    const consumptionTotal = consumptionFunction();
    return contributionTotal - consumptionTotal;
};

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

    private addCitizen (amount: number, c: Citizen) {
        const fullEmployment = this.props.civilization.population - this.props.citizens.map(c => c.amount).reduce((prev, curr) => {
            return prev + curr;
        }, 0) === 0;

        if (!fullEmployment) {
            this.props.addCitizen(amount, c.name);
            this.props.updateFoodPerSecond(getContributionFor({
                consumptionFunction: () => this.props.civilization.population - 1,
                findFunction: (c: Contribution) => c.resource === 'food' && c.type === 'PS',
                citizens: this.props.citizens,
            }));
            this.props.updateProductionPerSecond(getContributionFor({
                consumptionFunction: () => 0,
                findFunction: (c: Contribution) => c.resource === 'production' && c.type === 'PS',
                citizens: this.props.citizens
            }));
        }
    }

    private renderCitizensBar() {
        const {population} = this.props.civilization;
        const {citizens} = this.props;

        return citizens.map((c: Citizen) => {
            return <div title={c.name} style={{background: this.getCitizenColor(c.name), height: '1rem', width: `${(c.amount / population) * 100}%`}} ></div>
        })
    }

    private renderCitizens() {
        return this.props.citizens.map((c:Citizen, idx: number) => {
            return (
                <div className='citizens-list-item' key={idx}>
                    <div className='citizen-amount'>{c.amount}</div>
                    { c.name !== 'ruler' ? <Button
                        className='citizen-amount-button'
                        value={`-${abbrNum(this.props.amount)}`}
                        onClick={(_:any) => this.props.removeCitizen(this.props.amount, c.name)}
                    /> : null }
                    <img className='citizen-image' src={`./images/${c.name}.svg`} />
                    { c.name !== 'ruler' ? <Button
                        className='citizen-amount-button'
                        value={`+${abbrNum(this.props.amount)}`}
                        onClick={(_:any) => this.addCitizen(this.props.amount, c)}
                    /> : null }
                    <div className='citizen-description'>{c.description}</div>
                    <div className='citizen-contribution'>
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
        return (
            <div className='citizens-list-wrapper'>
                <div className='citizens-list-bar' style={{display: 'flex', margin: '.5rem', borderRadius: '.25rem', overflow: 'hidden'}}>
                    { this.renderCitizensBar() }
                </div>
                <div className='citizens-list'>
                    { this.renderCitizens() }
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
        ],
        civilization: state.civilization
    }),
    {
        addCitizen,
        removeCitizen,
        updateFoodPerSecond,
        updateProductionPerSecond
    }
)(CitizensListBase as any);
