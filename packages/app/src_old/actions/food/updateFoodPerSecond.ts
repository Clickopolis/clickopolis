import { Action } from 'actions';

export type UPDATE_FOOD_PER_SECOND = 'UPDATE_FOOD_PER_SECOND';
export const UPDATE_FOOD_PER_SECOND: UPDATE_FOOD_PER_SECOND = 'UPDATE_FOOD_PER_SECOND';

export type updateFoodPerSecond = (a: number) => Action<UPDATE_FOOD_PER_SECOND>;
export function updateFoodPerSecond(amount: number) {
	return {
		type: UPDATE_FOOD_PER_SECOND,
		amount
	};
}

export type UPDATE_FOOD_PER_CLICK = 'UPDATE_FOOD_PER_CLICK';
export const UPDATE_FOOD_PER_CLICK: UPDATE_FOOD_PER_CLICK = 'UPDATE_FOOD_PER_CLICK';

export type updateFoodPerClick = (a: number) => Action<UPDATE_FOOD_PER_CLICK>;
export function updateFoodPerClick(amount: number) {
	return {
		type: UPDATE_FOOD_PER_CLICK,
		amount
	};
}

export type UPDATE_MAX_FOOD = 'UPDATE_MAX_FOOD';
export const UPDATE_MAX_FOOD: UPDATE_MAX_FOOD = 'UPDATE_MAX_FOOD';
export type updateMaxFood = (a: number) => Action<UPDATE_MAX_FOOD>;
export function updateMaxFood(amount: number) {
	return {
		type: UPDATE_MAX_FOOD,
		amount
	};
}
