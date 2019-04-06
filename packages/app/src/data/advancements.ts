import { Advancement } from "components/AdvancementScreen";
import { Era } from 'utils';

export const advancements: Advancement[] = [
    {
        name: 'Pottery',
        era: Era.Ancient,
        cost: 20,
        categories: ['culture', 'buildings'],
        unlocked: true,
        results: [
            'Allows construction of Granary'
        ]
    },
    {
        name: 'Bartering',
        era: Era.Ancient,
        cost: 20,
        categories: ['economy'],
        unlocked: true,
        results: [
            'Can create Trade Routes',
            'Citizens award +1 Gold',
            'Unlocks Economy panel',
        ]
    },
    {
        name: 'Clothing',
        era: Era.Ancient,
        cost: 20,
        categories: ['culture'],
        purchased: true,
        purchaseDate: 30,
        unlocked: true,
        results: [
            '+2 Happiness',
            'Can discover Tundra biome',
        ]
    },
    {
        name: 'Irrigation',
        era: Era.Ancient,
        cost: 20,
        categories: [
            'resources',
        ],
        unlocked: true,
        results: [
            '+.5 Food/s from Farmers',
            'Unlocks Banana resource',
        ]
    },
    {
        name: 'Painting',
        era: Era.Ancient,
        cost: 20,
        categories: ['culture'],
        unlocked: true,
        results: [
            'Unlocks culture panel',
        ]
    },
    {
        name: 'Mysticism',
        era: Era.Ancient,
        cost: 20,
        categories: ['faith'],
        unlocked: true,
        results: [
            'Can build Temple, Graveyard',
            'Can build Stonehedge World Wonder'
        ]
    },
    {
        name: 'Sailing',
        era: Era.Ancient,
        cost: 20,
        categories: ['military', 'economy'],
        unlocked: false,
        results: [
            'Can raise a Navy',
            'Can discover Coast and Island biomes',
        ],
        requirements: [
            'Wood Cutting',
        ]
    },
    {
        name: 'Wood Cutting',
        era: Era.Ancient,
        cost: 20,
        categories: ['military'],
        unlocked: true,
        results: [
            'Can assign woodcutters',
            'Unlocks Spices resource',
        ]
    },
    {
        name: 'Writing',
        era: Era.Ancient,
        cost: 20,
        categories: ['research'],
        unlocked: false,
        requirements: ['Pottery'],
        results: [
            'Can build Library',
            'Can build The Great Library World Wonder',
            'Can assign Writers',
        ]
    }
]