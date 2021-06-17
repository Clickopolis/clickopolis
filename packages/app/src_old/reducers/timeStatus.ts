import { Action, PAUSE_GAME, RESUME_GAME } from '../actions';

import { TimeStatus } from 'utils';

export function timeStatus(
  state = TimeStatus.Playing,
  action: Action<PAUSE_GAME | RESUME_GAME>
) {
  switch (action.type) {
    case PAUSE_GAME:
      return TimeStatus.Paused;
    case RESUME_GAME:
      return TimeStatus.Playing;
    default:
      return state;
  }
}
