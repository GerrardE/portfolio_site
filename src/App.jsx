import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import routes from "@ui/routes/route";
import "@ui/assets/css/styles.css";
import store from "@application/config/store/store";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Router>
          <Switch>
            {routes.map(route => {
              return (
                <Route
                  exact
                  key={route.path}
                  path={route.path}
                  component={route.component}
                />
              );
            })}
          </Switch>
        </Router>
      </Provider>
    </Fragment>
  );
}
