import { Citizen, CitizenType } from '@clickopolis/core'

// @ts-expect-error
export const citizens = new Map<CitizenType, Citizen>([
    ['ruler', {
        name: 'ruler',
        amount: 1,
        description: `Your nation's greatest citizen: you.`
    }],
    ['farmer', {
        name: 'farmer',
        contribution: [
            {
                type: 'PS',
                interval: 1000,
                amount: 1.1,
                resource: 'food'
            },
            {
                type: 'PC',
                interval: null,
                amount: 0.1,
                resource: 'food',
            }
        ],
        amount: 0,
        description: `The humble farmer, a backbone of your society.`
    }],
    ['soldier', {
        name: 'soldier',
        contribution: [],
        amount: 0,
        description: `Soldiers form your military enterprise.`
    }],
    ['merchant', {
        name: 'merchant',
        contribution: [
            {
                type: 'PM',
                interval: 1000,
                amount: 10,
                resource: 'cash'
            },
        ],
        amount: 0,
        description: `Merchants travel the lands to seek out riches.`
    }],
    ['miner', {
        name: 'miner',
        contribution: [
            {
                type: 'PS',
                interval: 1000,
                amount: 0.5,
                resource: 'production'
            },
            {
                type: 'PC',
                interval: null,
                amount: 1,
                resource: 'production',
            }
        ],
        amount: 0,
        description: `Miners are your earliest source of industry & luxury.`
    }],
    ['doctor', {
        name: 'doctor',
        contribution: [
            {
                type: 'constant',
                amount: 10,
                resource: 'health',
            }
        ],
        amount: 0,
        description: `Doctors keep your civilization healthy and not-dead.`
    }]
]);
