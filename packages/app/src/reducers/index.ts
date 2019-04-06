import { combineReducers } from 'redux';
// @ts-ignore no @types module
import { routerReducer } from 'react-router-redux';

import {
    ruler,
    farmer,
    miner,
    soldier,
} from './citizens';
import { civilization } from './civilization';
import { era } from './era';
import { flags } from './flags';
import { food } from './food';
import { leader } from './leader';
import { production } from './production';
import { timeStatus } from './timeStatus';
import { buildings } from './buildings';
import { advancements } from './advancements';
import {
    cattle,
    crabs,
    fish,
    banana,
    wood,
    horses,
    oil,
    spices,
    gold,
    wine,
    mushrooms,
    silver,
    stone,
    marble,
    gems,
    tobacco,
    spaghetti,
    chihuahuas,
    copper,
    urchin,
    uranium,
    aluminum,
    fossils,
    sheep,
    maize,
    coral,
} from './resources';
import { notifications } from './notifications';

export const reducers = {
    advancements,
    aluminum,
    banana,
    buildings,
    cattle,
    chihuahuas,
    civilization,
    copper,
    coral,
    crabs,
    era,
    farmer,
    fish,
    flags,
    food,
    fossils,
    gems,
    gold,
    horses,
    leader,
    maize,
    marble,
    miner,
    mushrooms,
    notifications,
    oil,
    production,
    ruler,
    silver,
    sheep,
    stone,
    soldier,
    spaghetti,
    spices,
    timeStatus,
    tobacco,
    uranium,
    urchin,
    wine,
    wood,
    router: routerReducer
};

export const appReducers = combineReducers(reducers);
