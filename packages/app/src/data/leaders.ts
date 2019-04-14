import { Leader } from '@clickopolis/core'
import { ReactNode } from 'react-redux';


type Enhancements = {
    abilities: {name: string, status?: 'locked' | 'unlocked', description: ReactNode}[]
}

export enum LeaderName {
    AbrahamLincoln = 'Abraham Lincoln',
    MansaMusa = 'Mansa Musa',
    Victoria = 'Victoria',
}

export const leaders: (Leader & Enhancements)[] = [
    {
        name: LeaderName.AbrahamLincoln,
        defaultName: LeaderName.AbrahamLincoln,
        defaultCivName: 'United States of America',
        traits: [],
        abilities: [
            {
                name: `Emancipation Procalamation`,
                description: `Cannot institute Slavery mechanic, but cannot lose citizens due to loss in influence.`
            },
            {
                name: `Gettysburg Address`,
                description: `Each Writer earns +1 influence/min. Great Works of Writing earn a one-time 100 influence bonus.`
            },
            {
                name: `A House Divided`,
                description: `Unlocks a unique wartime bonus when a war is justified.`,
                status: 'locked',
            }
        ]
    },
    {
        name: LeaderName.MansaMusa,
        defaultName: LeaderName.MansaMusa,
        defaultCivName: 'Mali',
        traits: [],
        abilities: [
            {
                name: `Wealth of the Desert`,
                description: ``
            }
        ]
    },
    {
        name: LeaderName.Victoria,
        defaultCivName: 'England',
        defaultName: LeaderName.Victoria,
        traits: [],
        abilities: [
            {
                name: `Royal Navy`,
                description: ``,
            }
        ]
    }
]




//     ['Abraham Lincoln', {
//         name: 'Abraham Lincoln',
//         defaultName: 'Abraham Lincoln',
//         defaultCivName: 'United States of America',
//         traits: []
//     }],
//     ['Mao Zedong', {
//         name: 'Mao Zedong',
//         defaultName: 'Mao Zedong',
//         defaultCivName: 'China',
//         traits: []
//     }],
//     ['George Washington', {
//         name: 'George Washington',
//         defaultName: 'George Washington',
//         defaultCivName: 'United States of America',
//         traits: []
//     }]
// ]);