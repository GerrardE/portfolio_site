import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import routes from "@ui/routes/route";
import store from "@application/config/store/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@ui/assets/css/custom.css";
import "@ui/assets/css/styles.css";
import "@ui/assets/css/fontawesome.css";
import "@ui/assets/css/all.min.css";
import "@ui/assets/css/simple-line-icons.css";

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
