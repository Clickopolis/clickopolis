import { Action } from 'actions';

export type DELETE_DATA = 'DELETE_DATA';
export const DELETE_DATA:DELETE_DATA = 'DELETE_DATA';

export type deleteData = () => Action<DELETE_DATA>;
export const deleteData = () => ({ type: DELETE_DATA });