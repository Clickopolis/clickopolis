import { Action } from 'actions';

export type MODIFY_LEADER = 'MODIFY_LEADER';
export const MODIFY_LEADER: MODIFY_LEADER = 'MODIFY_LEADER';

export type modifyLeader = (modifications: object) => Action<MODIFY_LEADER>;
export const modifyLeader = (modifications: object) => ({
  type: MODIFY_LEADER,
  modifications,
});
