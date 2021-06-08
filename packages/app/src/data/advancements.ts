import { Advancement } from "components/AdvancementScreen";
import { Era } from 'utils';
import { Category } from 'utils/Category';

export enum AdvName {
    fireMaking = 'Fire Making',

    animalDomestication = 'Animal Domestication',
    archery = 'Archery',
    bartering = 'Bartering',
    clothing = 'Clothing',
    fishing = 'Fishing',
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
    {
        name: AdvName.fireMaking,
        era: Era.Ancient,
        cost: 1,
        categories: ['resources'],
        unlocked: true,
        results: [

        ]
    },
    // ANCIENT
    {
        name: AdvName.animalDomestication,
        era: Era.Ancient,
        cost: 20,
        categories: ['resources'],
        unlocked: true,
        results: [
            'Unlocks: Horses, Cattle',
            '+500 Max food',
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
            'Can build Tents',
        ]
    },
    {
        name: AdvName.fishing,
        era: Era.Ancient,
        cost: 20,
        categories: ['resources'],
        unlocked: true,
        results: [
            'Can gain Ocean resources',
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
            '+10 Happiness'
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
            '+500 Max Production',
            'Can build Furnaces',
        ]
    },
    {
        name: AdvName.mysticism,
        era: Era.Ancient,
        cost: 20,
        categories: ['faith'],
        unlocked: true,
        results: [
            'Unlocks Faith panel',
            'Can build Shrine, Graveyard, Obelisk',
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
            'Can build Pyramid',
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
        categories: [Category.research, Category.military],
        unlocked: false,
        requirements: [AdvName.mysticism, AdvName.writing],
        results: [
            '+1 Navy unit strength',
        ]
    },
    {
        name: AdvName.calendar,
        era: Era.Classical,
        cost: 40,
        categories: [Category.culture],
        unlocked: false,
        requirements: [AdvName.mysticism, AdvName.pottery],
        results: [
            ''
        ]
    },
    {
        name: AdvName.construction,
        era: Era.Classical,
        cost: 40,
        categories: [Category.buildings],
        unlocked: false,
        requirements: [AdvName.mining],
        results: [
            ''
        ]
    },
    {
        name: AdvName.currency,
        era: Era.Classical,
        cost: 40,
        categories: [Category.economy],
        requirements: [AdvName.bartering, AdvName.writing],
        unlocked: false,
        results: [
            'Awards 3 Trade Routes',
            'Can build Market',
        ]
    },
    {
        name: AdvName.drama,
        era: Era.Classical,
        cost: 40,
        categories: ['culture'],
        requirements: [AdvName.writing, AdvName.clothing],
        unlocked: false,
        results: [

        ]
    },
    {
        name: AdvName.demokratia,
        era: Era.Classical,
        cost: 40,
        categories: [Category.culture],
        requirements: [AdvName.law, AdvName.bartering],
        unlocked: false,
        results: [],
    },
    {
        name: AdvName.engineering,
        era: Era.Classical,
        cost: 40,
        categories: [Category.buildings],
        requirements: [AdvName.mining, AdvName.mathematics],
        unlocked: false,
        results: [

        ]
    },
    {
        name: AdvName.fortifications,
        era: Era.Classical,
        cost: 40,
        categories: [Category.buildings],
        unlocked: true,
        results: [
            'Can build Forts',
        ]
    },
    {
        name: AdvName.instruments,
        era: Era.Classical,
        cost: 40,
        categories: [Category.culture],
        unlocked: true,
        results: [
            
        ]
    },
    {
        name: AdvName.ironWorking,
        era: Era.Classical,
        cost: 40,
        categories: [Category.military],
        unlocked: true,
        results: [
            '+1 Food/ps from farmers',
            'Can train Swordsmen'
        ]
    },
    {
        name: AdvName.mathematics,
        era: Era.Classical,
        cost: 40,
        categories: [Category.buildings],
        unlocked: true,
        results: [

        ]
    },
    {
        name: AdvName.medicine,
        era: Era.Classical,
        cost: 40,
        categories: [Category.resources],
        unlocked: true,
        results: [
            '+1 Health from Mushrooms',
        ]
    },
    {
        name: AdvName.philosophy,
        era: Era.Classical,
        cost: 40,
        categories: [Category.research, Category.culture],
        unlocked: true,
        results: [

        ]
    },
    {
        name: AdvName.poetics,
        era: Era.Classical,
        cost: 40,
        categories: [Category.culture],
        unlocked: true,
        results: [

        ]
    },
    {
        name: AdvName.saddles,
        era: Era.Classical,
        cost: 40,
        categories: [Category.military],
        unlocked: true,
        results: [

        ]
    },
    {
        name: AdvName.shipbuilding,
        era: Era.Classical,
        cost: 40,
        categories: [Category.resources, Category.military],
        unlocked: true,
        results: [

        ]
    },
    {
        name: AdvName.standingArmies,
        era: Era.Classical,
        cost: 40,
        categories: [Category.military],
        unlocked: true,
        results: [

        ]
    },
    {
        name: AdvName.theology,
        era: Era.Classical,
        cost: 40,
        categories: [Category.faith],
        unlocked: true,
        results: [

        ]
    },

    

    
    
]