import * as React from 'react';
import { connect } from 'react-redux';

import { Resource, Flags, Citizen, Civilization } from '@clickopolis/core';

import { Menu } from '../Menu';
import { ResourcesScreen } from 'components/ResourcesScreen';
import { CivilizationScreen, calculateHappiness, calculateAnger } from 'components/CivilizationScreen';
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
    addResource,
    updateGAProgress
} from 'actions';
import { StartScreen } from 'components/StartScreen';
import { EconomyScreen } from 'components/EconomyScreen';
import { SettingsScreen } from 'components/SettingsScreen';
import { Notification} from 'components/Notification';
import { BuildingsScreen } from 'components/BuildingsScreen';
import { Notification as Note } from 'reducers/notifications';
import { TimeStatus, getResearchPerMinute } from 'utils';
import { PositionProperty } from 'csstype';
import { LegacyScreen } from 'components/LegacyScreen';
import { Events } from 'components/Events';

export interface AppProps {
    growFood: growFood;
    consumeFood: consumeFood;
    createProduction: createProduction;
    updateCivilization: updateCivilization;
    civilization: Civilization;
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
    miners: Citizen;
    updateGAProgress: updateGAProgress;
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
        const {updateCivilization, civilization, gainCash, flags, timeStatus} = this.props;

        if (flags.HAS_STARTED_GAME && timeStatus === TimeStatus.Playing) {
            gainCash(this.props.cashPerMin || 0)
            updateCivilization(['ac'], this.props.ac + 1);
            updateCivilization(['research', 'total'], civilization.research.total + getResearchPerMinute(civilization))
            console.log('%c 1m Timer set off.', 'color: #8924a1');
        }
    }

    timer = () => {
        const {flags, createProduction, growFood, food, production, timeStatus, civilization} = this.props;
        // const minerContrib = miners.contribution.find(c => c.type === 'PS')
        // const minerProd = minerContrib ? minerContrib.amount * miners.amount : 0;

        console.log( calculateHappiness(civilization) - calculateAnger(civilization) )

        if (flags.HAS_STARTED_GAME && timeStatus === TimeStatus.Playing) {
            updateGAProgress(civilization.goldenAge.progress + (calculateHappiness(civilization) - calculateAnger(civilization)))
            growFood(visibilityTransformer(food.perSecond));
            createProduction(visibilityTransformer(production.perSecond));
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
        const {
            HAS_STARTED_GAME,
            HAS_UNLOCKED_CIVILIZATION,
            HAS_UNLOCKED_ADVANCEMENTS,
            HAS_UNLOCKED_BUILDINGS,
            HAS_UNLOCKED_CITIZENS,
            HAS_UNLOCKED_ECONOMY,
            HAS_UNLOCKED_LEGACY,
            HAS_UNLOCKED_WONDERS,
            HAS_UNLOCKED_CULTURE,
            HAS_UNLOCKED_FAITH,
            HAS_UNLOCKED_MILITARY,
        } = this.props.flags;
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

        const countScreens = [
            true, // one screen is always there
            HAS_UNLOCKED_CIVILIZATION,
            HAS_UNLOCKED_CIVILIZATION,
            HAS_UNLOCKED_ADVANCEMENTS,
            HAS_UNLOCKED_BUILDINGS,
            HAS_UNLOCKED_CITIZENS,
            HAS_UNLOCKED_ECONOMY,
            HAS_UNLOCKED_LEGACY,
            HAS_UNLOCKED_WONDERS,
            HAS_UNLOCKED_CULTURE,
            HAS_UNLOCKED_FAITH,
            HAS_UNLOCKED_MILITARY,
        ].filter(s => s).length
        
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
                        justifyContent: 'center',
                        // justifyContent: HAS_STARTED_GAME ? 'initial' : 'center',
                        height: 'calc(100%)',
                        width: HAS_STARTED_GAME ? `calc(700px * ${countScreens})` : '100%',
                    }}>
                        {
                            HAS_STARTED_GAME ?
                            <>
                                <ResourcesScreen />
                                {HAS_UNLOCKED_CIVILIZATION && <CivilizationScreen />}     
                                {HAS_UNLOCKED_CITIZENS && <CitizensScreen />}
                                {HAS_UNLOCKED_BUILDINGS && <BuildingsScreen />}
                                {HAS_UNLOCKED_ADVANCEMENTS && <AdvancementScreen />}
                                {HAS_UNLOCKED_ECONOMY && <EconomyScreen />}
                                {HAS_UNLOCKED_LEGACY && <LegacyScreen />}
                                {HAS_UNLOCKED_CIVILIZATION && <SettingsScreen />}
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
        civilization: state.civilization,
        ac: state.civilization.ac,
        cashPerMin: state.civilization.cash.perMinute,
        miner: state.miner,
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
        updateGAProgress,
    }
)(AppBase);