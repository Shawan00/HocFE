import { combineReducers } from 'redux';
import counterReducer from './counter';
import { todoReducer } from './todo';

const allReducers = combineReducers({
    counterReducer,
    todoReducer
    // thêm nhiều reducer khác ở đây
});

export default allReducers