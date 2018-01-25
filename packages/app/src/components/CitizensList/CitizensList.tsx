import * as React from 'react';
import { connect } from 'react-redux';

import { addCitizen, removeCitizen } from 'actions';
import { Citizen, Contribution, Button, abbrNum } from '../../../../core';
import { Contribution as ContributionComponent } from '../Contribution';

import './CitizensList.scss';

export interface CitizensListProps {
    addCitizen?: Function;
    removeCitizen?: Function;
    [citizen: string]: Citizen;
    amount: number;
}

export class CitizensListBase extends React.Component<CitizensListProps> {
    constructor(props:CitizensListProps) {
        super(props);
    }

    private renderCitizens() {
        return this.props.citizens.map((c:Citizen, idx: number) => {
            return (
                <div className='citizens-list-item' key={idx}>
                    <div className='citizen-amount'>{c.amount}</div>
                    { c.name !== 'ruler' ? <Button
                        className='citizen-amount-button'
                        value={`-${abbrNum(this.props.amount)}`}
                        onClick={e => this.props.removeCitizen(this.props.amount, c.name)}
                    /> : null }
                    <img className='citizen-image' src={`./images/${c.name}.svg`} />
                    { c.name !== 'ruler' ? <Button
                        className='citizen-amount-button'
                        value={`+${abbrNum(this.props.amount)}`}
                        onClick={e => this.props.addCitizen(this.props.amount, c.name)}
                    /> : null }
                    <div className='citizen-description'>{c.description}</div>
                    <div className='citizen-contribution'>
                        {
                            Array.isArray(c.contribution)
                            ? c.contribution.map((contrib:Contribution, index: number) => <ContributionComponent key={index} {...contrib} />)
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
                <div className='citizens-list-bar'></div>
                <div className='citizens-list'>
                    { this.renderCitizens() }
                </div>
            </div>
        );
    }
}

export const CitizensList = connect(
    (state:any) => ({
        citizens: [
            state.ruler,
            state.farmer,
            state.miner,
        ]
    }),
    {
        addCitizen,
        removeCitizen
    }
)(CitizensListBase as any);
