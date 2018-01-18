import * as React from 'react';
import { connect } from 'react-redux';
import { Screen, Button, Indicator, Resource } from '../../../../core';
//@ts-ignore: no @types def
import * as classNames from 'classnames';

import { ResourcesMatrix } from '../ResourcesMatrix';
import { growFood, createProduction } from 'actions';
import { colors } from 'utils';

import './ResourcesScreen.scss';

const indicatorStyle = {
    alignItems: 'center',
    display: 'flex',
    height: '2rem',
    justifyContent: 'center',
    margin: '.25rem',
    width: '5rem'
};

export interface ResourcesScreenProps {
    food?: Resource;
    growFood?: Function;
    production?: Resource;
    createProduction?: Function;
}

export interface ResourcesScreenState {
}

export class ResourcesScreenBase extends React.Component<ResourcesScreenProps, ResourcesScreenState> {
    constructor(props:ResourcesScreenProps) {
        super(props);
    }

    public render() {
        return (
            <Screen
                type='Resources'
                color={colors.get('resources')}
            >
                <div className='resources-main-buttons'>
                    <div className='resources-main-buttons-row'>
                        <Button
                            icon='./images/food.svg'
                            id='food-btn'
                            iconHeight='1rem'
                            value='Grow Food'
                            onClick={this.props.growFood as any}
                            className='food-button'
                            layout={null}
                        />
                        <Indicator
                            value={this.props.food.total}
                            positiveColor={colors.get('resources')}
                            neutralColor={colors.get('resources')}
                            style={indicatorStyle}
                            label='total'
                            description='Food is used for feeding your citizens, even Jim.'
                        />
                        <Indicator
                            value={0}
                            positiveColor={colors.get('resources')}
                            neutralColor={colors.get('resources')}
                            style={indicatorStyle}
                            label='per click'
                            description='Use your clicks to amass corn!'
                        />
                        <Indicator
                            value={0}
                            positiveColor={colors.get('resources')}
                            neutralColor={colors.get('resources')}
                            style={indicatorStyle}
                            label='per second'
                            description='Use your clicks to amass corn!'
                        />
                        <Indicator
                            value={0}
                            positiveColor={colors.get('resources')}
                            neutralColor={colors.get('resources')}
                            style={indicatorStyle}
                            label='max'
                            description='Make sure to reserve some for times of famine.'
                        />
                    </div>
                    <div className='resources-main-buttons-row'>
                        <Button
                            icon='./images/production.svg'
                            id='production-btn'
                            iconHeight='1rem'
                            value='Create Production'
                            onClick={this.props.createProduction as any}
                            className='prod-button'
                            layout={null}
                        />
                        <Indicator
                            value={this.props.production.total}
                            positiveColor={colors.get('production')}
                            neutralColor={colors.get('production')}
                            style={indicatorStyle}
                            label='total'
                            description='Production lets you build.'
                        />
                        <Indicator
                            value={0}
                            positiveColor={colors.get('production')}
                            neutralColor={colors.get('production')}
                            style={indicatorStyle}
                            label='per click'
                            description='Use your clicks to amass corn!'
                        />
                        <Indicator
                            value={0}
                            positiveColor={colors.get('production')}
                            neutralColor={colors.get('production')}
                            style={indicatorStyle}
                            label='per second'
                            description='Use your clicks to amass corn!'
                        />
                        <Indicator
                            value={0}
                            positiveColor={colors.get('production')}
                            neutralColor={colors.get('production')}
                            style={indicatorStyle}
                            label='max'
                            description='Use your clicks to amass corn!'
                        />
                    </div>
                </div>
                <ResourcesMatrix />
            </Screen>
        );
    }
}

export const ResourcesScreen = connect(
    (state:any) => ({ food: state.food, production: state.production }),
    (dispatch:any) => ({
        growFood: () => dispatch(growFood(1)),
        createProduction: () => dispatch(createProduction(1))
    })
)(ResourcesScreenBase as any);