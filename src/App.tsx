import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { SearchView } from './views/SearchView';

function App() {
  return (
    <Router>
      <Switch>
        <Route component={SearchView} exact path="/" />
      </Switch>
    </Router>
  );
}

export default App;
