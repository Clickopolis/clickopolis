import { Action } from 'actions';

export type CONSUME_FOOD = 'CONSUME_FOOD';
export const CONSUME_FOOD: CONSUME_FOOD = 'CONSUME_FOOD';

export type consumeFood = (a: number) => Action<CONSUME_FOOD>;
export function consumeFood(amount: number) {
	return {
		type: CONSUME_FOOD,
		amount
	};
}
