import { Biome } from "@clickopolis/core";

export const biomes:any[] = [
    {
        name: 'Desert',
        description: 'Someone fetch me a drink!',
        biomeRank: 1,
        rankBonuses: [
            {
                rank: 1,
                bonuses: [
                    'Unlocks Cactus resource',
                ]
            },
            {
                rank: 2,
                bonuses: [
                    'Cactus now gives +1% food per Cactus',
                ]

            },
            {
                rank: 3,
                bonuses: [
                    'Trade Routes through deserts earn +10% Gold',
                ]
            },
            {
                rank: 4,
                bonuses: [
                    'Unlocks Solar Panel building',
                ]
            },
            {
                rank: 5,
                bonuses: [
                    
                ]
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