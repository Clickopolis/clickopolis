import { Action, ADVANCE_ERA } from '../actions';
import { Era } from 'utils';

export function era(state = Era.Ancient, action: Action<ADVANCE_ERA>) {
	switch (action.type) {
		case ADVANCE_ERA:
			return Era[state + 1];
		default:
			return state;
	}
}
