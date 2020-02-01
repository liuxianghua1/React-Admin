/*
 * @Author: your name
 * @Date: 2020-01-28 16:24:27
 * @LastEditTime : 2020-02-01 09:45:18
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

export const mainRoutes = [
  {
    pathname: "/login",
    component: Login
  },
  {
    pathname: "/404",
    component: NotFound
  }
];

export const adminRoutes = [
  {
    pathname: "/admin/dashboard",
    component: Dashboard,
    title: "仪表盘",
    isNav: true,
    icon:'dashboard'
  },
  {
    pathname: "/admin/article",
    component: ArticleList,
    title: "文章管理",
    icon:'unordered-list',
    isNav: true,
    exact: true
  },
  {
    pathname: "/admin/article/edit/:id",
    component: ArticleEdit
  },
  {
    pathname: "/admin/settings",
    component: Settings,
    icon:'setting',
    title: "设置",
    isNav: true
  }
];
