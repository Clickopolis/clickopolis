import { Biome } from "@clickopolis/core";

export const biomes:any[] = [
    {
        name: 'Desert',
        description: 'Someone fetch me a drink!',
        biomeRank: 1,
        rankBonuses: [
            {
                rank: 1,
                bonus: 'Unlocks [cactus] resource',
                unlocked: true,
            },
            {
                rank: 2,
                bonus:  '[cactus] now gives +1% food per [cactus]',
                unlocked: true,

            },
            {
                rank: 3,
                bonus: 'Trade Routes through deserts earn +10% [cash]',
                unlocked: true,
            },
            {
                rank: 4,
                bonus: 'Unlocks Solar Panel building upgrades',
                unlocked: true,
            },
            {
                rank: 5,
                bonus: 'Unlocks Desert Cult',
                unlocked: false,
            }
        ]
    },
    {
        name: 'Mountains',
        description: '',

    },
    {
        name: 'Hills',
        description: '',
    }
];