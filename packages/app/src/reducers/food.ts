import { Resource } from '@clickopolis/core';
import { Action, GROW_FOOD, CONSUME_FOOD, UPDATE_FOOD_PER_SECOND } from '../actions';

const foodState:Resource = {
    name: 'Food',
    total: 0,
    max: 2000,
    perSecond: 0,
    perClick: 1,
    description: 'Food',
};

export function food(state = foodState, action: Action<GROW_FOOD | CONSUME_FOOD | UPDATE_FOOD_PER_SECOND>) {
    switch (action.type) {
        case 'GROW_FOOD':
            return {
                ...state,
                total: (state.total + action.amount) > state.max ? state.max : state.total + action.amount
            };
        case 'CONSUME_FOOD':
            return {
                ...state,
                total: state.total - action.amount
            };
        case 'UPDATE_FOOD_PER_SECOND':
            return {
                ...state,
                perSecond: action.amount
            };
        default:
            return state;
    }
}