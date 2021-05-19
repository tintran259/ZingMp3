import axios from "axios";

const BASE_URL = "https://my-json-server.typicode.com/tintran259/db-zingmp3";

const api = {
  call() {
    return axios.create({
      baseURL: BASE_URL,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  },
};

export default api;
