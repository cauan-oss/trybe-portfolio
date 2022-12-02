import { combineReducers } from "redux";
import { ADD_EMAIL } from "../actions";

const INITIAL_STATE = {};

const exampleReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_EMAIL:
        return {
            ...state
        }
        
        break;
  
    default:
        state;
  }
}

const rootReducers = combineReducers({ exampleReducers })

export default rootReducers;


