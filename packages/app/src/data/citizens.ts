import { Citizen, CitizenType } from '@clickopolis/core'

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
    ['miner', {
        name: 'miner',
        contribution: [
            {
                type: 'PS',
                interval: 1000,
                amount: 2,
                resource: 'production'
            }
        ],
        amount: 0,
        description: `Miners are your earliest source of industry & luxury.`
    }]
]);
