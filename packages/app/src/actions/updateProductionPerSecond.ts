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