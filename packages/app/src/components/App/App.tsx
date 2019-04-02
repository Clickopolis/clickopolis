import * as React from 'react';
import { connect } from 'react-redux';

import { Resource, Flags, Citizen } from '@clickopolis/core';

import { Menu } from '../Menu';
import { ResourcesScreen } from 'components/ResourcesScreen';
import { CivilizationScreen } from 'components/CivilizationScreen';
import { CitizensScreen } from 'components/CitizensScreen';
import { AdvancementScreen } from 'components/AdvancementScreen';
import {
    growFood,
    consumeFood,
    createProduction,
    pauseGame,
    resumeGame,
    updateCivilization,
    gainCash,
    addNotification,
    addResource
} from 'actions';
import { StartScreen } from 'components/StartScreen';
import { EconomyScreen } from 'components/EconomyScreen';
import { SettingsScreen } from 'components/SettingsScreen';
import { Notification} from 'components/Notification';
import { Notification as Note } from 'reducers/notifications';
import { TimeStatus } from 'utils';
import { PositionProperty } from 'csstype';
import { LegacyScreen } from 'components/LegacyScreen';
import { Events } from 'components/Events';

const NUM_OF_COMPONENTS = 7;

export interface AppProps {
    growFood: growFood;
    consumeFood: consumeFood;
    createProduction: createProduction;
    updateCivilization: updateCivilization;
    food: Resource;
    production: Resource;
    flags: Flags;
    citizens: Citizen[];
    timeStatus: TimeStatus;
    pauseGame: pauseGame;
    resumeGame: resumeGame;
    gainCash: gainCash;
    addNotification: addNotification;
    notifications: Note[];
    addResource: addResource;
    ac: number;
    cashPerMin: number;
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
    public intervalIdMin: any;
    public scrollElement: HTMLElement;

    constructor(props:any) {
        super(props);
    }

    componentDidMount() {
        this.intervalId = setInterval(this.timer, 1000);
        this.intervalIdMin = setInterval(this.minuteTimer, 1000 * 60);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    minuteTimer = () => {
        if (this.props.flags.HAS_STARTED_GAME && this.props.timeStatus === TimeStatus.Playing) {
            this.props.updateCivilization('ac', this.props.ac + 1);
            this.props.gainCash(this.props.cashPerMin || 0)
            console.log('%c 1m Timer set off.', 'color: #8924a1');
        }
    }

    timer = () => {
        if (this.props.flags.HAS_STARTED_GAME && this.props.timeStatus === TimeStatus.Playing) {
            this.props.growFood(visibilityTransformer(this.props.food.perSecond));
            this.props.createProduction(visibilityTransformer(this.props.production.perSecond));
            console.log('%c 1s Timer set off.', 'color: #8942f4');
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
        const { timeStatus } = this.props;
        const timeControlStyle = {
            background: '#fff',
            color: '#111',
            cursor: 'pointer',
            borderRadius: '50%',
            position: 'fixed' as PositionProperty,
            bottom: '1em',
            left: '1em',
            opactiy: '0.95',
            filter: 'invert(100%)',
        }
        const timeControlIconStyle = {
            height: '3rem',
            width: '3rem',
        }

        console.log(this.props.notifications)
        
        return (
            <>
                <Events />
                <div style={timeControlStyle} className='time-control' onClick={this.toggleTime} >
                    {this.props.timeStatus === TimeStatus.Paused ? <img style={timeControlIconStyle} src='./images/play.svg' /> : <img style={timeControlIconStyle} src='./images/pause.svg' /> }
                </div>
                {this.props.notifications.map((note: Note, idx: number) => (
                    note && note.id && Boolean(note.content) && <Notification key={note.id} id={note.id} posId={idx} content={note.content} />
                ))}
                <div id='app' className={`clickopolis-app ${timeStatus === TimeStatus.Paused && 'paused'}`}>
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
                                <AdvancementScreen />
                                <EconomyScreen />
                                <LegacyScreen />
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
        notifications: state.notifications,
        ac: state.civilization.ac,
        cashPerMin: state.civilization.cash.perMinute,
    }),
    {
        growFood,
        consumeFood,
        createProduction,
        pauseGame,
        resumeGame,
        updateCivilization,
        addNotification,
        gainCash,
        addResource,
    }
)(AppBase);