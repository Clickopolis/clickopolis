import { Resource } from '../..//../core';

const foodState:Resource = {
    name: 'Food',
    total: 0,
    max: 2000,
    perSecond: 0,
    perClick: 0,
    description: 'Food',
};

export function food(state = foodState, action: any) {
    switch (action.type) {
        case 'GROW_FOOD':
            return {
                ...state,
                total: action.total
            };
        default:
            return state;
    }
}