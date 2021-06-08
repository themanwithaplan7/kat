import React from 'react';
import { Route, IndexRoute } from 'react-router-dom';
import App from './App';
import SomePage from './pages/SomePage';

export default (
    <Route path="/" component={App}>
      <Route path="/some/where" component={SomePage} />
    </Route>
  );