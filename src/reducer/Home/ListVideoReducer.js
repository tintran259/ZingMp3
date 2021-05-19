// contants
import { NAME_ACTION } from "../../contants";

const initialState = {
  listVideo: [],
  isLogin: false,
};

const ListVideoReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAME_ACTION.GET_LIST_VIDEO:
      return {
        ...state,
        listVideo: action.payload.data,
      };
    default:
      return state;
  }
};

export default ListVideoReducer;
