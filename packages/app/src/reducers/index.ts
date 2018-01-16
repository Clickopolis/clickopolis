import { combineReducers } from 'redux';
// @ts-ignore no @types module
import { routerReducer } from 'react-router-redux';

export const appReducers:any = combineReducers({
    router: routerReducer
});

export const reducers = {
    router: routerReducer
};