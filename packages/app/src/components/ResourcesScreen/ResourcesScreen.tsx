import * as React from 'react';
import { connect } from 'react-redux';
// @ts-ignore: importing core
import { Screen, Button, Indicator, Resource, Flags, abbrNum } from '@clickopolis/core';
//@ts-ignore: no @types def
import * as classNames from 'classnames';

import { ResourcesMatrix } from '../ResourcesMatrix';
import { growFood, createProduction, turnOnFlag, addNotification } from 'actions';
import { colors } from 'utils';

import './ResourcesScreen.scss';
import { BiomeIcon } from 'components/BiomeIcon';

const indicatorStyle = {
    alignItems: 'center',
    display: 'flex',
    fontSize: '90%',
    height: '2rem',
    justifyContent: 'center',
    margin: '.25rem',
    width: '5rem'
};

const biomeStyle = {
    ...indicatorStyle,
    background: colors.get('biomes'),
    height: '3rem',
}

export interface ResourcesScreenProps {
    food?: Resource;
    growFood?: growFood;
    production?: Resource;
    createProduction?: createProduction;
    flags?: Flags;
    turnOnFlag: turnOnFlag;
    addNotification: addNotification;
}

export type XYCoordsWithOpacity = { x: number, y: number, c: string, o: number };

export interface ResourcesScreenState {
    growFoodPlusElementCoords: XYCoordsWithOpacity[];
    growProdPlusElementCoords: XYCoordsWithOpacity[];
    [x: string]: XYCoordsWithOpacity[];
}

const PlusSign = ({ x, y, o, c, perClick }: XYCoordsWithOpacity & { perClick: number, resourceType: string }) => <div className='plus-sign' style={{
    position: 'absolute',
    top: `${y}px`,
    left: `${x}px`,
    display: 'flex',
    alignItems: 'center',
    transition: '100ms all',
    color: c,
    textAlign: 'center',
    opacity: o,
}}>+{c === 'gold' ? (perClick * 100).toFixed(0) : perClick.toFixed(0)}</div>;

export class ResourcesScreenBase extends React.Component<ResourcesScreenProps, ResourcesScreenState> {
    private intervalId: any;

