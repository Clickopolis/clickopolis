import { Action, TURN_ON_FLAG, TURN_OFF_FLAG } from '../actions';
import { defaultFlags } from 'data/flags';


export function flags(state = defaultFlags, action: Action<TURN_ON_FLAG | TURN_OFF_FLAG>) {
    switch (action.type) {
        case TURN_ON_FLAG:
            return {
                ...state,
                [action.target]: true
            };
        case TURN_OFF_FLAG:
            return {
                ...state,
                [action.target]: false
            };
        default:
            return state;
    }
}