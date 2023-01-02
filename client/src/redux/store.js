import {createStore, combineReducers, applyMiddleware} from "redux"
import {composeWithDevTools} from 'redux-devtools-extension'; //to connect with chrome redux extension
import thunk from 'redux-thunk';
import { getProductDetailsReducer, getProductReducer } from "./reducers/productReducer";


const reducer = combineReducers({
    getProducts: getProductReducer,
    getProductDetailsReducer:getProductDetailsReducer
});

const middleware = [thunk];


const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;