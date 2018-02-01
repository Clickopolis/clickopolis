import { Citizen } from '@clickopolis/core';
import { Action, ADD_CITIZEN, REMOVE_CITIZEN  } from '../actions';

const defaults = new Map<string, Citizen>([
    ['ruler', {
        name: 'ruler',
        amount: 1,
        description: `Your nation's greatest citizen: you.`
    }],
    ['farmer', {
        name: 'farmer',
        contribution: [
            {
                type: 'PS',
                interval: 1000,
                amount: 1,
                resource: 'food'
            }
        ],
        amount: 0,
        description: `The humble farmer, a backbone of your society.`
    }],
    ['miner', {
        name: 'miner',
        contribution: [
            {
                type: 'PS',
                interval: 1000,
                amount: 0.1,
                resource: 'production'
            }
        ],
        amount: 0,
        description: `Your earliest source of industry & luxury.`
    }]
]);

export function ruler(state = defaults.get('ruler'), action: any) {
    switch (action.type) {
        default:
            return state;
    }
}

export function farmer(state = defaults.get('farmer'), action: Action<ADD_CITIZEN | REMOVE_CITIZEN>) {
    const amount = parseInt(action.amount);
    switch (action.type) {
        case 'ADD_CITIZEN':
            return action.citizen === 'farmer' ? { ...state, amount: state.amount + amount } : state;
        case 'REMOVE_CITIZEN':
            return action.citizen === 'farmer' ? { ...state, amount: state.amount + (-amount) } : state;
        default:
            return state;
    }
}

export function miner(state = defaults.get('miner'), action: Action<ADD_CITIZEN | REMOVE_CITIZEN>) {
    const amount = parseInt(action.amount);
    switch (action.type) {
        case 'ADD_CITIZEN':
            return action.citizen === 'miner' ? { ...state, amount: state.amount + amount } : state;
        case 'REMOVE_CITIZEN':
            return action.citizen === 'miner' ? { ...state, amount: state.amount + (-amount) } : state;
        default:
            return state;
    }
}
