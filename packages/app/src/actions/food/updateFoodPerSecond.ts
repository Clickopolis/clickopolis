import { Action } from 'actions';

export type UPDATE_FOOD_PER_SECOND = 'UPDATE_FOOD_PER_SECOND';
export const UPDATE_FOOD_PER_SECOND:UPDATE_FOOD_PER_SECOND = 'UPDATE_FOOD_PER_SECOND';

export type updateFoodPerSecond = (a: number) => Action<UPDATE_FOOD_PER_SECOND>;
export function updateFoodPerSecond (amount:number) {
    return {
        type: UPDATE_FOOD_PER_SECOND,
        amount
    };
}