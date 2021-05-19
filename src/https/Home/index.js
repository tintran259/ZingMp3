import api from "../api";

const HomeServices = {
  getListSong: () => api.call().get("/list-song"),
  getListVideo: ({ page }) => api.call().get(`/list-video?_page=1&_limit=${page}`),
};

export default HomeServices;
