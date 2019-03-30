import { Resource, ResourceCategory } from '@clickopolis/core';
import { Action, ADD_RESOURCE  } from '../actions';

const defaults:Map<string, Resource> = new Map([
    ['cattle', {
        name: 'cattle',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: `Don't milk these beautiful creatures too hard, now`,
        category: ResourceCategory.health,
        healthBonus: 0.5,
        visible: true,
        unlocked: true,
    }],
    ['fish', {
        name: 'fish',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: 'Teach a civ to fish, keep them healthy for a lifetime.',
        category: ResourceCategory.health,
        healthBonus: 0.5,
        visible: true,
        unlocked: true,
    }],
    ['banana', {
        name: 'banana',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: 'A fruit filled with potassium and innuendo',
        category: ResourceCategory.health,
        healthBonus: 0.5,
        visible: true,
        unlocked: false,
    }],
    ['wood', {
        name: 'wood',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: 'Woo! Wood provides wood. Woohoo!',
        category: ResourceCategory.building,
        visible: true,
        unlocked: true,
    }],
    ['horses', {
        name: 'horses',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: 'Giddy up, pony. An important resource for military leaders.',
        category: ResourceCategory.strategic,
        visible: true,
        unlocked: true,
    }],
    ['oil', {
        name: 'oil',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: 'Carry through cars, bombers jets, and plastic bags into the new era.',
        category: ResourceCategory.strategic,
        pollutionBonus: 1,
        visible: false,
        unlocked: false,
    }],
    ['spices', {
        name: 'spices',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: 'Probably not a good idea to snort.',
        category: ResourceCategory.luxury,
        visible: true,
        unlocked: true,
    }],
    ['gold', {
        name: 'gold',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: `Clickopolis's most yearned after metal`,
        category: ResourceCategory.luxury,
        visible: true,
        unlocked: true,
    }],
    ['silver', {
        name: 'silver',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: `Gold's nerdy cousin`,
        category: ResourceCategory.luxury,
        visible: true,
        unlocked: true,
    }],
    ['gems', {
        name: 'gems',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: `Not all that glitters is gold`,
        category: ResourceCategory.luxury,
        visible: true,
        unlocked: true,
    }],
    ['spaghetti', {
        name: 'spaghetti',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: `WHO TOUCHED MY SPAHGET!?`,
        category: ResourceCategory.power,
        visible: false,
        unlocked: false,
    }],
    ['chihuahuas', {
        name: 'chihuahuas',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: `Pint-sized dog with full-sized sass`,
        category: ResourceCategory.power,
        visible: false,
        unlocked: true,
    }]
]);

export function cattle(state = defaults.get('cattle'), action: Action<ADD_RESOURCE>) {
    switch (action.type) {
        case ADD_RESOURCE:
            return {
                ...state,
                total: action.name === 'cattle' ? state + action.amount : state.total,
            }
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

export function chihuahuas(state = defaults.get('chihuahuas'), action: Action<any>) {
    switch (action.type) {
        case '_':
            return state;
        default:
            return state;
    }
}