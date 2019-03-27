import { Action } from './Action';

export type UPDATE_CIVILIZATION = 'UPDATE_CIVILIZATION';
export const UPDATE_CIVILIZATION:UPDATE_CIVILIZATION = 'UPDATE_CIVILIZATION';

export type updateCivilization = (key: string, value: any) => Action<UPDATE_CIVILIZATION>
export function updateCivilization (key: string, value: any) {
    return {
        type: UPDATE_CIVILIZATION,
        key,
        value
    };
}