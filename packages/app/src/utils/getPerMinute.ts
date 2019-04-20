import { Civilization } from '@clickopolis/core';

export const sum = (p: number, c: number) => p + c;

export function getResearchPerMinute (civ: Civilization) {
    const {research} = civ
    const researchArray = [
        research.perMinuteFromCitizens || 0,
        research.perMinuteFromCultureBonuses || 0,
        research.perMinuteFromFaithBonuses || 0,
        research.perMinuteFromAdvancements || 0,
        research.perMinuteFromTrade || 0,
        research.perMinuteFromBuildings || 0,
        research.perMinuteFromCorporations || 0,
    ]

    return researchArray.reduce(sum, 0)
}

export function getCashPerMinute (civ: Civilization) {
    const {cash} = civ;
    const cashArray = [
        cash.perMinute || 0,
        cash.perMinuteCitizens || 0,
        cash.perMinuteBuildings || 0,
        cash.perMinuteBuildingMaintenance || 0,
        cash.perMinuteMilitary || 0,
        cash.perMinuteTradeRoutes || 0,
        cash.perMinuteTradeDeals || 0,
        cash.perMinuteSocialPolicies || 0,
        cash.perMinuteFaith || 0,
        cash.perMinuteLegacy || 0,
        cash.perMinuteWonders || 0,
    ];

    return cashArray.reduce(sum, 0)
}

export function getCulturePerMinute (civ: Civilization) {
    const {culture} = civ;
    const cultureArray = [
        culture.perMinuteFromCitizens,
        culture.perMinuteFromSocialPolicies,
        culture.perMinuteFromResources,
        culture.perMinuteFromLegacy,
        culture.perMinuteFromWonders,
        culture.perMinuteFromAdvancements,
    ];

    return cultureArray.reduce(sum, 0)
}

export function getFaithPerMinute (civ: Civilization) {
    const {faith} = civ;
    const faithArray = [
        faith.perMinuteFromBuildings,
        faith.perMinuteFromSocialPolicies,
        faith.perMinuteFromResources,
        faith.perMinuteFromLegacy,
        faith.perMinuteFromWonders,
    ];

    return faithArray.reduce(sum, 0)
}