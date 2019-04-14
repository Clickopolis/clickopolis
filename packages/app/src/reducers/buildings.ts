import {buildings as initialState} from 'data/buildings';
import { Action, ADD_BUILDING, UPDATE_BUILDING_COST, UNLOCK_BUILDING } from 'actions';

export function buildings(state = initialState, action: Action<ADD_BUILDING | UPDATE_BUILDING_COST | UNLOCK_BUILDING>) {
    switch (action.type) {
        case ADD_BUILDING:
            {
                const building = state.find(b => b.name === action.name);
                const indexOf = state.indexOf(building)
                if (building) {
                    const buildingUpdated = {...building, total: building.total + action.amount }
                    const newState = state;
                    newState[indexOf] = buildingUpdated
                    return newState
                } else {
                    return state;
                }
            }
        case UPDATE_BUILDING_COST:
            {
                const building = state.find(b => b.name === action.name);
                const indexOf = state.indexOf(building)
                const newCost = Math.floor(Math.pow(building.cost, 1.07))
                if (building) {
                    const buildingUpdated = {...building, cost: newCost }
                    const newState = state;
                    newState[indexOf] = buildingUpdated
                    return newState
                } else {
                    return state;
                }
            }
        case UNLOCK_BUILDING:
            {
                const building = state.find(b => b.name === action.name);
                const indexOf = state.indexOf(building)
                if (building) {
                    const buildingUpdated = {...building, unlocked: true }
                    const newState = state;
                    newState[indexOf] = buildingUpdated
                    return newState
                } else {
                    return state;
                }
            }
        default:
            return state;
    }
}