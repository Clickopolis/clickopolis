import { Action } from 'actions/Action';

export type TURN_ON_FLAG = 'TURN_ON_FLAG';
export const TURN_ON_FLAG: TURN_ON_FLAG = 'TURN_ON_FLAG';

export type turnOnFlag = (t: string) => Action<TURN_ON_FLAG>;
export const turnOnFlag = (target: string) => ({
	type: TURN_ON_FLAG,
	target
});
