// contants
import ACTION_TYPE from "../../contants/ActionType/Home/actionType";
// API
import HomeServices from "../../https/Home";

export const actGetListVideo = (data) => ({
  type: ACTION_TYPE.GET_LIST_VIDEO,
  payload: {
    data,
  },
});

export const actGetListAlbumHot = (data) => ({
  type: ACTION_TYPE.GET_LIST_ALBUM_HOT,
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

export const asyncGetListAlbumHot = ({ page }) => async (dispatch) => {
  try {
    const response = await HomeServices.getListAlbumHot({ page });
    const { data } = response;
    dispatch(actGetListAlbumHot(data));
  } catch (error) {
    console.log("Error Services in Thunk:", error);
  }
};
