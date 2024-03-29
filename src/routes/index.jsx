import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import { LoginLayout } from '../features/login'

function Routes() {
  return (
    <Router>
          <Switch>
            <Route path="/login" component={LoginLayout} />
          </Switch>
    </Router>
  )
}

export {
  Routes
}
