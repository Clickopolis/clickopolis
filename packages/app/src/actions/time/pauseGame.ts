import { Action } from 'actions';

export type PAUSE_GAME = 'PAUSE_GAME';
export const PAUSE_GAME:PAUSE_GAME = 'PAUSE_GAME';

export type pauseGame = () => Action<PAUSE_GAME>;
export function pauseGame () {
    return {
        type: PAUSE_GAME,
    };
}