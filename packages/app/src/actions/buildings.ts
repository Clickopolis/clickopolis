import { updateCivilization } from './updateCivilization';
import { Dispatch, Store } from 'redux';
import { Building } from 'components/BuildingsScreen';
import { createProduction } from './production';


export type ADD_BUILDING = 'ADD_BUILDING';
export const ADD_BUILDING: ADD_BUILDING = 'ADD_BUILDING'
export const addBuilding = (name: string, amount: number = 1) => 
    ({ type: ADD_BUILDING, name, amount })

export type UPDATE_BUILDING_COST = 'UPDATE_BUILDING_COST';
export const UPDATE_BUILDING_COST: UPDATE_BUILDING_COST = 'UPDATE_BUILDING_COST';
export const updateBuildingCost = (name: string) =>
    ({ type: UPDATE_BUILDING_COST, name })

export type UNLOCK_BUILDING = 'UNLOCK_BUILDING';
export const UNLOCK_BUILDING: UNLOCK_BUILDING = 'UNLOCK_BUILDING';
export const unlockBuilding = (name: string) =>
    ({ type: UNLOCK_BUILDING, name })

export function purchaseBuilding(building: Building) {
    switch (building.name) {
        case 'Hut':
            return function (dispatch: Dispatch<any>, getState: Store<any>['getState']) {
                dispatch(addBuilding('Hut'))
                dispatch(updateBuildingCost('Hut'))
                dispatch(createProduction(building.cost * -1))
                dispatch(updateCivilization(['happiness', 'fromBuildings'], getState().civilization.happiness.fromBuildings + 1))
            }
        default:
            return undefined;
    }
}