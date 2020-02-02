/*
 * @Author: your name
 * @Date: 2020-01-26 16:35:54
 * @LastEditTime : 2020-02-02 12:29:40
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/index.js
 */
import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./index.less";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { mainRoutes } from "./routes";
import zhCn from "antd/lib/locale-provider/zh_CN";
import { ConfigProvider } from "antd";
render(
  <ConfigProvider locale={zhCn}>
    <Router>
      <Switch>
        <Route
          path="/admin"
          render={routerProps => {
            //   权限 需要登录才能访问/Admin页面
            return <App {...routerProps} />;
          }}
        />
        {mainRoutes.map(route => {
          return (
            <Route
              key={route.pathname}
              path={route.pathname}
              component={route.component}
            />
          );
        })}
        <Redirect to="/admin" from="/" exact />
        <Redirect to="/404" />
      </Switch>
    </Router>
  </ConfigProvider>,
  document.querySelector("#root")
);
