import { combineReducers } from 'redux';
// @ts-ignore no @types module
import { routerReducer } from 'react-router-redux';

import { civilization } from './civilization';
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
    civilization,
    food,
    production,
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
    router: routerReducer
};

export const appReducers:any = combineReducers(reducers);
