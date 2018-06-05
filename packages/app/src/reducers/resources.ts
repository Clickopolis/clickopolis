import { Resource } from '@clickopolis/core';
import { Action  } from '../actions';

const defaults:Map<string, Resource> = new Map([
    ['cattle', {
        name: 'cattle',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: `Don't milk these beautiful creatures too hard, now`,
        category: 'health',
        healthBonus: 0.5,
    }],
    ['fish', {
        name: 'fish',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: 'Teach a civ to fish, keep them healthy for a lifetime.',
        category: 'health',
        healthBonus: 0.5,
    }],
    ['banana', {
        name: 'banana',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: 'A fruit filled with potassium and innuendo',
        category: 'health',
        healthBonus: 0.5,
    }],
    ['wood', {
        name: 'wood',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: 'Woo! Wood provides wood. Woohoo!',
        category: 'building',
    }],
    ['horses', {
        name: 'horses',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: 'Giddy up, pony. An important resource for military leaders.',
        category: 'strategic',
    }],
    ['oil', {
        name: 'oil',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: 'Carry through cars, bombers jets, and plastic bags into the new era.',
        category: 'strategic',
        pollutionBonus: 1
    }],
    ['spices', {
        name: 'spices',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: 'Probably not a good idea to snort.',
        category: 'luxury',
    }],
    ['gold', {
        name: 'gold',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: `Clickopolis's most yearned after metal`,
        category: 'luxury',
    }],
    ['silver', {
        name: 'silver',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: `Gold's nerdy cousin`,
        category: 'luxury',
    }],
    ['gems', {
        name: 'gems',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: `Though sparkly, provides little utility`,
        category: 'luxury',
    }],
    ['spaghetti', {
        name: 'spaghetti',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: `WHO TOUCHED MY SPAHGET!?`,
        category: 'power',
    }]
]);

export function cattle(state = defaults.get('cattle'), action: Action<any>) {
    switch (action.type) {
        case '_':
            return state;
        default:
            return state;
    }
}

export function fish(state = defaults.get('fish'), action: Action<any>) {
    switch (action.type) {
        case '_':
            return state;
        default:
            return state;
    }
}

export function banana(state = defaults.get('banana'), action: Action<any>) {
    switch (action.type) {
        case '_':
            return state;
        default:
            return state;
    }
}

export function wood(state = defaults.get('wood'), action: Action<any>) {
    switch (action.type) {
        case '_':
            return state;
        default:
            return state;
    }
}

export function horses(state = defaults.get('horses'), action: Action<any>) {
    switch (action.type) {
        case '_':
            return state;
        default:
            return state;
    }
}

export function oil(state = defaults.get('oil'), action: Action<any>) {
    switch (action.type) {
        case '_':
            return state;
        default:
            return state;
    }
}

export function spices(state = defaults.get('spices'), action: Action<any>) {
    switch (action.type) {
        case '_':
            return state;
        default:
            return state;
    }
}

export function gold(state = defaults.get('gold'), action: Action<any>) {
    switch (action.type) {
        case '_':
            return state;
        default:
            return state;
    }
}

export function silver(state = defaults.get('silver'), action: Action<any>) {
    switch (action.type) {
        case '_':
            return state;
        default:
            return state;
    }
}

export function gems(state = defaults.get('gems'), action: Action<any>) {
    switch (action.type) {
        case '_':
            return state;
        default:
            return state;
    }
}

export function spaghetti(state = defaults.get('spaghetti'), action: Action<any>) {
    switch (action.type) {
        case '_':
            return state;
        default:
            return state;
    }
}