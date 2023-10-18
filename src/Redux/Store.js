import {createStore} from 'redux';
import {DataReducer, UserProfileReducer} from './Reducer';
import {combineReducers} from 'redux';

// const store = createStore(DataReducer);
const rootReducer = combineReducers({
  data: DataReducer,
  userProfile: UserProfileReducer,
});

const store = createStore(rootReducer);
// console.log(store.getState());
export default store;
