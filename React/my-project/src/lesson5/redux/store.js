import {createStore,applyMiddleware,combineReducers} from 'redux';
import { TaskReducer } from './reducers/Taskreducers';
import { RecyclebinReducer} from './reducers/RecyclebinReducer'
import validatorMiddleware from './middleware/validatorMiddleware';

const rootReducer=combineReducers({
    TaskReducer:TaskReducer,
    RecyclebinReducer:RecyclebinReducer,
})

export const store = createStore(rootReducer,applyMiddleware(validatorMiddleware));
export default store;