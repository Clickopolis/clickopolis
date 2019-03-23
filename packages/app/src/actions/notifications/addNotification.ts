import { Action } from 'actions';

export type ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const ADD_NOTIFICATION:ADD_NOTIFICATION = 'ADD_NOTIFICATION';

export type addNotification = (n: Notification) => Action<ADD_NOTIFICATION>;
export function addNotification (n: Notification) {
    return {
        type: ADD_NOTIFICATION,
        n,
    };
}