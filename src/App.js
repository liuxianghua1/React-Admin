/*
 * @Author: your name
 * @Date: 2020-01-26 16:37:07
 * @LastEditTime : 2020-02-05 19:36:25
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/App.js
 */
import React, { Component } from "react";
// import { Button } from "antd";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { adminRoutes } from "./routes";
import { Frame } from "./components";
const menus = adminRoutes.filter(route => route.isNav === true);
const mapState = state => ({
  isLogin: state.users.isLogin,
  role: state.users.role
});
@connect(mapState)
class App extends Component {
  render() {
    return this.props.isLogin ? (
      <Frame menus={menus}>
        <Switch>
          {adminRoutes.map(route => {
            return (
              <Route
                exact={route.exact}
                key={route.pathname}
                path={route.pathname}
                render={routeProps => {
                  const hasPermission = route.roles.includes(this.props.role)
                  return hasPermission  ? <route.component {...routeProps} /> : <Redirect to="/admin/NoAuth"/>
                }}
              />
            );
          })}
          <Redirect to={adminRoutes[0].pathname} from="/admin" exact />
          <Redirect to="/404" />
        </Switch>
      </Frame>
    ) : (
      <Redirect to="/login" />
    );
  }
}
export default App;
