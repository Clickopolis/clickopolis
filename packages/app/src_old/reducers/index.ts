import { combineReducers } from 'redux';

import { ruler, farmer, miner, soldier, merchant } from './citizens';
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
  cactus,
  fish,
  banana,
  wood,
  horses,
  eagles,
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
import { currentMenu } from './currentMenu';

export const reducers = {
  advancements,
  aluminum,
  banana,
  buildings,
  cactus,
  cattle,
  chihuahuas,
  civilization,
  copper,
  coral,
  crabs,
  currentMenu,
  eagles,
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
  merchant,
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
};

export const appReducers = combineReducers(reducers);
