import { createStore } from 'redux';
import finalReducer from './reducer';

const Store = createStore(finalReducer);

export default Store;
