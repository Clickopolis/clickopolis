import { Citizen, Contribution } from '../../../core';
import { Action, ADD_CITIZEN, REMOVE_CITIZEN  } from '../actions';

const defaults = new Map<string, Citizen>([
    ['ruler', {}],
    ['farmer', {

    }]
]);

export function farmer(state = defaults.get('farmer'), action: Action<ADD_CITIZEN | REMOVE_CITIZEN>) {
    switch (action.type) {
        case 'ADD_CITIZEN':
            return action.citizen === 'farmer' ? state : { state, ...state.amount + action.amount };
        default:
            return state;
    }
}