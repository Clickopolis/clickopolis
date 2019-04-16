import { Resource, Civilization } from '@clickopolis/core';

export interface CalcLegacyOption {
    food: Resource;
    production: Resource;
    civ: Civilization;
}

export const calculateLegacy = (legacyOpts: CalcLegacyOption) => {
    const {
        food,
        production,
        civ
    } = legacyOpts;

    const maxFood = food.max
    const maxProd = production.max
    const research = civ.research.total
    const cash = civ.cash.total
    const faith = civ.faith.total
    const culture = civ.culture.total

    const legacy = Math.floor((maxFood +
                    maxProd +
                    research + 
                    cash + 
                    faith +
                    culture
                ) / 10000)

    return legacy
}