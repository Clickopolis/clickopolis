import * as React from 'react';
import { connect } from 'react-redux';
import { Screen, Button, Indicator } from '../../../../core';
//@ts-ignore: no @types def
import * as classNames from 'classnames';

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

}

export interface ResourcesScreenState {
    foodTotal: number;
}

export class ResourcesScreenBase extends React.Component<ResourcesScreenProps, ResourcesScreenState> {
    constructor(props:ResourcesScreenProps) {
        super(props);
        this.state = {
            foodTotal: 10
        };
    }

    private growFood = e => this.setState({ foodTotal: this.state.foodTotal - 1 });

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
                            onClick={this.growFood}
                            className='food-button'
                            layout={null}
                        />
                        <Indicator
                            value={this.state.foodTotal}
                            positiveColor={colors.get('resources')}
                            neutralColor={colors.get('resources')}
                            style={indicatorStyle}
                            label='total'
                            description='Food is used for feeding your citizens, even Jim.'
                        />
                        <Indicator
                            value={this.state.foodTotal * 4}
                            positiveColor={colors.get('resources')}
                            neutralColor={colors.get('resources')}
                            style={indicatorStyle}
                            label='per click'
                            description='Use your clicks to amass corn!'
                        />
                        <Indicator
                            value={this.state.foodTotal * 4}
                            positiveColor={colors.get('resources')}
                            neutralColor={colors.get('resources')}
                            style={indicatorStyle}
                            label='per second'
                            description='Use your clicks to amass corn!'
                        />
                        <Indicator
                            value={this.state.foodTotal * 4}
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
                            onClick={this.growFood}
                            className='prod-button'
                            layout={null}
                        />
                        <Indicator
                            value={this.state.foodTotal}
                            positiveColor={colors.get('production')}
                            neutralColor={colors.get('production')}
                            style={indicatorStyle}
                            label='total'
                            description='Production lets you build.'
                        />
                        <Indicator
                            value={this.state.foodTotal * 4}
                            positiveColor={colors.get('production')}
                            neutralColor={colors.get('production')}
                            style={indicatorStyle}
                            label='per click'
                            description='Use your clicks to amass corn!'
                        />
                        <Indicator
                            value={this.state.foodTotal * 4}
                            positiveColor={colors.get('production')}
                            neutralColor={colors.get('production')}
                            style={indicatorStyle}
                            label='per second'
                            description='Use your clicks to amass corn!'
                        />
                        <Indicator
                            value={this.state.foodTotal * 4}
                            positiveColor={colors.get('production')}
                            neutralColor={colors.get('production')}
                            style={indicatorStyle}
                            label='max'
                            description='Use your clicks to amass corn!'
                        />
                    </div>
                </div>
            </Screen>
        );
    }
}

export const ResourcesScreen = connect(
    () => ({}),
    {}
)(ResourcesScreenBase);