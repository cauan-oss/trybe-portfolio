import { combineReducers } from "redux";

const INITIAL_STATE = {};

const exampleReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: 
         return state;
    }
}

const rootReducers = combineReducers({ exampleReducers })

export default rootReducers;


