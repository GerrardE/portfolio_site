import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import store from "@application/config/store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "@ui/assets/css/fontawesome.css";

import "@ui/assets/css/blog.css";
import "@ui/assets/css/custom.css";
import "@ui/assets/css/all.min.css";
import "@ui/assets/css/simple-line-icons.css";

export default function App({ element, props }) {
  return (
    <Fragment>
      <Toaster position="top-right" reverseOrder />
      <Provider store={store} {...props}>
        {element}
      </Provider>
    </Fragment>
  );
}
