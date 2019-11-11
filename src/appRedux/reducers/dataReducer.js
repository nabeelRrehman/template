import { LANG } from "constants/ActionTypes";


const initialSettings = {
    LANG: null
};

const dataReducer = (state = initialSettings, action) => {
    switch (action.type) {
        case LANG:
            return {
                ...state,
                language: action.payload,

            };
        default:
            return state;
    }
};

export default dataReducer;
