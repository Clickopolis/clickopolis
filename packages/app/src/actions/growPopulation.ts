export type GROW_POPULATION = 'GROW_POPULATION';
export const GROW_POPULATION:GROW_POPULATION = 'GROW_POPULATION';

export function growPopulation (amount:number) {
    return {
        type: GROW_POPULATION,
        amount
    };
}