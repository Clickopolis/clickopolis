import { Action } from 'actions';

export type ADD_MENU = 'ADD_MENU';
export const ADD_MENU:ADD_MENU = 'ADD_MENU';

export type addMenu = (menuId:number) => Action<ADD_MENU>;
export function addMenu (menuId:number) {
    return {
        type: ADD_MENU,
        menuId
    };
}

export type REMOVE_MENU = 'REMOVE_MENU';
export const REMOVE_MENU:REMOVE_MENU = 'REMOVE_MENU';

export type removeMenu = (menuId:number) => Action<REMOVE_MENU>;
export function removeMenu (menuId:number) {
    return {
        type: REMOVE_MENU,
        menuId
    };
}