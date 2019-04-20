import { Building } from 'components/BuildingsScreen'
import { Era } from 'utils';

export enum BuildingName {
    hut = 'Hut',
    tent = 'Tent',
    obelisk = 'Obelisk',
    granary = 'Granary',
    furnace = 'Furnace',
    shrine = 'Shrine',
    library = 'Library',
    pyramid = 'Pyramid',

    theatre = 'Theatre',
    walls = 'Walls',
    stable = 'Stable',
    temple = 'Temple',
    market = 'Market',
    lighthouse = 'Lighthouse',
    courthouse = 'Courthouse',
    mint = 'Mint',

    
}

export const buildings: Building[] = [
    {
        name: BuildingName.hut,
        era: Era.Ancient,
        cost: 10,
        landCost: 1,
        unlocked: true,
        results: [
            {icon: 'happiness', description: '+1'}
        ],
        total: 0,
        requirements: []
    },
    {
        name: BuildingName.tent,
        era: Era.Ancient,
        cost: 30,
        landCost: 1,
        unlocked: false,
        results: [
           {icon: 'culture', description: '+0.5/min'}
        ],
        total: 0,
        requirements: [],
    },
    {
        name: BuildingName.obelisk,
        era: Era.Ancient,
        cost: 20,
        unlocked: false,
        landCost: 1,
        results: [
            {icon: 'faith', description: '+1/min'},
        ],
        total: 0,
        requirements: [],
    },
    {
        name: BuildingName.shrine,
        era: Era.Ancient,
        cost: 20,
        unlocked: false,
        landCost: 1,
        results: [
            {icon: 'faith', description: '+1/min'},
        ],
        total: 0,
        requirements: [],
    },
    {
        name: BuildingName.granary,
        era: Era.Ancient,
        cost: 25,
        unlocked: false,
        landCost: 1,
        results: [
            {icon: 'food', description: '+200 Max'},
        ],
        total: 0,
        requirements: [],
    },
    {
        name: BuildingName.furnace,
        era: Era.Ancient,
        landCost: 1,
        cost: 25,
        unlocked: false,
        results: [
            {icon: 'production', description: '+200 Max'},
        ],
        total: 0,
        requirements: [],
    },
    {
        name: BuildingName.library,
        era: Era.Ancient,
        landCost: 1,
        cost: 100,
        unlocked: false,
        results: [
            {icon: 'research', description: '+10'},
        ],
        total: 0,
        requirements: [],
    },
    {
        name: BuildingName.pyramid,
        era: Era.Ancient,
        landCost: 3,
        cost: 200,
        unlocked: false,
        results: [
            {icon: 'culture', description: '+3/min'},
        ],
        total: 0,
        requirements: [],
    },

    {
        name: BuildingName.theatre,
        era: Era.Ancient,
        landCost: 2,
        cost: 2000,
        unlocked: false,
        results: [
            {icon: 'culture', description: '+10/min'},
        ],
        total: 0,
        requirements: [],
    },
    {
        name: BuildingName.walls,
        era: Era.Ancient,
        landCost: 3,
        cost: 1200,
        unlocked: false,
        results: [
            {icon: 'defense', description: '+20'},
        ],
        total: 0,
        requirements: [],
    },
    {
        name: BuildingName.stable,
        era: Era.Ancient,
        landCost: 3,
        cost: 1800,
        unlocked: false,
        results: [
            {icon: 'production', description: '+0.1/sec per horse'},
        ],
        total: 0,
        requirements: [],
    },

]