    constructor(props:ResourcesScreenProps) {
        super(props);
        this.state = {
            growFoodPlusElementCoords: [],
            growProdPlusElementCoords: [],
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(this.timer, 1000 / 10);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    timer = () => {
        if (this.state.growFoodPlusElementCoords.length) {
            this.setState({
                growFoodPlusElementCoords: this.determinePreviousCoords(true, 'growFoodPlusElementCoords'),
            });
        }
        if (this.state.growProdPlusElementCoords.length) {
            this.setState({
                growProdPlusElementCoords: this.determinePreviousCoords(true, 'growProdPlusElementCoords')
            });
        }
    }

    determinePreviousCoords(timer: boolean, property: 'growFoodPlusElementCoords' | 'growProdPlusElementCoords') {
        return this.state[property].map(coords => {
            if (coords.o <= 0) {
                return null;
            }
            if (timer) {
                return { ...coords, x: coords.x, o: coords.o - 0.05, y: coords.y - 5 };
            } else {
                return { ...coords, x: coords.x };
            }
        }).filter(c => c != null);
    }

    growFood = (_:any) => {
        const {addNotification} = this.props
        let gotRandomBonus: boolean;
        const randomBonusN = Math.floor(Math.random() * 1000);

        if (randomBonusN === 777) {
            this.props.growFood(this.props.food.perClick * 100);
            console.log('win of: ', this.props.food.perClick * 100);
            gotRandomBonus = true;
        } else {
            this.props.growFood(this.props.food.perClick);
            gotRandomBonus = false;
        }

        if (this.props.food.total > 10 && !this.props.flags.HAS_UNLOCKED_CIVILIZATION) {
            this.props.turnOnFlag('HAS_UNLOCKED_CIVILIZATION')
            addNotification({
                content: <div>You've unlocked the Civilization panel!</div>,
                id: 'unlock-civ',
            })
        }

        this.addPlusElement({ resourceType: 'food', gotRandomBonus });
    }

    createProduction = (_:any) => {
        let gotRandomBonus: boolean;
        const randomBonusN = Math.floor(Math.random() * 100);

        if (randomBonusN === 77) {
            this.props.createProduction(this.props.production.perClick * 100);
            console.log('win of: ', this.props.production.perClick * 100);
            gotRandomBonus = true;
        } else {
            this.props.createProduction(this.props.production.perClick);
            gotRandomBonus = false;
        }

        this.addPlusElement({ resourceType: 'production', gotRandomBonus });
    }

    addPlusElement({ resourceType, gotRandomBonus }: { resourceType: string, gotRandomBonus: boolean }) {
        const element = resourceType === 'food' ? 'food-btn' : 'production-btn';
        const rect = document.getElementById(element).getBoundingClientRect();

        const baseX = ((rect.left + rect.right) / 2);
        const x = baseX - Math.floor(Math.random() * 50) + Math.floor(Math.random() * 50)
        const y = rect.top - 24;

        const coordString = resourceType === 'food' ? 'growFoodPlusElementCoords' : 'growProdPlusElementCoords';

        const previousCoords = this.determinePreviousCoords(false, coordString);

        this.setState({
            [coordString]: [...previousCoords, {
                x,
                y,
                c: gotRandomBonus ? 'gold' : 'white',
                o: 1,
            }]
        });
    }

    public render() {
        const { food, production } = this.props;
        return (
            <Screen
                type='Resources'
                color={colors.get('resources')}
                style={{overflowY: 'auto'}}
            >
                <div className='resources-main-buttons'>
                    <div className='resources-main-buttons-row'>
                        <Button
                            icon='./images/food.svg'
                            id='food-btn'
                            iconHeight='1.5rem'
                            value='Grow Food'
                            onClick={this.growFood}
                            className='food-button'
                            layout={null}
                        />
                        {
                            this.state.growFoodPlusElementCoords.map((coords, key) => {
                                return <PlusSign key={key} resourceType={'food'} perClick={this.props.food.perClick} {...coords} />;
                            })
                        }
                    </div>
                    <div className='resources-main-buttons-row'>
                        <Indicator
                            value={food.total}
                            positiveColor={colors.get('resources')}
                            neutralColor={colors.get('resources')}
                            formatFunction={v => abbrNum(v, 1)}
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
                            formatFunction={(v:number) => v.toFixed(1)}
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
                            iconHeight='1.5rem'
                            value='Create Production'
                            onClick={this.createProduction}
                            className='prod-button'
                            layout={null}
                        />
                        {
                            this.state.growProdPlusElementCoords.map((coords, key) => {
                                return <PlusSign key={key} resourceType={'production'} perClick={this.props.production.perClick} {...coords} />;
                            })
                        }
                    </div>
                    <div className='resources-main-buttons-row'>
                        <Indicator
                            value={this.props.production.total}
                            positiveColor={colors.get('production')}
                            neutralColor={colors.get('production')}
                            formatFunction={v => abbrNum(v, 1)}
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
                            formatFunction={(v:number) => v.toFixed(1)}
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
                <div className='resources-main-buttons-row biomes-row' style={{ display: 'flex', alignItems: 'center', }}>
                    <Indicator
                        value={'Biomes'}
                        style={biomeStyle}
                        description='The types of ecosystems your civlization has access to'
                    />
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}>
                        {
                            ['desert', 'mountains', 'plains'].map(
                                biome => <BiomeIcon key={biome} biome={biome} />
                            )
                        }
                    </div>
                </div>
                <ResourcesMatrix />
            </Screen>
        );
    }
}

export const ResourcesScreen = connect(
    (state:any) => ({
        food: state.food,
        production: state.production,
        flags: state.flags,
    }),
    {
        growFood,
        createProduction,
        turnOnFlag,
        addNotification,
    }
)(ResourcesScreenBase as any);