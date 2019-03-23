// import { Civilization } from '../../../core';

import { Action, GROW_POPULATION, UPDATE_CIVILIZATION, GAIN_CASH } from '../actions';

// @NOTE: Replace any with Civilization
const civDefault:any = {
    civName: '',
    leader: {},
    color: '',
    biomes: ['Biome'],

    population: 1,
    foodNeededForGrowth: 20,

    happiness: 0,
    happinessBase: 50,
    happinessFromBuildings: 0,
    happinessFromWonders: 0,
    happinessFromCitizens: 0,
    happinessFromResources: 0,
    happinessFromCultureBonuses: 0,
    happinessFromFaithBonuses: 0,
    happinessFromEvents: 0,
    happinessFromMod: 1,

    anger: 0,
    angerFromPopulation: 0,
    angerFromWar: 0,
    angerMod: 1,

    health: 15,

    pollution: 0,

    cash: {
        total: 0
    }
};

export function civilization(state = civDefault, action: Action<GROW_POPULATION | UPDATE_CIVILIZATION | GAIN_CASH>) {
    switch (action.type) {
        case 'GROW_POPULATION':
            const population = state.population + action.amount
            return {
                ...state,
                population,
                foodNeededForGrowth: action.foodNeededForGrowth,
                angerFromPopulation: population,
            };
        case 'GAIN_CASH':
            return {
                ...state,
                cash: {
                    total: state.cash.total + action.amount
                }
            };
        case 'UPDATE_CIVILIZATION':
            return {
                ...state,
                [action.key]: action.value,
            };
        default:
            return state;
    }
}

// export interface Civilization {
//     civName: string;
//     leader: Leader;
//     color: string;
//     biomes: Biome[];

//     happiness: number;
//     happinessBase: number;
//     happinessFromBuildings: number;
//     happinessFromWonders: number;
//     happinessFromCitizens: number;
//     happinessFromResources: number;
//     happinessFromCultureBonuses: number;
//     happinessFromFaithBonuses: number;
//     happinessFromEvents: number;
//     happinessFromMod: number;

//     anger: number;
//     angerFromPopulation: number;
//     angerFromWar: number;
//     angerMod: number;

//     health: number;
//     healthBase: number;
//     healthFromResources: number;
//     healthFromBuildings: number;

//     pollution: number;
//     pollutionFromPopulation: number;
//     pollutionFromResources: number;
//     pollutionFromBuildings: number;
//     pollutionFromCorporations: number;
//     pollutionMod: number;

//     population: number;
//     populationGrowthCost: number;
//     populationReal: number;
//     populationEmployed: number;

//     influence: Influence;

//     cash: Cash;

//     goldenAge: GoldenAge;
//     faith: CivFaith;

//     research: Research;
//     // culture
//     // socialPolicies
//     // strength
//     // defense
//     // canMeet
//     // conquested
// }