import PATH from "../PATH";
import HomePage from "../../pages/Home";
import AboutPage from "../../pages/About";

const ROUTER = [
  {
    id: Math.random(),
    exact: true,
    path: PATH.HOME_PAGE,
    component: HomePage,
    redirect: "/",
  },
  {
    id: Math.random(),
    exact: true,
    path: PATH.HOME_PAGE_REDIRECT,
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
