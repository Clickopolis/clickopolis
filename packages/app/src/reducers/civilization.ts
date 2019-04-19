// import { Civilization } from '../../../core';

import { Action, GROW_POPULATION, UPDATE_CIVILIZATION, GAIN_CASH, UPDATE_GA_PROGRESS } from '../actions';
import { assocPath } from 'ramda';

// @NOTE: Replace any with Civilization
const civDefault:any = {
    civName: '',
    leader: {},
    color: '',
    biomes: ['Biome'],
    ac: 0,

    population: 1,
    foodNeededForGrowth: 20,

    goldenAge: {
        isActive: false,
        progress: 1000,
        goal: 10000,
        multiplier: 0,
    },

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
        fromSlavery: 0,
        multiplier: 1,
    },

    health: {
        base: 50,
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
        fromEvents: 0,
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
    },

    culture: {
        total: 0,
    
        perMinuteFromCitizens: 0,
        perMinuteFromSocialPolicies: 0,
        perMinuteFromResources: 0,
        perMinuteFromLegacy: 0,
        perMinuteFromWonders: 0,
        perMinuteFromAdvancements: 0,
        multiplier: 0,
    },

    faith: {
        total: 0,
        gameTotal: 0,
        perMinuteFromBuildings: 0,
        perMinuteFromSocialPolicies: 0,
        perMinuteFromResources: 0,
        perMinuteFromLegacy: 0,
        perMinuteFromWonders: 0,
        perMinute: 0,
        multiplier: 0,
    },

    research: {
        total: 100000000,
        perMinuteFromCitizens: 0,
        perMinuteFromCultureBonuses: 0,
        perMinuteFromFaithBonuses: 0,
        perMinuteFromAdvancements: 0,
        perMinuteFromTrade: 0,
        perMinuteFromBuildings: 0,
        perMinuteFromCorporations: 0,
    },
};

export function civilization(state = civDefault, action: Action<GROW_POPULATION | UPDATE_CIVILIZATION | GAIN_CASH | UPDATE_GA_PROGRESS>) {
    switch (action.type) {
        case GROW_POPULATION:
            const population = state.population + action.amount
            return {
                ...state,
                population,
                foodNeededForGrowth: action.foodNeededForGrowth,
                angerFromPopulation: population,
                research: {
                    ...state.research,
                    perMinuteFromCitizens: state.research.perMinuteFromCitizens + (action.amount / 4),
                },
                anger: {
                    ...state.anger,
                    fromPopulation: state.anger.fromPopulation + action.amount,
                },
                pollution: {
                    ...state.pollution,
                    fromPopulation: state.pollution.fromPopulation + action.amount,
                },
                cash: {
                    ...state.cash,
                    perMinuteCitizens: state.cash.perMinuteCitizens + action.amount,
                }
            };
        case GAIN_CASH:
            return {
                ...state,
                cash: {
                    total: state.cash.total + action.amount
                }
            };
        case UPDATE_GA_PROGRESS:
            console.log(action)

            return {
                ...state,
                goldenAge: {
                    ...state.goldenAge,
                    progress: state.goldenAge.progress + action.amount,
                }
            }
        case UPDATE_CIVILIZATION:
            return assocPath([...action.key], action.value, state);
        default:
            return state;
    }
}

// export interface Civilization {
//     civName: string;
//     leader: Leader;
//     color: string;
//     biomes: Biome[];

//     happiness: 0,
//     happinessBase: 0,
//     happinessFromBuildings: 0,
//     happinessFromWonders: 0,
//     happinessFromCitizens: 0,
//     happinessFromResources: 0,
//     happinessFromCultureBonuses: 0,
//     happinessFromFaithBonuses: 0,
//     happinessFromEvents: 0,
//     happinessFromMod: 0,

//     anger: 0,
//     angerFromPopulation: 0,
//     angerFromWar: 0,
//     angerMod: 0,

//     health: 0,
//     healthBase: 0,
//     healthFromResources: 0,
//     healthFromBuildings: 0,

//     pollution: 0,
//     pollutionFromPopulation: 0,
//     pollutionFromResources: 0,
//     pollutionFromBuildings: 0,
//     pollutionFromCorporations: 0,
//     pollutionMod: 0,

//     population: 0,
//     populationGrowthCost: 0,
//     populationReal: 0,
//     populationEmployed: 0,

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