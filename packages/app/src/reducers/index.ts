import { combineReducers } from 'redux';
// @ts-ignore no @types module
import { routerReducer } from 'react-router-redux';

import { food } from './food';
import { production } from './production';

export const appReducers:any = combineReducers({
    food,
    production,
    router: routerReducer
});

export const reducers:any = {
    food,
    production,
    router: routerReducer
};