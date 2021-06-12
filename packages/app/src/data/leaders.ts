import { Leader } from 'interfaces';

export enum LeaderName {
    AbrahamLincoln = 'Abraham Lincoln',
    MansaMusa = 'Mansa Musa',
    Victoria = 'Victoria',
    AnaNzinga = 'Ana Nzinga',
    BenitoJuarez = 'Benito Juarez',
    Trajan = 'Trajan',
}

export const leaders: Leader[] = [
    {
        name: LeaderName.AbrahamLincoln,
        defaultName: LeaderName.AbrahamLincoln,
        defaultCivName: 'United States of America',
        traits: [],
        abilities: [
            {
                name: `Emancipation Procalamation`,
                description: `Cannot institute Slavery mechanic, but cannot lose citizens due to loss in influence.`,
                unlocked: true,
            },
            {
                name: `Gettysburg Address`,
                description: `Each Writer earns +1 influence/min. Great Works of Writing earn a one-time 100 influence bonus.`,
                unlocked: false,
            },
            {
                name: `A House Divided`,
                description: `Unlocks a unique wartime bonus when a war is justified.`,
                unlocked: false,
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
                name: `Lord of the Mines`,
                description: `Miner output increased 100%`,
                unlocked: true,
            },
            {
                name: `The Great Pilgrimage`,
                description: `+100% time to complete Trade Routes, but +300% Money when completed`,
                unlocked: false,
            },
            {
                name: `Griot Tradition`,
                description: `Removes ability to have Great Writers. Musicians produce +3 Culture, +4 Faith, +1 Money`,
                unlocked: false,
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
                description: `+50% Navy strength. +1 Navy unit when discovering Sailing.`,
                unlocked: true,
            },
            {
                name: `The Big Smoke`,
                description: `+0.1 Production/click per citizen but +1.5 Pollution per citizen`,
                unlocked: false,
            },
            {
                name: `Warehouse City`,
                description: `+100% Production from Workshops and Factories`,
                unlocked: false,
            },
        ]
    },
    {
        name: LeaderName.AnaNzinga,
        defaultCivName: 'Congo',
        defaultName: LeaderName.AnaNzinga,
        traits: [],
        abilities: [
            {
                name: `Queen of Many Names`,
                description: `Gains +1 Spy when espionage is enabled. Spies' automatically gain 1 rank upon creation.`,
                unlocked: true,
            },
            {
                name: `Entourage`,
                description: `+.1 domestic influence/min per citizen after building your first Courthouse.`,
                unlocked: false,
            },
            {
                name: `Syncretic Church`,
                description: `Can worship one Pantheon beyond the normal limit and gains one faith bonus based on your closest neighboring nation.`,
                unlocked: false,
            },
        ]
    },
    {
        name: LeaderName.BenitoJuarez,
        defaultCivName: 'Mexico',
        defaultName: LeaderName.BenitoJuarez,
        traits: [],
        abilities: [
            {
                name: `La Reforma Del Norte`,
                description: `Temples and Churches do not cost land to build but Clerics produce -10% less faith.`,
                unlocked: true,
            },
            {
                name: `Biodiverse Lands`,
                description: `Gains +5% culture/min per biome discovered. Can unlock the Eagle resource, which earns 1 culture/min per Eagle discovered. Can only be earned by Explorers.`,
                unlocked: false,
            },
            {
                name: `Columbian Exchange`,
                description: `Trade Routes award a bonus resource when completed, but plague chance increases by 1% with each completed trade. Plauge chance penalty removed after discovering Germ Theory.`,
                unlocked: false,
            }
        ]
    },
    {
        name: LeaderName.Trajan,
        defaultCivName: 'Rome',
        defaultName: LeaderName.Trajan,
        traits: [],
        abilities: [

        ],
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