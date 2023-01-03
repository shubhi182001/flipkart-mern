import {createStore, combineReducers, applyMiddleware} from "redux"
import {composeWithDevTools} from 'redux-devtools-extension'; //to connect with chrome redux extension
import thunk from 'redux-thunk';
import { getProductDetailsReducer, getProductReducer } from "./reducers/productReducer";
import {cartReducer} from "./reducers/cartReducer"

const reducer = combineReducers({
    getProducts: getProductReducer,
    getProductDetailsReducer:getProductDetailsReducer,
    cart: cartReducer
});

const middleware = [thunk];


const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;