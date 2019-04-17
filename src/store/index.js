import {createStore,applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {combineReducers} from 'redux-immutable';
import Home from './reducer/home';
import Classify from './reducer/classify';
import Mine from './reducer/mine';
import Cart from './reducer/cart';

const reducer = combineReducers({
    Home,
    Classify,
    Mine,
    Cart,
})


const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;