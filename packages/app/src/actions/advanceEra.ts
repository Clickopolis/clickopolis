export type ADVANCE_ERA = 'ADVANCE_ERA';
export const ADVANCE_ERA:ADVANCE_ERA = 'ADVANCE_ERA';

export function advanceEra () {
    return {
        type: ADVANCE_ERA,
    };
}