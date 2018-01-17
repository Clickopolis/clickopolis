import { combineReducers } from 'redux';
// @ts-ignore no @types module
import { routerReducer } from 'react-router-redux';

import { food } from './food';

export const appReducers:any = combineReducers({
    food,
    router: routerReducer
});

export const reducers = {
    food,
    router: routerReducer
};