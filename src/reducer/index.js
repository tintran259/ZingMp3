// libs
import { createStore, applyMiddleware } from "redux";
import Thunk from "redux-thunk";
// root-reducer
import RootReducer from "./root-reducer";

const Store = createStore(RootReducer, applyMiddleware(Thunk));

export default Store;
