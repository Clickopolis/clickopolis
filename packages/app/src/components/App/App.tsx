import * as React from 'react';
import { connect } from 'react-redux';

import { Resource } from '../../../../core';

import { Menu } from '../Menu';
import { ResourcesScreen } from 'components/ResourcesScreen';
import { CivilizationScreen } from 'components/CivilizationScreen';
import { CitizensScreen } from 'components/CitizensScreen';
import { growFood, consumeFood, createProduction } from 'actions';


const NUM_OF_COMPONENTS = 3;

export interface AppProps {
    growFood: growFood;
    consumeFood: consumeFood;
    createProduction: createProduction;
    food: Resource;
    production: Resource;
}

export class AppBase extends React.Component<AppProps> {
    public intervalId: any;
    public scrollElement: HTMLElement;

    constructor(props:any) {
        super(props);
    }

    componentDidMount() {
        this.intervalId = setInterval(this.timer, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    timer = () => {
        const visibilityTransformer = (f:number) => {
            if (document.hidden) {
                return f / 2;
            } else {
                return f;
            }
        };
        this.props.growFood(visibilityTransformer(this.props.food.perSecond));
        this.props.createProduction(visibilityTransformer(this.props.production.perSecond));
        console.log('%c Timer set off.', 'color: #8942f4');
    }

    public render() {
        return (
            <div id='app' className='clickopolis-app'>
                <Menu />
                <div data-scroll id='screen-container' style={{
                    alignItems: 'center',
                    display: 'flex',
                    height: 'calc(100% - 48px)',
                    width: `calc(800px * ${NUM_OF_COMPONENTS})`
                }}>
                    <ResourcesScreen />
                    <CivilizationScreen />
                    <CitizensScreen />
                </div>
            </div>
        );
    }
}

export const App = connect(
    (state:any) => ({
        food: state.food,
        production: state.production,
        citizens: [state.ruler, state.farmer, state.miner]
    }),
    {
        growFood,
        consumeFood,
        createProduction
    }
)(AppBase);