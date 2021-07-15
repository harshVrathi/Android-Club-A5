import {createStore,combineReducers} from 'redux';
import anitreduce from './reducers/listreduce';

const rootReducer=combineReducers({
  anitreduce: anitreduce
})

Storeconfig=() => createStore(rootReducer);

export default Storeconfig;