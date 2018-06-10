import { Action } from 'actions';

export type GAIN_CASH = 'GAIN_CASH';
export const GAIN_CASH:GAIN_CASH = 'GAIN_CASH';

export type gainCash = (a:number) => Action<GAIN_CASH>;
export function gainCash (amount:number) {
    return {
        type: GAIN_CASH,
        amount
    };
}