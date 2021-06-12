import { Biome } from 'interfaces';

export const biomes:Biome[] = [
    {
        name: 'Desert',
        description: 'Someone fetch me a drink!',
        biomeRank: 1,
        sqKm: 900,
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
        sqKm: 100,

    },
    {
        name: 'Hills',
        description: '',
        sqKm: 300,
    },
    {
        name: 'Coast',
        description: '',
    },
    {
        name: 'Forest',
        description: '',
    },
    {
        name: 'Iceberg',
        description: '',
    },
    {
        name: 'Island',
        description: '',
    },
    {
        name: 'Cave',
        description: '',
    },
    {
        name: 'Space',
        description: '',
    },
    {
        name: 'Moon',
        description: '',
    },
    {
        name: 'Mars',
        description: '',
    },
    {
        name: 'Waterfall',
        description: '',
    },
    {
        name: 'Volcano',
        description: '',
    },
    {
        name: 'Plains',
        description: '',
    },
    {
        name: 'Ocean',
        description: '',
    },
    {
        name: 'Tundra',
        description: '',
    },
    {
        name: 'River',
        description: '',
    }

];