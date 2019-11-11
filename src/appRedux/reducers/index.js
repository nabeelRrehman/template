import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import Settings from "./Settings";
import Auth from "./Auth";
import dataReducer from "./dataReducer";


const reducers = combineReducers({
  routing: routerReducer,
  settings: Settings,
  auth: Auth,
  dataReducer: dataReducer,
});

export default reducers;
