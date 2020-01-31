/*
 * @Author: your name
 * @Date: 2020-01-28 16:06:52
 * @LastEditTime : 2020-01-31 19:26:05
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/views/index.js
 */
import Loadable from "react-loadable";
// import Loadable from "./loadable"; //简易手写Loadable
import { Loading } from "../components";
// import Dashboard from "./Dashboard";
// import Login from "./Login";
// import NotFound from "./NotFound";
// import Settings from "./Settings";
// import ArticleList from "./Article";
// import ArticleEdit from "./Article/Edit";

const Dashboard = Loadable({
  loader: () => import("./Dashboard"),
  loading: Loading
});
const NotFound = Loadable({
  loader: () => import("./NotFound"),
  loading: Loading
});
const Settings = Loadable({
  loader: () => import("./Settings"),
  loading: Loading
});
const Login = Loadable({
  loader: () => import("./Login"),
  loading: Loading
});
const ArticleList = Loadable({
  loader: () => import("./Article"),
  loading: Loading
});
const ArticleEdit = Loadable({
  loader: () => import("./Article/Edit"),
  loading: Loading
});

export { Dashboard, Login, NotFound, Settings, ArticleList, ArticleEdit };
