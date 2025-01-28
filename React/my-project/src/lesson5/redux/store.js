import {createStore} from 'redux';
import { TaskReducer } from './reducers/Taskreducers';

export const store = createStore(TaskReducer);
export default store;