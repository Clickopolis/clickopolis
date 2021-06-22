import { Action } from 'actions/Action';

export type TURN_OFF_FLAG = 'TURN_OFF_FLAG';
export const TURN_OFF_FLAG: TURN_OFF_FLAG = 'TURN_OFF_FLAG';

export type turnOffFlag = (t: string) => Action<TURN_OFF_FLAG>;
export const turnOffFlag = (target: string) => ({
	type: TURN_OFF_FLAG,
	target
});
