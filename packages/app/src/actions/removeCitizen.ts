export type REMOVE_CITIZEN = 'REMOVE_CITIZEN';
export const REMOVE_CITIZEN:REMOVE_CITIZEN = 'REMOVE_CITIZEN';

export function removeCitizen (amount:number, citizen: string) {
    return {
        type: REMOVE_CITIZEN,
        citizen,
        amount
    };
}