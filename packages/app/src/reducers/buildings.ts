import {buildings as initialState} from 'data/buildings';
import { Action, ADD_BUILDING, UPDATE_BUILDING_COST, UNLOCK_BUILDING } from 'actions';

export function buildings(state = initialState, action: Action<ADD_BUILDING | UPDATE_BUILDING_COST | UNLOCK_BUILDING>) {
    switch (action.type) {
        case ADD_BUILDING:
            {
                const building = state.find(b => b.name === action.name);
                if (building) {
                    const buildingUpdated = {...building, total: building.total + action.amount }
                    return state.map((b) => {
                        if (b.name === action.name) {
                            return buildingUpdated;
                        } else {
                            return b;
                        }
                    })
                } else {
                    return state;
                }
            }
        case UPDATE_BUILDING_COST:
            {
                const building = state.find(b => b.name === action.name);
                const newCost = Math.ceil(Math.pow(building.cost, 1.01))
                if (building) {
                    const buildingUpdated = {...building, cost: newCost }
                    return state.map((b) => {
                        if (b.name === action.name) {
                            return buildingUpdated;
                        } else {
                            return b;
                        }
                    })
                } else {
                    return state;
                }
            }
        case UNLOCK_BUILDING:
            {
                const building = state.find(b => b.name === action.name);
                if (building) {
                    const buildingUpdated = {...building, unlocked: true }
                    return state.map((b) => {
                        if (b.name === action.name) {
                            return buildingUpdated;
                        } else {
                            return b;
                        }
                    })
                } else {
                    return state;
                }
            }
        default:
            return state;
    }
}