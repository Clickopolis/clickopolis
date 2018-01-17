import * as React from 'react';
import { connect } from 'react-redux';
import { Screen, Button, Indicator } from '../../../../core';
//@ts-ignore: no @types def
import * as classNames from 'classnames';

import { colors } from 'utils';

import './ResourcesScreen.scss';

const indicatorStyle = {
    height: '1.25rem',
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

    private growFood = e => this.setState({ foodTotal: this.state.foodTotal + 1 });

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