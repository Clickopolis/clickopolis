import { Action } from 'actions';
import { Leader } from 'interfaces';

export type SELECT_LEADER = 'SELECT_LEADER';
export const SELECT_LEADER: SELECT_LEADER = 'SELECT_LEADER';

export type selectLeader = (l: Leader['name']) => Action<SELECT_LEADER>;
export const selectLeader = (leader: Leader['name']) => ({
	type: SELECT_LEADER,
	leader
});
