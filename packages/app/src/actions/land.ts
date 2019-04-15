import { Action } from 'actions';

export type ADD_LAND = 'ADD_LAND';
export const ADD_LAND:ADD_LAND = 'ADD_LAND';

export type addLand = (a:number) => Action<ADD_LAND>;
export function addLand (amount:number) {
    return {
        type: ADD_LAND,
        amount
    };
}

export type SPEND_LAND = 'SPEND_LAND';
export const SPEND_LAND:SPEND_LAND = 'SPEND_LAND';

export type spendLand = (a:number) => Action<SPEND_LAND>;
export function spendLand (amount:number) {
    return {
        type: SPEND_LAND,
        amount
    };
}