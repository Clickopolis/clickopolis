import { Action, MODIFY_LEADER, SELECT_LEADER } from 'actions';
import { Leader } from '@clickopolis/core';

const leaders:Map<string, Leader> = new Map([
    ['Abraham Lincoln', {
        name: 'Abraham Lincoln',
        defaultName: 'Abraham Lincoln',
        defaultCivName: 'United States of America',
        traits: []
    }]
]);

export function leader(state:Map<string, Leader> | null = null, action: Action<MODIFY_LEADER | SELECT_LEADER>) {
    switch (action.type) {
        case SELECT_LEADER:
            return leaders.get(action.leader);
        case MODIFY_LEADER:
            return { ...state, ...action.modifications };
        default:
            return state;
    }
}