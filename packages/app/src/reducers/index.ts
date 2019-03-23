import { combineReducers } from 'redux';
// @ts-ignore no @types module
import { routerReducer } from 'react-router-redux';

import {
    ruler,
    farmer,
    miner
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

export const reducers:any = {
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
    oil,
    production,
    ruler,
    silver,
    spaghetti,
    spices,
    timeStatus,
    wood,
    router: routerReducer
};

export const appReducers:any = combineReducers(reducers);
