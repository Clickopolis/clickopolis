import { Action } from 'actions';

export type UPDATE_PRODUCTION_PER_SECOND = 'UPDATE_PRODUCTION_PER_SECOND';
export const UPDATE_PRODUCTION_PER_SECOND:UPDATE_PRODUCTION_PER_SECOND = 'UPDATE_PRODUCTION_PER_SECOND';

export type updateProductionPerSecond = (a: number) => Action<UPDATE_PRODUCTION_PER_SECOND>;
export function updateProductionPerSecond (amount:number) {
    return {
        type: UPDATE_PRODUCTION_PER_SECOND,
        amount
    };
}

export type UPDATE_PRODUCTION_PER_CLICK = 'UPDATE_PRODUCTION_PER_CLICK';
export const UPDATE_PRODUCTION_PER_CLICK:UPDATE_PRODUCTION_PER_CLICK = 'UPDATE_PRODUCTION_PER_CLICK';

export type updateProductionPerClick = (a: number) => Action<UPDATE_PRODUCTION_PER_CLICK>;
export function updateProductionPerClick (amount:number) {
    return {
        type: UPDATE_PRODUCTION_PER_CLICK,
        amount
    };
}