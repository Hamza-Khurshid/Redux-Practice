import {createStore} from 'redux';
import MyCounterRed from '../reducer/myCounterReducer';


let store = createStore( MyCounterRed );

export default store;