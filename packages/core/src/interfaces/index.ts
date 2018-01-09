
/**
*   Resources are the common currency of the game.
*   Food, Production, Gold, Faith, etc -- all are considered "Resources"
*/
export interface Resource {
    /* name of resources */
    name: string;
    /* total that the player has */
    total: number;
    /* max the player can get */
    max: number;
    /* gain /s */
    perSecond: number;
    /* gain per click (if applicable) */
    perClick: number;
    description: string;
}