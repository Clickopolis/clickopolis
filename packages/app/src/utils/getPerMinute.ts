import { Civilization } from '@clickopolis/core';

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

    return researchArray.reduce((p, c) => p + c, 0)
}