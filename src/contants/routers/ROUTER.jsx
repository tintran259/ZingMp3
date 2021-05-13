import { PATH } from "../index";
import HomePage from "../../pages/Home";
import AboutPage from "../../pages/About";

const ROUTER = [
  {
    id: Math.random(),
    exact: true,
    path: PATH.HOME_PAGE,
    component: HomePage,
  },
  {
    id: Math.random(),
    exact: false,
    path: PATH.ABOUT_PAGE,
    component: AboutPage,
  },
];

export default ROUTER;
