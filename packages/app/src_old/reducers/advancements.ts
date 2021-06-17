import { advancements as initialState } from 'data/advancements';
import {
  ADD_ADVANCEMENT,
  UPDATE_ADVANCEMENT_COSTS,
  UNLOCK_ADVANCEMENT,
  RESET_ADVANCEMENTS,
} from 'actions/advancements';
import { Action } from 'actions';
import pathOr from 'ramda/es/pathOr';
import { Advancement } from 'components/AdvancementScreen';

const editAdv = (state: Advancement[], action: Action<any>, object: object) => {
  const name = action.name;
  const adv = state.find((a) => a.name === name);
  const indexOf = state.indexOf(adv);
  const newAdv = { ...adv, ...object };
  const newState = state;
  newState[indexOf] = newAdv;

  return newState;
};

export function advancements(
  state = initialState,
  action: Action<
    | ADD_ADVANCEMENT
    | UPDATE_ADVANCEMENT_COSTS
    | RESET_ADVANCEMENTS
    | UNLOCK_ADVANCEMENT
  >
) {
  switch (action.type) {
    case UNLOCK_ADVANCEMENT:
      return editAdv(state, action, { unlocked: true });
    case ADD_ADVANCEMENT: {
      const name = action.name;
      const ac = pathOr(0, ['ac'], action);
      const adv = state.find((a) => a.name === name);
      const indexOf = state.indexOf(adv);
      const newAdv = { ...adv, purchased: true, purchasedDate: ac };
      const newState = state;
      newState[indexOf] = newAdv;
      return newState;
    }
    case UPDATE_ADVANCEMENT_COSTS:
      return state.map((advancement) => ({
        ...advancement,
        cost: Math.floor(Math.pow(advancement.cost, 1.07)),
      }));
    case RESET_ADVANCEMENTS:
      return initialState;
    default:
      return state;
  }
}
