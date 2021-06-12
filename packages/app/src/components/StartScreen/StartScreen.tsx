import * as React from 'react';
import { connect } from 'react-redux';

import { Button } from 'components/Button';
import { turnOnFlag } from 'actions';
import { StartScreenOptions } from 'components/StartScreenOptions';
import { useState } from 'react';
import { stylesheet } from 'typestyle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { colors } from 'utils';
import { color } from 'csx';

export interface StartScreenProps {
    turnOnFlag?: turnOnFlag;
}

export interface StartScreenState {
    isStartingNewGame: boolean;
    hasFilledInOptions: boolean;
}

export enum GameState {
    NotStarted = 'not started',
    Starting = 'starting',
    Started = 'started',
    Errored = 'errored',
}

const css = stylesheet({
    startScreen: {
        // @TODO: replace w something permissible
        background: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(https://dmajohnson.com/gallery/images/l_pixel-art_02_bg.png)`,
        imageRendering: 'pixelated',
        backgroundSize: 'cover',
        margin: 0,
        height: '100%',
        width: '100%',
        overflow: 'hidden',
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontFamily: 'Merriweather',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: '3rem',
        margin: 0,
        padding: '2rem',
        color: 'white',
    },
    icon: {
        borderRadius: '50%',
        height: '3rem',
        marginLeft: '1rem',
        border: '4px solid white',
        verticalAlign: 'text-top',
    },
    startButton: {
        margin: '2rem auto',
        display: 'block',
        borderRadius: '.25rem',
        backgroundColor: colors.get('resources'),
        padding: '.5rem 1rem',
        color: '#111',
        fontSize: '1.5rem',
        border: 'none',
        transition: '250ms background',
        $nest: {
            '&:hover': {
                backgroundColor: color(colors.get('resources')).lighten(0.2).toString(),
                transition: '250ms all',
            }
        }
    },
    marginRightSpacing: {
        marginRight: '4px',
    }
});

// this.props.turnOnFlag('HAS_STARTED_GAME');

export function StartScreen (props: StartScreenProps) {
    const [gameState, setGameState] = useState(GameState.NotStarted);

    const startNewGame = () => {
        setGameState(GameState.Starting);
        setTimeout(() => {
            setGameState(GameState.Started);
        }, 750);
    };
    
    // const turnOnFlag = useDispatch();
    return (
        <div className={css.startScreen}>
            <header>
                <h1 className={css.heading}>
                    <span>Clickopolis</span>
                    <img className={css.icon} src='./images/icon.png' />
                </h1>
            </header>
            {/* { this.state.isStartingNewGame ? null : <Button onClick={this.loadOptions} iconHeight='1rem' icon='./images/plus.svg' className='start-new-game-button' value='Start New Game' /> } */}
            
            { gameState !== GameState.Started ? <Button icon={gameState === GameState.Starting && <FontAwesomeIcon icon={faCircleNotch} className={css.marginRightSpacing} spin />} className={css.startButton} onClick={startNewGame}  value={gameState === GameState.NotStarted ? 'Start New Game' : 'Initializing'} /> : null }

            { gameState === GameState.Started && <StartScreenOptions /> }
        </div>
    );
}