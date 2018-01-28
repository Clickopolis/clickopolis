import { Resource } from '../../../core';
import { Action, CREATE_PRODUCTION } from '../actions';

const productionState:Resource = {
    name: 'Production',
    total: 0,
    max: 2000,
    perSecond: 0,
    perClick: 0,
    description: 'Prod',
};

export function production(state = productionState, action: Action<CREATE_PRODUCTION>) {
    switch (action.type) {
        case 'CREATE_PRODUCTION':
            return {
                ...state,
                total: state.total >= state.max ? state.total : state.total + action.amount
            };
        default:
            return state;
    }
}