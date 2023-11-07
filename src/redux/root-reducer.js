import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart.slice";
import { postReducer } from "./products/products.slice";
import counterReducer from "./counter/counter.slice";

const rootReducer = combineReducers({
    cart: cartReducer,
    post: postReducer,
    counter: counterReducer
});

export default rootReducer;