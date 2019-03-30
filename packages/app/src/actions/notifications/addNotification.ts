import { Action } from 'actions';
import { Notification as Note } from 'reducers/notifications';

export type ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const ADD_NOTIFICATION:ADD_NOTIFICATION = 'ADD_NOTIFICATION';

export type addNotification = (n: Note) => Action<ADD_NOTIFICATION>;
export function addNotification (n: Note) {
    return {
        type: ADD_NOTIFICATION,
        ...n,
    };
}