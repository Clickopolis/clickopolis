import { Advancement } from 'components/AdvancementScreen';
import { Dispatch, Store } from 'redux';
import { unlockBuilding } from './buildings';
import path from 'ramda/es/path';
import { updateCivilization } from './updateCivilization';
import { AdvName } from 'data/advancements';

export type UNLOCK_ADVANCEMENT = 'UNLOCK_ADVANCEMENT';
export const UNLOCK_ADVANCEMENT: UNLOCK_ADVANCEMENT = 'UNLOCK_ADVANCEMENT';
export const unlockAdvancement = (name: string) =>
    ({ type: UNLOCK_ADVANCEMENT, name })

export type UPDATE_ADVANCEMENT_COSTS = 'UPDATE_ADVANCEMENT_COSTS';
export const UPDATE_ADVANCEMENT_COSTS: UPDATE_ADVANCEMENT_COSTS = 'UPDATE_ADVANCEMENT_COSTS';
export const updateAdvancementCosts = () => ({ type: UPDATE_ADVANCEMENT_COSTS })

export type ADD_ADVANCEMENT = 'ADD_ADVANCEMENT';
export const ADD_ADVANCEMENT: ADD_ADVANCEMENT = 'ADD_ADVANCEMENT';
export const addAdvancement = (name: string, ac: number) =>
    ({ type: ADD_ADVANCEMENT, name, ac })

const advancementPurchaseBasics = (dispatch: any, getState: any, adv: Advancement, ac: number) => {
    const research = getState().civilization.research.total
    dispatch(updateCivilization(['research', 'total'], research - adv.cost))
    dispatch(addAdvancement(name, ac))
    dispatch(updateAdvancementCosts())  
}


export function purchaseAdvancement(advancement: Advancement, ac: number) {
    switch (advancement.name) {
        case AdvName.pottery:
            return function (dispatch: Dispatch<any>, getState: Store<any>['getState']) {
                const adv: Advancement = getState().advancements.find((a: Advancement) => a.name === AdvName.pottery);
                if (!path(['purchased'], adv)) {
                    advancementPurchaseBasics(dispatch, getState, adv, ac)
                    dispatch(unlockBuilding('Granary'))
                    dispatch(unlockAdvancement(AdvName.writing))
                }
            }
        case AdvName.painting:
            return (dispatch: Dispatch<any>, getState: Store<any>['getState']) => {
                const adv: Advancement = getState().advancements.find((a: Advancement) => a.name === AdvName.painting);
                const name = adv.name
                const research = getState().civilization.research.total
                if (!path(['purchased'], adv)) {
                    dispatch(updateCivilization(['research', 'total'], research - adv.cost))
                    dispatch(addAdvancement(name, ac))
                    dispatch(updateAdvancementCosts())
                }
            }
        case AdvName.bartering:
            return (dispatch: Dispatch<any>, getState: Store<any>['getState']) => {
                const adv: Advancement = getState().advancements.find((a: Advancement) => a.name === AdvName.bartering);
                const name = adv.name
                const research = getState().civilization.research.total
                if (!path(['purchased'], adv)) {
                    dispatch(updateCivilization(['research', 'total'], research - adv.cost))
                    dispatch(addAdvancement(name, ac))
                    dispatch(updateAdvancementCosts())
                }
            };
        case AdvName.clothing:
            return (dispatch: Dispatch<any>, getState: Store<any>['getState']) => {
            const adv: Advancement = getState().advancements.find((a: Advancement) => a.name === AdvName.clothing);
            const name = adv.name
            const research = getState().civilization.research.total
            if (!path(['purchased'], adv)) {
                dispatch(updateCivilization(['research', 'total'], research - adv.cost))
                dispatch(addAdvancement(name, ac))
                dispatch(updateAdvancementCosts())
            }
        };
        case AdvName.irrigation:
            return (dispatch: Dispatch<any>, getState: Store<any>['getState']) => {
            const adv: Advancement = getState().advancements.find((a: Advancement) => a.name === AdvName.irrigation);
            const name = adv.name
            const research = getState().civilization.research.total
            if (!path(['purchased'], adv)) {
                dispatch(updateCivilization(['research', 'total'], research - adv.cost))
                dispatch(addAdvancement(name, ac))
                dispatch(updateAdvancementCosts())
            }
        };
        case AdvName.mysticism:
            return (dispatch: Dispatch<any>, getState: Store<any>['getState']) => {
            const adv: Advancement = getState().advancements.find((a: Advancement) => a.name === AdvName.mysticism);
            const name = adv.name
            const research = getState().civilization.research.total
            if (!path(['purchased'], adv)) {
                dispatch(updateCivilization(['research', 'total'], research - adv.cost))
                dispatch(addAdvancement(name, ac))
                dispatch(updateAdvancementCosts())
            }
        };
        case AdvName.pottery:
            return (dispatch: Dispatch<any>, getState: Store<any>['getState']) => {
            const adv: Advancement = getState().advancements.find((a: Advancement) => a.name === AdvName.pottery);
            const name = adv.name
            const research = getState().civilization.research.total
            if (!path(['purchased'], adv)) {
                dispatch(updateCivilization(['research', 'total'], research - adv.cost))
                dispatch(addAdvancement(name, ac))
                dispatch(updateAdvancementCosts())
            }
        };
        case AdvName.sailing:
            return (dispatch: Dispatch<any>, getState: Store<any>['getState']) => {
            const adv: Advancement = getState().advancements.find((a: Advancement) => a.name === AdvName.sailing);
            const name = adv.name
            const research = getState().civilization.research.total
            if (!path(['purchased'], adv)) {
                dispatch(updateCivilization(['research', 'total'], research - adv.cost))
                dispatch(addAdvancement(name, ac))
                dispatch(updateAdvancementCosts())
            }
        };
        case AdvName.woodcutting:
            return (dispatch: Dispatch<any>, getState: Store<any>['getState']) => {
            const adv: Advancement = getState().advancements.find((a: Advancement) => a.name === AdvName.woodcutting);
            const name = adv.name
            const research = getState().civilization.research.total
            if (!path(['purchased'], adv)) {
                dispatch(updateCivilization(['research', 'total'], research - adv.cost))
                dispatch(addAdvancement(name, ac))
                dispatch(updateAdvancementCosts())
                dispatch(unlockAdvancement(AdvName.sailing))
            }
        };
        case AdvName.writing:
            return (dispatch: Dispatch<any>, getState: Store<any>['getState']) => {
            const adv: Advancement = getState().advancements.find((a: Advancement) => a.name === AdvName.writing);
            const name = adv.name
            const research = getState().civilization.research.total
            if (!path(['purchased'], adv)) {
                dispatch(updateCivilization(['research', 'total'], research - adv.cost))
                dispatch(addAdvancement(name, ac))
                dispatch(updateAdvancementCosts())
            }
        };
        default:
            return undefined;
    }
}