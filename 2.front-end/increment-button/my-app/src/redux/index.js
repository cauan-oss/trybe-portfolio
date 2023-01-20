import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import counterReducer from './reducers/countReduce'


const store = createStore(counterReducer, composeWithDevTools());

export default store;
