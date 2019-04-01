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
    chihuahuas
} from './resources';
import { notifications } from './notifications';

export const reducers = {
    banana,
    cattle,
    chihuahuas,
    civilization,
    crabs,
    era,
    farmer,
    fish,
    flags,
    food,
    gems,
    gold,
    horses,
    leader,
    marble,
    miner,
    mushrooms,
    notifications,
    oil,
    production,
    ruler,
    silver,
    stone,
    soldier,
    spaghetti,
    spices,
    timeStatus,
    tobacco,
    wine,
    wood,
    router: routerReducer
};

export const appReducers = combineReducers(reducers);
