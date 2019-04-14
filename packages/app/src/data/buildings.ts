import { Building } from 'components/BuildingsScreen'
import { Era } from 'utils';

export const buildings: Building[] = [
    {
        name: 'Hut',
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
        name: 'Tent',
        era: Era.Ancient,
        cost: 30,
        landCost: 1,
        unlocked: true,
        results: [
           {icon: 'food', description: '+0.5/s'},
           {icon: 'culture', description: '+0.5/min'}
        ],
        total: 0,
        requirements: [],
    },
    {
        name: 'Obelisk',
        era: Era.Ancient,
        cost: 20,
        unlocked: true,
        landCost: 1,
        results: [
            {icon: 'faith', description: '+1/min'},
        ],
        total: 0,
        requirements: [],
    },
    {
        name: 'Granary',
        era: Era.Ancient,
        cost: 25,
        unlocked: false,
        landCost: 1,
        results: [
            {icon: 'food', description: '+1/click'},
            {icon: 'food', description: '+200 Max'},
        ],
        total: 0,
        requirements: [],
    },
    {
        name: 'Furnace',
        era: Era.Ancient,
        landCost: 1,
        cost: 25,
        unlocked: true,
        results: [
            {icon: 'production', description: '+1/click'},
            {icon: 'production', description: '+200 Max'},
        ],
        total: 0,
        requirements: [],
    },
    {
        name: 'Pyramid',
        era: Era.Ancient,
        landCost: 3,
        cost: 200,
        unlocked: true,
        results: [
            {icon: 'culture', description: '+3/min'},
        ],
        total: 0,
        requirements: [],
    }
]