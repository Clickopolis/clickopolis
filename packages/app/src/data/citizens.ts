import { Citizen } from '@clickopolis/core'

export type CitizenTypes = 'ruler' |
                           'farmer' |
                           'miner' |
                           'cleric' |
                           'artist'
;

export const citizens = new Map<CitizenTypes, Citizen>([
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
    ['miner', {
        name: 'miner',
        contribution: [
            {
                type: 'PS',
                interval: 1000,
                amount: 0.1,
                resource: 'production'
            }
        ],
        amount: 0,
        description: `Your earliest source of industry & luxury.`
    }]
]);
