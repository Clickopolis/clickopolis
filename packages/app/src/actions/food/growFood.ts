import { Action } from 'actions';

export type GROW_FOOD = 'GROW_FOOD';
export const GROW_FOOD: GROW_FOOD = 'GROW_FOOD';

export type growFood = (a: number) => Action<GROW_FOOD>;
export function growFood(amount: number) {
  return {
    type: GROW_FOOD,
    amount,
  };
}
