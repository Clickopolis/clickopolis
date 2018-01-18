/* entries are sorted alphabetically */

export type BiomeType = 'Desert'
                    | 'Tundra'
                    | 'Island'
                    | 'Coast'
                    | 'Plains'
                    | 'Forest'
                    | 'Mountains';

export interface Biome {
    name: BiomeType;
    description: string;
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
    contribution: Contribution | Contribution[];
}

/* A valid citizen name */
export type CitizenType = 'Farmer'
                        | 'Miner'
                        | 'Merchant'
                        | 'Cleric'
                        | 'Artist';

export interface Civilization {
    civName: string;
    leader: Leader;
    color: string;
    biomes: Biome[];

    happiness: number;
    happinessBase: number;
    happinessFromBuildings: number;
    happinessFromWonders: number;
    happinessFromCitizens: number;
    happinessFromResources: number;
    happinessFromCultureBonuses: number;
    happinessFromFaithBonuses: number;
    happinessFromEvents: number;
    happinessFromMod: number;

    anger: number;
    angerFromPopulation: number;
    angerFromWar: number;
    angerMod: number;

    health: number;
    healthBase: number;
    healthFromResources: number;
    healthFromBuildings: number;

    pollution: number;
    pollutionFromPopulation: number;
    pollutionFromResources: number;
    pollutionFromBuildings: number;
    pollutionFromCorporations: number;
    pollutionMod: number;

    population: number;
    populationGrowthCost: number;
    populationReal: number;
    populationEmployed: number;

    influence: Influence;

    cash: Cash;

    goldenAge: GoldenAge;
    faith: CivFaith;

    research: Research;
    // culture
    // socialPolicies
    // strength
    // defense
    // canMeet
    // conquested
}

/* The contribution a citizen provides */
export interface Contribution {
    /* Interval of contribution, in ms */
    interval: number;
    /* Amount of contribution */
    amount: number;
    /* Resouce provided */
    type: ResourceName;
}

export interface CivFaith {
    total: number;
    gameTotal: number;
    perMinuteFromBuildings: number;
    perMinuteFromSocailPolicies: number;
    perMinuteFromResources: number;
    perMinuteFromLegacy: number;
    perMinuteFromWonders: number;
    perMinute: number;
    cost: number;
}

export interface Influence {
    domestic: number;
    international: number;
}

export interface GoldenAge {
    total: number;
    progress: number;
    goal: number;
    multiplier: number;
}

export interface Leader {
    name: string;
    defaultName: string;
    traits: Trait[];
}

/* A player in the game - Human or AI */
export interface Player {
    type: 'Human' | 'AI';
    name: string;
    id: string;
    timesLegacied: number;
    legacyPoints: number;
}

export interface Research {
    total: number;
    perMinute: number;
    cost: number;
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
    category?: 'health' | 'building' | 'strategic' | 'luxury' | 'power';
    /* Bonuses */
    happinessBonus?: number;
    healthBonus?: number;
    pollutionBonus?: number;
    influenceBonus?: number;
    faithBonus?: number;

    /* Amount of $ it can be sold for */
    exchangeRate?: number;

    /* Can the resource be seen in the UI? */
    visible?: boolean;
    /* Can the user actually interact with it? */
    unlocked?: boolean;
}

/** A valid resource name */
export type ResourceName = string;

export interface Trait {
    name: string;
    description: string;
    unlocked: boolean;
}

export {};