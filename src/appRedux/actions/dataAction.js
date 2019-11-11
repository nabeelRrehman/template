import { SWITCH_LANGUAGE, LANG, TOGGLE_COLLAPSED_NAV, WINDOW_WIDTH } from "../../constants/ActionTypes";


export function toggleCollapsedSideNav(navCollapsed) {
    return { type: TOGGLE_COLLAPSED_NAV, navCollapsed };
}