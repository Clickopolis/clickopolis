import { Advancement } from "components/AdvancementScreen";
import { Era } from 'utils';

export enum AdvName {
    pottery = 'Pottery',
    bartering = 'Bartering',
    clothing = 'Clothing',
    irrigation = 'Irrigation',
    painting = 'Painting',
    mysticism = 'Mysticism',
    sailing = 'Sailing',
    woodcutting = 'Wood Cutting',
    writing = 'Writing',
}

export const advancements: Advancement[] = [
    {
        name: AdvName.pottery,
        era: Era.Ancient,
        cost: 20,
        categories: ['culture', 'buildings'],
        unlocked: true,
        results: [
            'Allows construction of Granary'
        ]
    },
    {
        name: AdvName.bartering,
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
        name: AdvName.clothing,
        era: Era.Ancient,
        cost: 20,
        categories: ['culture'],
        purchased: false,
        unlocked: true,
        results: [
            '+2 Happiness',
            'Can discover Tundra biome',
        ]
    },
    {
        name: AdvName.irrigation,
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
        name: AdvName.clothing,
        era: Era.Ancient,
        cost: 20,
        categories: ['culture'],
        unlocked: true,
        results: [
            'Unlocks culture panel',
        ]
    },
    {
        name: AdvName.mysticism,
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
        name: AdvName.sailing,
        era: Era.Ancient,
        cost: 20,
        categories: ['military', 'economy'],
        unlocked: false,
        results: [
            'Can raise a Navy',
            'Can discover Coast and Island biomes',
        ],
        requirements: [
            AdvName.woodcutting,
        ]
    },
    {
        name: AdvName.woodcutting,
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
        name: AdvName.writing,
        era: Era.Ancient,
        cost: 20,
        categories: ['research'],
        unlocked: false,
        requirements: ['Pottery', 'Wood Cutting'],
        results: [
            'Can build Library',
            'Can build The Great Library World Wonder',
            'Can assign Writers',
        ]
    }
]