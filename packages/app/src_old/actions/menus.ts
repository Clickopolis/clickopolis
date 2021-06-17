import { Action } from 'actions';

export type ADD_MENU = 'ADD_MENU';
export const ADD_MENU: ADD_MENU = 'ADD_MENU';

export type addMenu = (menuId: number) => Action<ADD_MENU>;
export function addMenu(menuId: number) {
  return {
    type: ADD_MENU,
    menuId,
  };
}

export type REMOVE_MENU = 'REMOVE_MENU';
export const REMOVE_MENU: REMOVE_MENU = 'REMOVE_MENU';

export type removeMenu = (menuId: number) => Action<REMOVE_MENU>;
export function removeMenu(menuId: number) {
  return {
    type: REMOVE_MENU,
    menuId,
  };
}

export type SHOW_MENU = 'SHOW_MENU';
export const SHOW_MENU: SHOW_MENU = 'SHOW_MENU';

export type showMenu = (menuName: string) => Action<SHOW_MENU>;
export function showMenu(menuName: string) {
  return {
    type: SHOW_MENU,
    menuName,
  };
}
