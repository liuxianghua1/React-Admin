/*
 * @Author: your name
 * @Date: 2020-01-28 16:24:27
 * @LastEditTime : 2020-01-28 16:31:43
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/routes/index.js
 */
import {
  Dashboard,
  Login,
  NotFound,
  Settings,
  ArticleList,
  ArticleEdit
} from "../views";

export const mainRouter = [
  {
    pathname: "/login",
    component: Login
  },
  {
    pathname: "/404",
    component: NotFound
  }
];

export const adminRouter = [
  {
    pathname: "/admin/dashboard",
    component: Dashboard
  },
  {
    pathname: "/admin/settings",
    component: Settings
  },
  {
    pathname: "/admin/article",
    component: ArticleList,
    exact: true
  },
  {
    pathname: "/admin/article/edit/:id",
    component: ArticleEdit
  }
];
