import { Action, ADD_RESOURCE, UNLOCK_RESOURCE  } from '../actions';
import { resources as defaults } from 'data/resources';
import { Resource } from '@clickopolis/core';

type ResourceAction = Action<ADD_RESOURCE | UNLOCK_RESOURCE>

const handleCases = (state: Resource, action: Action<ADD_RESOURCE | UNLOCK_RESOURCE>, name: string) => {
    switch (action.type) {
        case ADD_RESOURCE:
            return {
                ...state,
                total: action.name === name ? state.total + action.amount : state.total,
            }
        case UNLOCK_RESOURCE:
            return {
                ...state,
                unlocked: action.name === name ? true : state.unlocked,
            }
        default:
            return state;
    }
}


export function cattle(state = defaults.get('cattle'), action: Action<ADD_RESOURCE>) {
    return handleCases(state, action, 'cattle')
}

export function fish(state = defaults.get('fish'), action: Action<any>) {
    return handleCases(state, action, 'fish')
}

export function banana(state = defaults.get('banana'), action: Action<any>) {
    return handleCases(state, action, 'banana')
}

export function wood(state = defaults.get('wood'), action: Action<any>) {
    return handleCases(state, action, 'wood')
}

export function stone(state = defaults.get('stone'), action: ResourceAction) {
    return handleCases(state, action, 'stone')
}

export function eagles(state = defaults.get('eagles'), action: ResourceAction) {
    return handleCases(state, action, 'eagles')
}

export function marble(state = defaults.get('marble'), action: ResourceAction) {
    return handleCases(state, action, 'marble')
}

export function mushrooms(state = defaults.get('mushrooms'), action: ResourceAction) {
    return handleCases(state, action, 'mushrooms')
}

export function crabs(state = defaults.get('crabs'), action: ResourceAction) {
    return handleCases(state, action, 'crabs')
}

export function tobacco(state = defaults.get('tobacco')) {
    return state;
}

export function uranium(state = defaults.get('uranium')) {
    return state;
}

export function sheep(state = defaults.get('sheep')) {
    return state;
}

export function aluminum(state = defaults.get('aluminum')) {
    return state;
}

export function copper(state = defaults.get('copper')) {
    return state;
}

export function maize(state = defaults.get('maize'), action: ResourceAction) {
    return handleCases(state, action, 'maize')
}

export function coral(state = defaults.get('coral')) {
    return state;
}

export function urchin(state = defaults.get('urchin')) {
    return state;
}

export function fossils(state = defaults.get('fossils')) {
    return state;
}

export function horses(state = defaults.get('horses'), action: Action<any>) {
    return handleCases(state, action, 'horses')
}

export function wine(state = defaults.get('wine')) {
    return state;
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