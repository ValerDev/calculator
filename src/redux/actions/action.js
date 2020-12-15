import { MENU } from '../actiontypes';

const { SHOW_MENU } = MENU

export function showMenu(data) {
    return { type: SHOW_MENU, value: data }
}