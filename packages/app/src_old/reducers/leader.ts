import { Action, MODIFY_LEADER, SELECT_LEADER } from 'actions';
import { Leader } from 'interfaces';
import { leaders } from 'data/leaders';

export function leader(
  state: Leader = leaders[0],
  action: Action<MODIFY_LEADER | SELECT_LEADER>
) {
  switch (action.type) {
    case SELECT_LEADER:
      return leaders.find((l) => l.name === action.leader);
    default:
      return state;
  }
}
