// libs
import { combineReducers } from "redux";
// reducer
import ListVideoReducer from "./Home/ListVideoReducer";

const RootReducer = combineReducers({
  ListVideoReducer,
});

export default RootReducer;
