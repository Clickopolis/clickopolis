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
    fish,
    banana,
    wood,
    horses,
    oil,
    spices,
    gold,
    silver,
    gems,
    spaghetti,
    chihuahuas
} from './resources';
import { notifications } from './notifications';

export const reducers = {
    banana,
    cattle,
    chihuahuas,
    civilization,
    era,
    farmer,
    fish,
    flags,
    food,
    gems,
    gold,
    horses,
    leader,
    miner,
    notifications,
    oil,
    production,
    ruler,
    silver,
    soldier,
    spaghetti,
    spices,
    timeStatus,
    wood,
    router: routerReducer
};

export const appReducers = combineReducers(reducers);
