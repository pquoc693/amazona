import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {
    productReducers,
    productDetailsReducer,
} from './reducers/productReducers';

import data from './data';

const initialState = {};
const reducer = combineReducers({
    productList: productReducers,
    productDetails: productDetailsReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const reducer = (state, action) =>{
//   return {products: data.products};
// }

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;