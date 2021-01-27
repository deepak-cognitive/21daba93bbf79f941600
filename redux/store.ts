import { applyMiddleware, createStore } from 'redux';
import Thunk from 'redux-thunk';
import { reducer } from './reducer';

const store = createStore(reducer, applyMiddleware(Thunk));
 
export default store 