import { Action } from 'actions';

export type ADD_RESOURCE = 'ADD_RESOURCE';
export const ADD_RESOURCE: ADD_RESOURCE = 'ADD_RESOURCE';

export type addResource = (
  name: string,
  amount: number
) => Action<ADD_RESOURCE>;
export function addResource(name: string, amount: number) {
  return {
    type: ADD_RESOURCE,
    name,
    amount,
  };
}

export type UNLOCK_RESOURCE = 'UNLOCK_RESOURCE';
export const UNLOCK_RESOURCE: UNLOCK_RESOURCE = 'UNLOCK_RESOURCE';

export type unlockResource = (name: string) => Action<UNLOCK_RESOURCE>;
export function unlockResource(name: string) {
  return {
    type: UNLOCK_RESOURCE,
    name,
  };
}
