/*
 * @Author: your name
 * @Date: 2020-01-28 16:24:27
 * @LastEditTime : 2020-02-05 20:03:48
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
  ArticleEdit,
  Notifications,
  NoAuth,
  Profile
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
    title: "主页",
    isNav: true,
    icon: "home",
    roles:['001','002','003']
  },
  {
    pathname: "/admin/article",
    component: ArticleList,
    title: "文章管理",
    icon: "unordered-list",
    isNav: true,
    exact: true,
    roles:['001','002']
  },
  {
    pathname: "/admin/article/edit/:id",
    component: ArticleEdit,
    roles:['001','002']

  },
  {
    pathname: "/admin/NoAuth",
    component: NoAuth,
    roles:['001','002','003']
  },
  {
    pathname: "/admin/article/create",
    component: ArticleEdit,
    roles:['001','002']
  },
  {
    pathname: "/admin/notifications",
    component: Notifications,
    roles:['001','002','003']
  },
  {
    pathname: "/admin/settings",
    component: Settings,
    icon: "setting",
    title: "设置",
    isNav: true,
    roles:['001']
  },
  {
    pathname: "/admin/Profile",
    component: Profile,
    roles:['001','002','003']
  }
];
