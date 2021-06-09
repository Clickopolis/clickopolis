import { SHOW_MENU, Action } from 'actions';


export function currentMenu(state = 'Resources', action: Action<SHOW_MENU>) {
    switch (action.type) {
        case 'SHOW_MENU':
            return action.menuName;
        default:
            return state;
    }
}