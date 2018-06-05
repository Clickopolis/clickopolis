import * as React from 'react';
import { connect } from 'react-redux';
// @ts-ignore: importing core
import { Screen, Button, Indicator, Resource } from '@clickopolis/core';
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

export type XYCoordsWithOpacity = { x: number, y: number, c: string, o: number };

export interface ResourcesScreenState {
    growFoodPlusElementCoords: XYCoordsWithOpacity[];
}

const PlusSign = ({ x, y, o, c, perClick }: XYCoordsWithOpacity & { perClick: number }) => <div className='plus-food-sign' style={{
    position: 'absolute',
    top: `${y}px`,
    left: `${x}px`,
    color: c,
    fontSize: c === 'gold' ? '3rem' : '1rem',
    opacity: o,
}}>+{c === 'gold' ? (perClick * 100) : perClick}</div>;

export class ResourcesScreenBase extends React.Component<ResourcesScreenProps, ResourcesScreenState> {
    private intervalId: any;

    constructor(props:ResourcesScreenProps) {
        super(props);
        this.state = {
            growFoodPlusElementCoords: []
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(this.timer, 1000 / 60);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    timer = () => {
        if (this.state.growFoodPlusElementCoords.length) {
            this.setState({
                growFoodPlusElementCoords: this.determinePreviousCoords()
            });
        }
    }

    determinePreviousCoords() {
        return this.state.growFoodPlusElementCoords.map(coords => {
            if (coords.y < -700) {
                return null;
            }
            return { ...coords, o: coords.o - 0.001, y: coords.y - 3 };
        }).filter(c => c != null);
    }

    growFood = (_:any) => {
        let gotRandomBonus: boolean;
        const randomBonusN = Math.floor(Math.random() * 100);

        if (randomBonusN === 77) {
            this.props.growFood(this.props.food.perClick * 100);
            alert('you won mofo');
            gotRandomBonus = true;
        } else {
            this.props.growFood(this.props.food.perClick);
            gotRandomBonus = false;
        }

        const rect = document.getElementById('food-btn').getBoundingClientRect();

        const rand1 = Math.random() * 50;
        const rand2 = Math.random() * 50;
        const x = ((rect.left + rect.right) / 2) + rand1 - rand2;
        const y = rect.top;

        const previousCoords = this.determinePreviousCoords();

        this.setState({
            growFoodPlusElementCoords: [...previousCoords, {
                x,
                y,
                c: gotRandomBonus ? 'gold' : 'white',
                o: 1,
            }]
        });

        console.log(this.state.growFoodPlusElementCoords);
    }

    public render() {
        const { food, production } = this.props;
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
                        {
                            this.state.growFoodPlusElementCoords.map((coords, key) => {
                                return <PlusSign key={key} perClick={this.props.food.perClick} {...coords} />;
                            })
                        }
                        <Indicator
                            value={food.total}
                            positiveColor={colors.get('resources')}
                            neutralColor={colors.get('resources')}
                            style={indicatorStyle}
                            label='total'
                            description='Food is used for feeding your citizens, even Jim.'
                        />
                        <Indicator
                            value={food.perClick}
                            positiveColor={colors.get('resources')}
                            neutralColor={colors.get('resources')}
                            style={indicatorStyle}
                            label='per click'
                            description='Use your clicks to amass corn!'
                        />
                        <Indicator
                            value={food.perSecond}
                            positiveColor={colors.get('resources')}
                            neutralColor={colors.get('resources')}
                            style={indicatorStyle}
                            label='per second'
                            description='Food will naturally accumulate over time!'
                        />
                        <Indicator
                            value={food.max}
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
                            onClick={() => this.props.createProduction(1)}
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
                            value={production.perClick}
                            positiveColor={colors.get('production')}
                            neutralColor={colors.get('production')}
                            style={indicatorStyle}
                            label='per click'
                            description='Use your clicks to amass corn!'
                        />
                        <Indicator
                            value={production.perSecond}
                            positiveColor={colors.get('production')}
                            neutralColor={colors.get('production')}
                            style={indicatorStyle}
                            label='per second'
                            description='Use your clicks to amass corn!'
                        />
                        <Indicator
                            value={production.max}
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
    (_:any) => ({
        growFood,
        createProduction
    })
)(ResourcesScreenBase as any);