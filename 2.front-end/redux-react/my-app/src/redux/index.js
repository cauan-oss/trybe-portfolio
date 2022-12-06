import { createStore } from 'redux';
import counterReducer from './reducers/counterReducers';

const store = createStore(counterReducer);

export default store;
