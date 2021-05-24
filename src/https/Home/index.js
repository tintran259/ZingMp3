// axiosContants
import axiosConstant from "../api";

const HomeServices = {
  getListSong: () => axiosConstant.call().get("/list-song"),
  getListVideo: ({ page }) => axiosConstant.call().get(`/list-video?_page=1&_limit=${page}`),
};

export default HomeServices;
