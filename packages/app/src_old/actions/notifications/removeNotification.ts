import { Action } from 'actions';

export type REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';
export const REMOVE_NOTIFICATION: REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

export type removeNotification = (id: string) => Action<REMOVE_NOTIFICATION>;
export function removeNotification(id: string) {
  return {
    type: REMOVE_NOTIFICATION,
    id,
  };
}
