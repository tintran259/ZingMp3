// contants
import CONTANTS from "../../contants";

const { ACTION_TYPE } = CONTANTS;

const initialState = {
  listVideo: [],
  isLogin: false,
};

const ListVideoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.GET_LIST_VIDEO:
      return {
        ...state,
        listVideo: action.payload.data,
      };
    default:
      return state;
  }
};

export default ListVideoReducer;
