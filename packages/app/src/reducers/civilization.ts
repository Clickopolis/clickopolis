// import { Civilization } from '../../../core';

import { Action, GROW_POPULATION, UPDATE_CIVILIZATION, GAIN_CASH } from '../actions';

// @NOTE: Replace any with Civilization
const civDefault:any = {
    civName: '',
    leader: {},
    color: '',
    biomes: ['Biome'],
    ac: 0,

    population: 1,
    foodNeededForGrowth: 20,

    happiness: {
        base: 50,
        fromBuildings: 0,
        fromWonders: 0,
        fromCitizens: 0,
        fromResources: 0,
        fromCultureBonuses: 0,
        fromFaithBonuses: 0,
        fromEvents: 0,
        multiplier: 1,
    },
    

    anger: {
        fromPopulation: 0,
        fromWar: 0,
        fromEvents: 0,
        multiplier: 1,
    },

    health: {
        base: 15,
        fromResources: 0,
        fromBuildings: 0,
        multiplier: 1,
    },

    pollution: {
        fromPopulation: 0,
        fromResources: 0,
        fromBuildings: 0,
        fromWonders: 0,
        fromCorporations: 0,
        multiplier: 1,
    },

    cash: {
        total: 0,
        perMinute: 0,
        perMinuteCitizens: 0,
        perMinuteBuildings: 0,
        perMinuteBuildingMaintenance: 0,
        perMinuteMilitary: 0,
        perMinuteTradeRoutes: 0,
        perMinuteTradeDeals: 0,
        perMinuteSocialPolicies: 0,
        perMinuteFaith: 0,
        perMinuteLegacy: 0,
        perMinuteWonders: 0,
        multiplier: 1,
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