import { Citizen, Contribution } from '../../../core';
import { Action, ADD_CITIZEN, REMOVE_CITIZEN  } from '../actions';

const defaults = new Map<string, Citizen>([
    ['ruler', {
        name: 'ruler',
        amount: 1,
        description: `Your nation's greatest citizen: you.`
    }],
    ['farmer', {
        name: 'farmer',
        contribution: {

        },
        amount: 0,
        description: `The humble farmer, a backbone of your society.`
    }]
]);

export function ruler(state = defaults.get('ruler'), action: any) {
    switch (action.type) {
        default:
            return state;
    }
}

export function farmer(state = defaults.get('farmer'), action: Action<ADD_CITIZEN | REMOVE_CITIZEN>) {
    switch (action.type) {
        case 'ADD_CITIZEN':
            return action.citizen === 'farmer' ? { state, amount: state.amount + action.amount } : state;
        case 'REMOVE_CITIZEN':
            return action.citizen === 'farmer' ? { state, amount: state.amount + (-action.amount) } : state;
        default:
            return state;
    }
}
