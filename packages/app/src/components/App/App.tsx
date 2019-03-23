import * as React from 'react';
import { connect } from 'react-redux';

// @ts-ignore: importing core
import { Resource, Flags, Citizen } from '@clickopolis/core';

import { Menu } from '../Menu';
import { ResourcesScreen } from 'components/ResourcesScreen';
import { CivilizationScreen } from 'components/CivilizationScreen';
import { CitizensScreen } from 'components/CitizensScreen';
import { growFood, consumeFood, createProduction, pauseGame, resumeGame } from 'actions';
import { StartScreen } from 'components/StartScreen';
import { EconomyScreen } from 'components/EconomyScreen';
import { SettingsScreen } from 'components/SettingsScreen';
import { TimeStatus } from 'utils';

const NUM_OF_COMPONENTS = 5;

export interface AppProps {
    growFood: growFood;
    consumeFood: consumeFood;
    createProduction: createProduction;
    food: Resource;
    production: Resource;
    flags: Flags;
    citizens: Citizen[];
    timeStatus: TimeStatus;
    pauseGame: pauseGame;
    resumeGame: resumeGame;
}

const visibilityTransformer = (f:number) => {
    if (document.hidden) {
        return f / 2;
    } else {
        return f;
    }
};

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
        if (this.props.flags.HAS_STARTED_GAME && this.props.timeStatus === TimeStatus.Playing) {
            this.props.growFood(visibilityTransformer(this.props.food.perSecond));
            this.props.createProduction(visibilityTransformer(this.props.production.perSecond));
            console.log('%c Timer set off.', 'color: #8942f4');
        }
    }

    private toggleTime = () => {
        if (this.props.timeStatus === TimeStatus.Paused) {
            this.props.resumeGame();
        } else {
            this.props.pauseGame();
        }
    }

    public render() {
        const { HAS_STARTED_GAME } = this.props.flags;
        const style = { pointerEvents: 'none' as React.CSSProperties['pointerEvents'] }
        const timeControlStyle = {
            
        }
        
        return (
            <>
                <div style={timeControlStyle} className='time-control' onClick={this.toggleTime} >{this.props.timeStatus === TimeStatus.Paused ? 'Play' : 'Pause'}</div>
                <div id='app' className='clickopolis-app' style={this.props.timeStatus === TimeStatus.Paused && style}>
                    { HAS_STARTED_GAME ? <Menu /> : null }
                    <div data-scroll id='screen-container' style={{
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: HAS_STARTED_GAME ? 'initial' : 'center',
                        height: 'calc(100%)',
                        width: HAS_STARTED_GAME ? `calc(800px * ${NUM_OF_COMPONENTS})` : '100%'
                    }}>
                        {
                            HAS_STARTED_GAME ?
                            < >
                                <ResourcesScreen />
                                <CivilizationScreen />
                                <CitizensScreen />
                                <EconomyScreen />
                                <SettingsScreen />
                            </>
                            :
                            <StartScreen />
                        }
                    </div>
                </div>
            </>
        );
    }
}

export const App = connect(
    (state:any) => ({
        food: state.food,
        production: state.production,
        citizens: [state.ruler, state.farmer, state.miner],
        flags: state.flags,
        timeStatus: state.timeStatus,
    }),
    {
        growFood,
        consumeFood,
        createProduction,
        pauseGame,
        resumeGame,
    }
)(AppBase);