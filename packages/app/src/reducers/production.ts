import { Resource } from '@clickopolis/core';
import { Action, CREATE_PRODUCTION, UPDATE_PRODUCTION_PER_SECOND } from '../actions';

const productionState:Resource = {
    name: 'Production',
    total: 0,
    max: 2000,
    perSecond: 0,
    perClick: 1,
    description: 'Prod',
};

export function production(state = productionState, action: Action<CREATE_PRODUCTION | UPDATE_PRODUCTION_PER_SECOND>) {
    switch (action.type) {
        case CREATE_PRODUCTION:
            return {
                ...state,
                total: state.total >= state.max ? state.total : state.total + action.amount
            };
        case UPDATE_PRODUCTION_PER_SECOND:
            return {
                ...state,
                perSecond: action.amount
            };
        default:
            return state;
    }
}