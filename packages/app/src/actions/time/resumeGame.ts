import { Action } from 'actions';

export type RESUME_GAME = 'RESUME_GAME';
export const RESUME_GAME:RESUME_GAME = 'RESUME_GAME';

export type resumeGame = () => Action<RESUME_GAME>;
export function resumeGame () {
    return {
        type: RESUME_GAME,
    };
}