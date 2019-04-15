import { updateCivilization } from './updateCivilization';
import { Dispatch, Store } from 'redux';
import { Building } from 'components/BuildingsScreen';
import { createProduction, updateProductionPerClick, updateMaxProduction } from './production';
import { BuildingName } from 'data/buildings';
import { updateFoodPerClick, updateMaxFood } from './food';


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
        case BuildingName.hut:
            return function (dispatch: Dispatch<any>, getState: Store<any>['getState']) {
                dispatch(addBuilding(BuildingName.hut))
                dispatch(updateBuildingCost(BuildingName.hut))
                dispatch(createProduction(building.cost * -1))
                dispatch(updateCivilization(['happiness', 'fromBuildings'], getState().civilization.happiness.fromBuildings + 1))
            }
        case BuildingName.granary:
            return function (dispatch: Dispatch<any>, _: Store<any>['getState']) {
                dispatch(addBuilding(BuildingName.granary))
                dispatch(updateBuildingCost(BuildingName.granary))
                dispatch(createProduction(building.cost * -1))
                dispatch(updateFoodPerClick(1))
                dispatch(updateMaxFood(250))
            }
        case BuildingName.tent:
            return function (dispatch: Dispatch<any>, _: Store<any>['getState']) {
                dispatch(addBuilding(BuildingName.tent))
                dispatch(updateBuildingCost(BuildingName.tent))
                dispatch(createProduction(building.cost * -1))
            }
        case BuildingName.obelisk:
            return function (dispatch: Dispatch<any>, _: Store<any>['getState']) {
                dispatch(addBuilding(BuildingName.obelisk))
                dispatch(updateBuildingCost(BuildingName.obelisk))
                dispatch(createProduction(building.cost * -1))
            }
        case BuildingName.furnace:
            return function (dispatch: Dispatch<any>, _: Store<any>['getState']) {
                dispatch(addBuilding(BuildingName.furnace))
                dispatch(updateBuildingCost(BuildingName.furnace))
                dispatch(createProduction(building.cost * -1))
                dispatch(updateProductionPerClick(1))
                dispatch(updateMaxProduction(250))
            }
        case BuildingName.pyramid:
            return function (dispatch: Dispatch<any>, _: Store<any>['getState']) {
                dispatch(addBuilding(BuildingName.pyramid))
                dispatch(updateBuildingCost(BuildingName.pyramid))
                dispatch(createProduction(building.cost * -1))
            }
        default:
            return undefined;
    }
}