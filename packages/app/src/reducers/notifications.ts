import { Action, ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../actions';

export type Notification = {
    content: React.ReactNode;
    id: string;
}

export function notifications(state: Notification[] = [], action: Action<ADD_NOTIFICATION | REMOVE_NOTIFICATION>) {
    switch (action.type) {
        case ADD_NOTIFICATION:
            return [
                action.notification,
                ...state
            ];
        case REMOVE_NOTIFICATION:
            return state.filter(note => note.id !== action.id);
        default:
            return state;
    }
}