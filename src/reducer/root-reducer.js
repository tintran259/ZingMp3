// libs
import { combineReducers } from "redux";

// reducer
import ListVideoReducer from "./Home/ListVideoReducer";

const RootReducer = combineReducers({
  Video: ListVideoReducer,
});

export default RootReducer;
