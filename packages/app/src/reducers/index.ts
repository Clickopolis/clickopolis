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
import { production } from './production';
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
    spaghetti
} from './resources';

export const reducers:any = {
    banana,
    cattle,
    civilization,
    era,
    farmer,
    fish,
    flags,
    food,
    gems,
    gold,
    horses,
    miner,
    oil,
    production,
    ruler,
    silver,
    spaghetti,
    spices,
    wood,
    router: routerReducer
};

export const appReducers:any = combineReducers(reducers);
