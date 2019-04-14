import {
    Resource,
    ResourceCategory,
    ResourceName,
} from '@clickopolis/core';

export const resources:Map<ResourceName, Resource> = new Map([
    ['cattle', {
        name: 'cattle',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: `Don't milk these beautiful creatures too hard, now`,
        category: ResourceCategory.health,
        healthBonus: 0.1,
        visible: true,
        unlocked: true,
    }],
    ['maize', {
        name: 'maize',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: 'Insert corny joke here.',
        category: ResourceCategory.health,
        foodBonus: 1,
        visible: true,
        unlocked: true,
    }],
    ['mushrooms', {
        name: 'mushrooms',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: `A source of health, unless you pick the wrong ones of course.`,
        category: ResourceCategory.health,
        healthBonus: 0.1,
        visible: true,
        unlocked: true,
    }],
    ['fish', {
        name: 'fish',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: 'Teach a civ to fish, keep them healthy for a lifetime.',
        category: ResourceCategory.health,
        healthBonus: 0.1,
        visible: true,
        unlocked: true,
    }],
    ['crabs', {
        name: 'crabs',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: `A good meal for crabby citizens.`,
        category: ResourceCategory.health,
        healthBonus: 0.1,
        visible: true,
        unlocked: true,
    }],
    ['urchin', {
        name: 'urchin',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: `Do you have an urgin for urchins?`,
        category: ResourceCategory.power,
        visible: true,
        unlocked: true,
    }],
    ['banana', {
        name: 'banana',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: 'A fruit filled with potassium and innuendo',
        category: ResourceCategory.health,
        healthBonus: 0.1,
        visible: true,
        unlocked: false,
    }],
    ['sheep', {
        name: 'sheep',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: `Bahhhh`,
        category: ResourceCategory.health,
        visible: true,
        unlocked: false,
    }],
    ['wine', {
        name: 'wine',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: `A healthy drink with no drawbacks!`,
        health: 0.1,
        category: ResourceCategory.health,
        visible: true,
        unlocked: false,
    }],
    ['wood', {
        name: 'wood',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: 'Woo! Wood provides wood. Woohoo!',
        category: ResourceCategory.building,
        visible: true,
        unlocked: true,
    }],
    ['stone', {
        name: 'stone',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: `A stoners dream. Wait, that's not what stoner means?`,
        category: ResourceCategory.building,
        visible: true,
        unlocked: true,
    }],
    ['marble', {
        name: 'marble',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: `A mineral befit the most gorgeous works.`,
        category: ResourceCategory.building,
        visible: true,
        unlocked: true,
    }],
    ['horses', {
        name: 'horses',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: 'Giddy up, pony. An important resource for military leaders.',
        category: ResourceCategory.strategic,
        visible: true,
        unlocked: true,
    }],
    ['copper', {
        name: 'copper',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: `A soft, malleable metal for pennies and swords.`,
        category: ResourceCategory.strategic,
        visible: true,
        unlocked: true,
    }],
    ['oil', {
        name: 'oil',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: 'Carry through cars, bombers jets, and plastic bags into the new era.',
        category: ResourceCategory.strategic,
        pollutionBonus: 1,
        visible: true,
        unlocked: false,
    }],
    ['aluminum', {
        name: 'aluminum',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: `Cans and planes, the name of the game.`,
        category: ResourceCategory.strategic,
        visible: true,
        unlocked: true,
    }],
    ['uranium', {
        name: 'uranium',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: `Fuel for the deadliest bombs in existence.`,
        category: ResourceCategory.strategic,
        pollutionBonus: 0,
        visible: true,
        unlocked: false,
    }],
    ['spices', {
        name: 'spices',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: 'Probably not a good idea to snort.',
        category: ResourceCategory.luxury,
        visible: true,
        unlocked: true,
    }],
    ['tobacco',{
        name: 'tobacco',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: `C'est une tobacco resource`,
        category: ResourceCategory.luxury,
        visible: true,
        unlocked: true,
        pollutionBonus: 0,
        faithBonus: 1,
    }],
    ['gold', {
        name: 'gold',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: `Clickopolis's most yearned after metal`,
        category: ResourceCategory.luxury,
        visible: true,
        unlocked: true,
    }],
    ['silver', {
        name: 'silver',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: `Gold's nerdy cousin`,
        category: ResourceCategory.luxury,
        visible: true,
        unlocked: true,
    }],
    ['gems', {
        name: 'gems',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: `Not all that glitters is gold`,
        category: ResourceCategory.luxury,
        visible: true,
        unlocked: true,
    }],
    ['coral', {
        name: 'coral',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: `A marine invertebrate coveted by collectors.`,
        category: ResourceCategory.power,
        visible: true,
        unlocked: true,
        cultureBonus: 1,
    }],
    ['fossils', {
        name: 'fossils',
        total: 0,
        max: 10,
        perSecond: null,
        perClick: null,
        description: `A specimen of a now extinct animal, or feces.`,
        category: ResourceCategory.power,
        visible: true,
        unlocked: false,
    }],
    ['spaghetti', {
        name: 'spaghetti',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: `WHO TOUCHED MY SPAHGET!?`,
        category: ResourceCategory.power,
        visible: false,
        unlocked: false,
    }],
    ['chihuahuas', {
        name: 'chihuahuas',
        total: 0,
        max: Infinity,
        perSecond: null,
        perClick: null,
        description: `Pint-sized dog with full-sized sass`,
        category: ResourceCategory.power,
        visible: false,
        unlocked: true,
    }]
]);