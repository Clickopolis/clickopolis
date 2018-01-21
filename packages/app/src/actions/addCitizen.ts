export type ADD_CITIZEN = 'ADD_CITIZEN';
export const ADD_CITIZEN:ADD_CITIZEN = 'ADD_CITIZEN';

export function addCitizen (amount:number, citizen: string) {
    return {
        type: ADD_CITIZEN,
        citizen,
        amount
    };
}