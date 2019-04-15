import { Advancement } from "components/AdvancementScreen";
import { Era } from 'utils';

export enum AdvName {
    animalDomestication = 'Animal Domestiction',
    archery = 'Archery',
    bartering = 'Bartering',
    clothing = 'Clothing',
    irrigation = 'Irrigation',
    law = 'Law',
    mining = 'Mining',
    mysticism = 'Mysticism',
    painting = 'Painting',
    paper = 'Paper',
    pottery = 'Pottery',
    sailing = 'Sailing',
    woodcutting = 'Wood Cutting',
    writing = 'Writing',

    astronomy = 'Astronomy',
    calendar = 'Calendar',
    construction = 'Construction',
    currency = 'Currency',
    demokratia = 'Demokratia',
    drama = 'Drama',
    engineering = 'Engineering',
    fortifications = 'Fortifications',
    instruments = 'Instruments',
    ironWorking = 'Iron Working',
    mathematics = 'Mathematics',
    medicine = 'Medicine',
    philosophy = 'Philosophy',
    poetics = 'Poetics',
    saddles = 'Saddles',
    shipbuilding = 'Ship Building',
    standingArmies = 'Standing Armies',
    theology = 'Theology',
}

export const advancements: Advancement[] = [
    // ANCIENT
    {
        name: AdvName.animalDomestication,
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
        name: AdvName.archery,
        era: Era.Ancient,
        cost: 20,
        categories: ['military'],
        unlocked: true,
        results: [
            'Can raise Archers',
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
        unlocked: true,
        results: [
            'Unlocks culture panel',
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
        name: AdvName.law,
        era: Era.Ancient,
        cost: 20,
        categories: ['culture'],
        unlocked: true,
        results: [

        ]
    },
    {
        name: AdvName.mining,
        era: Era.Ancient,
        cost: 20,
        categories: ['resources'],
        unlocked: true,
        results: [
            'Can hire Miners',
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
        name: AdvName.paper,
        era: Era.Ancient,
        cost: 20,
        categories: ['culture', 'research'],
        unlocked: true,
        requirements: [AdvName.woodcutting],
        results: [
            'Allows construction of Granary'
        ]
    },
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
        requirements: [AdvName.paper, AdvName.pottery],
        results: [
            'Can build Library',
            'Can build The Great Library World Wonder',
            'Can assign Writers',
        ]
    },

    // CLASSICAL
    {
        name: AdvName.astronomy,
        era: Era.Classical,
        cost: 40,
        categories: ['research'],
        unlocked: true,
        results: [
            '+1 Navy unit strength',
        ]
    },
    {
        name: AdvName.calendar,
        era: Era.Classical,
        cost: 40,
        categories: ['culture'],
        unlocked: true,
        results: [

        ]
    },
    {
        name: AdvName.construction,
        era: Era.Classical,
        cost: 40,
        categories: ['culture'],
        unlocked: true,
        results: [

        ]
    },
    {
        name: AdvName.currency,
        era: Era.Classical,
        cost: 40,
        categories: ['economy'],
        unlocked: true,
        results: [

        ]
    },
    {
        name: AdvName.drama,
        era: Era.Classical,
        cost: 40,
        categories: ['culture'],
        unlocked: true,
        results: [

        ]
    },
    {
        name: AdvName.demokratia,
        era: Era.Classical,
        cost: 40,
        categories: [],
        unlocked: true,
        results: [],
    },
    {
        name: AdvName.engineering,
        era: Era.Classical,
        cost: 40,
        categories: ['culture'],
        unlocked: true,
        results: [

        ]
    },
    {
        name: AdvName.fortifications,
        era: Era.Classical,
        cost: 40,
        categories: ['culture'],
        unlocked: true,
        results: [

        ]
    },
    {
        name: AdvName.instruments,
        era: Era.Classical,
        cost: 40,
        categories: ['culture'],
        unlocked: true,
        results: [

        ]
    },
    {
        name: AdvName.ironWorking,
        era: Era.Classical,
        cost: 40,
        categories: ['culture'],
        unlocked: true,
        results: [
            '+1 Food/ps from farmers',

        ]
    },
    {
        name: AdvName.mathematics,
        era: Era.Classical,
        cost: 40,
        categories: ['culture'],
        unlocked: true,
        results: [

        ]
    },
    {
        name: AdvName.medicine,
        era: Era.Classical,
        cost: 40,
        categories: ['culture'],
        unlocked: true,
        results: [

        ]
    },
    {
        name: AdvName.philosophy,
        era: Era.Classical,
        cost: 40,
        categories: ['culture'],
        unlocked: true,
        results: [

        ]
    },
    {
        name: AdvName.poetics,
        era: Era.Classical,
        cost: 40,
        categories: ['culture'],
        unlocked: true,
        results: [

        ]
    },
    {
        name: AdvName.saddles,
        era: Era.Classical,
        cost: 40,
        categories: ['culture'],
        unlocked: true,
        results: [

        ]
    },
    {
        name: AdvName.shipbuilding,
        era: Era.Classical,
        cost: 40,
        categories: ['culture'],
        unlocked: true,
        results: [

        ]
    },
    {
        name: AdvName.standingArmies,
        era: Era.Classical,
        cost: 40,
        categories: ['culture'],
        unlocked: true,
        results: [

        ]
    },
    {
        name: AdvName.theology,
        era: Era.Classical,
        cost: 40,
        categories: ['culture'],
        unlocked: true,
        results: [

        ]
    },

    

    
    
]