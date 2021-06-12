/* entries are sorted alphabetically */

export interface Achievement {
    name: string;
    description: string;
    unlocked: boolean;
}

export interface Advancement {
    const: number;
    era?: Era;
    name: string;
    
}

export interface Anger {
    fromPopulation: number;
    fromWar: number;
    fromEvents: number;
    fromSlavery: number;
    multiplier: number;
}

export type BiomeType = 'Desert'
                    | 'Tundra'
                    | 'Island'
                    | 'Coast'
                    | 'Plains'
                    | 'Temperate Forest'
                    | 'Rainforest'
                    | 'Plains'
                    | 'Hills'
                    | 'Lake'
                    | 'Iceberg'
                    | 'Permafrost Tundra'
                    | 'Oasis'
                    | 'Mountains'
                    | 'Forest'
                    | 'Cave'
                    | 'Space'
                    | 'Moon'
                    | 'Mars'
                    | 'Waterfall'
                    | 'Volcano'
                    | 'Plains'
                    | 'Ocean'
                    | 'Tundra'
                    | 'River'
;

export interface Biome {
    name: BiomeType;
    description: string;
    biomeRank?: number;
    sqKm?: number;
    rankBonuses?: BiomeRank[];
}

export interface BiomeRank {
    rank: number;
    bonus: string;
    unlocked: boolean;
}

export interface Building {
    name: string;
    amount: number;
    productionCost: number;
    cashCost: number;
    description: string;
    effect: string;
    visible: boolean;
    enabled: boolean;
}

export interface Cash {
    total: number;
    perMinute: number;
    perMinuteCitizens: number;
    perMinuteBuildings: number;
    perMinuteBuildingMaintenance: number;
    perMinuteMilitary: number;
    perMinuteTradeRoutes: number;
    perMinuteTradeDeals: number;
    perMinuteSocialPolicies: number;
    perMinuteFaith: number;
    perMinuteLegacy: number;
    perMinuteWonders: number;
}

/**
 * Citizens are the backbone of one's quest for resources.
 */
export interface Citizen {
    name: CitizenType;
    /* The contribution a citizen provides */
    contribution?: Contribution[];
    amount?: number;
    description?: string;
}

/* A valid citizen name */
export type CitizenType = 'farmer'
                        | 'miner'
                        | 'merchant'
                        | 'cleric'
                        | 'artist'
                        | 'ruler'
                        | 'doctor'
                        | 'musician'
                        | 'writer'
                        | 'astronaut'
                        | 'scientist'
                        | 'woodcutter'
                        | 'spy'
                        | 'general'
                        | 'soldier';

export interface Civilization {
    civName: string;
    leader: Leader;
    color: string;
    biomes: Biome[];

    foodNeededForGrowth: number;

    happiness: Happiness;
    anger: Anger;
    health: Health;
    pollution: Pollution;

    population: number;
    populationGrowthCost: number;
    populationReal: number;
    populationEmployed: number;

    influence: Influence;

    cash: Cash;

    goldenAge: GoldenAge;
    faith: CivFaith;
    research: Research;
    culture: Culture;
    // culture
    // socialPolicies
    // strength
    // defense
    // canMeet
    // conquested
}

/* The contribution a citizen provides */
export interface Contribution {
    type: 'PS' | 'PC' | 'PM' | 'PH' | 'constant';
    /* Interval of contribution, in ms */
    interval: number;
    /* Amount of contribution */
    amount: number;
    /* Resouce provided */
    resource: ResourceName;
}

export interface CivFaith {
    total: number;
    gameTotal: number;
    perMinuteFromBuildings: number;
    perMinuteFromSocialPolicies: number;
    perMinuteFromResources: number;
    perMinuteFromLegacy: number;
    perMinuteFromWonders: number;
    perMinute: number;
    multiplier: number;
}

export interface Culture {
    total: number;
    
    perMinuteFromCitizens: number;
    perMinuteFromSocialPolicies: number;
    perMinuteFromResources: number;
    perMinuteFromLegacy: number;
    perMinuteFromWonders: number;
    perMinuteFromAdvancements: number;
    multiplier: number;
}

export enum Era {
    Ancient,
    Classical,
    Medieval,
    Renaissance,
    Industrial,
    Modern,
    Atomic,
    Information,
    Future
}

export interface Influence {
    domesticPerMinute: {
        domesticPerMinuteFromBuildings: number;
        domesticPerMinuteFromPolicies: number;
        domesticPerMinuteFromAdvancements: number;
        domesticPerMinuteFromWonders: number;
    }
    internationalPerMinute: {
        internationalPerMinuteFromBuildings: number;
        internationalPerMinuteFromPolicies: number;
        internationalMinuteFromAdvancements: number;
        internationalPerMinuteFromWonders: number;
    }
    domestic: number;
    international: number;
}
export type flag = { [flag: string]: boolean };
export interface Flags { [flag: string]: boolean | flag; }

export interface GoldenAge {
    total: number;
    progress: number;
    goal: number;
    multiplier: number;
}

export interface Happiness {
    base: number;
    fromBuildings: number;
    fromWonders: number;
    fromCitizens: number;
    fromResources: number;
    fromCultureBonuses: number;
    fromFaithBonuses: number;
    fromEvents: number;
    multiplier: number;
}

export interface Health {
    base: number;
    fromResources: number;
    fromBuildings: number;
    multiplier: number;
}

export interface Leader {
    name: string;
    defaultName: string;
    defaultCivName: string;
    traits: Trait[];
    abilities: {name: string, unlocked?: boolean, description: string}[];
}

/* A player in the game - Human or AI */
export interface Player {
    type: 'Human' | 'AI';
    name: string;
    id: string;
    timesLegacied: number;
    legacyPoints: number;
}

export interface Pollution {
    fromPopulation: number;
    fromResources: number;
    fromBuildings: number;
    fromWonders: number;
    fromCorporations: number;
    fromEvents: number;
    mulitiplier: number;
}

export interface Research {
    total: number;
    perMinuteFromCitizens: number;
    perMinuteFromCultureBonuses: number;
    perMinuteFromFaithBonuses: number;
    perMinuteFromAdvancements: number;
    perMinuteFromTrade: number;
    perMinuteFromBuildings: number;
    perMinuteFromCorporations: number;
}

/**
*   Resources are the common currency of the game.
*   Food, Production, Gold, Faith, etc -- all are considered "Resources"
*/
export interface Resource {
    /* name of resources */
    name: ResourceName;
    /* total that the player has */
    total: number;
    /* max the player can get */
    max: number;
    /* gain /s */
    perSecond: number;
    /* gain per click (if applicable) */
    perClick: number;
    description: string;
    /* category */
    category?: ResourceCategory;
    /* Bonuses */
    happinessBonus?: number;
    healthBonus?: number;
    pollutionBonus?: number;
    influenceBonus?: number;
    faithBonus?: number;
    cultureBonus?: number;
    foodBonus?: number;
    produnctionBonus?: number;

    /* Amount of $ it can be sold for */
    exchangeRate?: number;

    /* Can the resource be seen in the UI? */
    visible?: boolean;
    /* Can the user actually interact with it? */
    unlocked?: boolean;
}

export enum ResourceCategory {
    health = 'health',
    building = 'building',
    strategic = 'strategic',
    luxury = 'luxury',
    power = 'power'
}

/** A valid resource name */
export type ResourceName = string;

export interface Trait {
    name: string;
    description: string;
    unlocked: boolean;
}

export interface Wonder {
    name: string;
    buildTime: number;
    remainingTime: number;
    visible: boolean;
    enabled: boolean;
    description: string;
    effect: string;
}