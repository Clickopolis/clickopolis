import { Action } from 'actions';

export type CREATE_PRODUCTION = 'CREATE_PRODUCTION';
export const CREATE_PRODUCTION:CREATE_PRODUCTION = 'CREATE_PRODUCTION';

export type createProduction = (a:number) => Action<CREATE_PRODUCTION>;
export function createProduction (amount:number) {
    return {
        type: CREATE_PRODUCTION,
        amount
    };
}