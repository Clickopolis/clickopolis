import { Resource } from '@clickopolis/core';
import { Action, GROW_FOOD, CONSUME_FOOD, UPDATE_FOOD_PER_SECOND, UPDATE_FOOD_PER_CLICK, UPDATE_MAX_FOOD} from 'actions';

const foodState:Resource = {
    name: 'Food',
    total: 0,
    max: 10000000,
    perSecond: 100000,
    perClick: 1,
    description: 'Food',
};

export function food(state = foodState, action: Action<GROW_FOOD | CONSUME_FOOD | UPDATE_FOOD_PER_SECOND | UPDATE_FOOD_PER_CLICK | UPDATE_MAX_FOOD>) {
    switch (action.type) {
        case GROW_FOOD:
            return {
                ...state,
                total: Math.max((state.total + action.amount) > state.max ? state.max : state.total + action.amount, 0)
            };
        case CONSUME_FOOD:
            return {
                ...state,
                total: state.total - action.amount
            };
        case UPDATE_FOOD_PER_SECOND:
            return {
                ...state,
                perSecond: action.amount
            };
        case UPDATE_FOOD_PER_CLICK:
            return {
                ...state,
                perClick: state.perClick + action.amount
            }
        case UPDATE_MAX_FOOD:
            return {
                ...state,
                max: state.max + action.amount,
            }
        default:
            return state;
    }
}