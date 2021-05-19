// contants
import { NAME_ACTION } from "../../contants/index";

// API
import HomeServices from "../../https/Home";

export const actGetListVideo = (data) => ({
  type: NAME_ACTION.GET_LIST_VIDEO,
  payload: {
    data,
  },
});

export const asyncGetListVideo = ({ page }) => async (dispatch) => {
  try {
    const response = await HomeServices.getListVideo({ page });
    const { data } = response;
    dispatch(actGetListVideo(data));
  } catch (error) {
    console.log("Error Services in Thunk:", error);
  }
};
