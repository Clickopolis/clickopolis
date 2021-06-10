import { Resource } from '@clickopolis/core';
import { Action, CREATE_PRODUCTION, UPDATE_PRODUCTION_PER_SECOND, UPDATE_PRODUCTION_PER_CLICK, UPDATE_MAX_PRODUCTION } from '../actions';

const productionState:Resource = {
    name: 'Production',
    total: 0,
    max: 1000000,
    perSecond: 10000,
    perClick: 1,
    description: 'Prod',
};

export function production(state = productionState, action: Action<CREATE_PRODUCTION | UPDATE_PRODUCTION_PER_SECOND | UPDATE_PRODUCTION_PER_CLICK | UPDATE_MAX_PRODUCTION>) {
    switch (action.type) {
        case CREATE_PRODUCTION:
            return {
                ...state,
                total: Math.max((state.total + action.amount) > state.max ? state.max : state.total + action.amount, 0)
            };
        case UPDATE_PRODUCTION_PER_SECOND:
            return {
                ...state,
                perSecond: action.amount
            };
        case UPDATE_PRODUCTION_PER_CLICK:
            return {
                ...state,
                perClick: action.amount
            }
        case UPDATE_MAX_PRODUCTION:
            return {
                ...state,
                max: state.max + action.amount,
            }
        default:
            return state;
    }
}