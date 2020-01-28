import React, { Component } from "react";
// import { Button } from "antd";
import { Route, Switch, Redirect } from "react-router-dom";
import { adminRouter } from "./routes";

class App extends Component {
  render() {
    return (
      <div>
        <div>公共区</div>
        <Switch>
          {adminRouter.map(route => {
            return (
              <Route
                exact={route.exact}
                key={route.pathname}
                path={route.pathname}
                render={routeProps => {
                  return <route.component {...routeProps} />;
                }}
              />
            );
          })}
          <Redirect to={adminRouter[0].pathname} from='/admin' exact />
          <Redirect to='/404'/>
        </Switch>
      </div>
    );
  }
}
export default App;
