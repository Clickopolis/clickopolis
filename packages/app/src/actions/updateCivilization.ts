import { Action } from './Action';

export type UPDATE_CIVILIZATION = 'UPDATE_CIVILIZATION';
export const UPDATE_CIVILIZATION:UPDATE_CIVILIZATION = 'UPDATE_CIVILIZATION';

export type updateCivilization = (key: string | string[], value: any) => Action<UPDATE_CIVILIZATION>
export function updateCivilization (key: string | string[], value: any) {
    return {
        type: UPDATE_CIVILIZATION,
        key,
        value
    };
}

export type UPDATE_GA_PROGRESS = 'UPDATE_GA_PROGRESS'
export const UPDATE_GA_PROGRESS: UPDATE_GA_PROGRESS = 'UPDATE_GA_PROGRESS'

export type updateGAProgress = (amount: number) => Action<UPDATE_GA_PROGRESS>
export function updateGAProgress (amount: number) {
    return {
        type: UPDATE_GA_PROGRESS,
        amount,
    }
}