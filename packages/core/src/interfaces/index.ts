

export type BiomeType = 'Desert'
                    | 'Tundra'
                    | 'Island'
                    | 'Coast'
                    | 'Plains'
                    | 'Forest'
                    | 'Mountains';

export interface Bimoe {
    name: BiomeType;
    description: string;
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

/* The contribution a citizen provides */
export interface Contribution {
    /* Interval of contribution, in ms */
    interval: number;
    /* Amount of contribution */
    amount: number;
    /* Resouce provided */
    type: ResourceName;
}

/* A player in the game - Human or AI */
export interface Player {
    type: 'Human' | 'AI';
    name: string;
    id: string;
    timesLegacied: number;
    legacyPoints: number;
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
    /* Bonuses */
    happinessBonus?: number;
    healthBonus?: number;
    pollutionBonus?: number;
    influenceBonus?: number;
    faithBonus?: number;

    /* Amount of $ it can be sold for */
    exchangeRate?: number;
}

/** A valid resource name */
export type ResourceName = 'Food'
                            | 'Prod'
                            | 'Gold'
                            | 'Faith'
                            | 'Culture';

export {};