import { SWITCH_LANGUAGE, TOGGLE_COLLAPSED_NAV, WINDOW_WIDTH, LANG, CONTENTDATA, ALLUSERS, ALLNOTIFICATION } from "constants/ActionTypes";
import {
  LAYOUT_TYPE,
  LAYOUT_TYPE_FULL,
  NAV_STYLE,
  NAV_STYLE_FIXED,
  THEME_COLOR_SELECTION,
  THEME_COLOR_SELECTION_PRESET,
  THEME_TYPE,
  THEME_TYPE_SEMI_DARK
} from "../../constants/ThemeSetting";

const initialSettings = {
  navCollapsed: true,
  navStyle: NAV_STYLE_FIXED,
  layoutType: LAYOUT_TYPE_FULL,
  themeType: THEME_TYPE_SEMI_DARK,
  colorSelection: THEME_COLOR_SELECTION_PRESET,

  pathname: '',
  width: window.innerWidth,
  isDirectionRTL: false,
  locale: {
    languageId: 'swedish',
    locale: 'sv',
    name: 'Svenska',
    icon: 'se'
  },
  LANG: null,
  CONTENTDATA: null,
  ALLNOTIFICATION: null
};

const settings = (state = initialSettings, action) => {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE':
      return {
        ...state,
        pathname: action.payload.pathname,
        navCollapsed: false
      };
    case TOGGLE_COLLAPSED_NAV:
      return {
        ...state,
        navCollapsed: action.navCollapsed
      };
    case WINDOW_WIDTH:
      return {
        ...state,
        width: action.width,
      };
    case THEME_TYPE:
      return {
        ...state,
        themeType: action.themeType
      };
    case THEME_COLOR_SELECTION:
      return {
        ...state,
        colorSelection: action.colorSelection
      };

    case NAV_STYLE:
      return {
        ...state,
        navStyle: action.navStyle
      };
    case LAYOUT_TYPE:
      return {
        ...state,
        layoutType: action.layoutType
      };

    case SWITCH_LANGUAGE:
      return {
        ...state,
        locale: action.payload,

      };
    case LANG:
      return {
        ...state,
        language: action.payload,

      };
    case CONTENTDATA:
      return {
        ...state,
        content: action.payload,

      };
    case ALLUSERS:
      return {
        ...state,
        allUsers: action.payload,

      };
    case ALLNOTIFICATION:
      return {
        ...state,
        notification: action.payload,

      };
    default:
      return state;
  }
};

export default settings;
