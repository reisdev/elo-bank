import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Inicial from "../../views/pages/Inicial";

class Router extends Component {
  routes = [{ name: "Inicial", path: "/", Component: Inicial, exact: true }];
  render() {
    return (
      <div className="router">
        <HashRouter>
          <Switch className="router">
            {this.routes.map(route => (
              <Route
                key={route.name}
                path={route.path}
                exact={route.exact}
                name={route.name}
                component={route.Component}
              />
            ))}
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default Router;
