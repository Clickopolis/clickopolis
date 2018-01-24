import { Resource } from '../../../core';
import { Action, GROW_FOOD, CONSUME_FOOD } from '../actions';

const foodState:Resource = {
    name: 'Food',
    total: 0,
    max: 2000,
    perSecond: 0,
    perClick: 0,
    description: 'Food',
};

export function food(state = foodState, action: Action<GROW_FOOD | CONSUME_FOOD>) {
    switch (action.type) {
        case 'GROW_FOOD':
            return {
                ...state,
                total: state.total + action.amount
            };
        case 'CONSUME_FOOD':
            return {
                ...state,
                total: state.total - action.amount
            };
        default:
            return state;
    }
}