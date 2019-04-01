import { Action, ADD_RESOURCE  } from '../actions';
import { resources as defaults } from 'data/resources';

export function cattle(state = defaults.get('cattle'), action: Action<ADD_RESOURCE>) {
    switch (action.type) {
        case ADD_RESOURCE:
            return {
                ...state,
                total: action.name === 'cattle' ? state.total + action.amount : state.total,
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

export function stone(state = defaults.get('stone')) {
    return state;
}

export function marble(state = defaults.get('marble')) {
    return state;
}

export function mushrooms(state = defaults.get('mushrooms')) {
    return state;
}

export function crabs(state = defaults.get('crabs')) {
    return state;
}

export function tobacco(state = defaults.get('tobacco')) {
    return state;
}



export function horses(state = defaults.get('horses'), action: Action<any>) {
    switch (action.type) {
        case '_':
            return state;
        default:
            return state;
    }
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