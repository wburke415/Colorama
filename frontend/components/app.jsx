import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './navbar/navbar';
import Splash from './splash/splash';

const App = () => (
  <div>
    <Route path="/" component={Navbar} />
    <Route exact path="/" component={Splash} />
  </div>
);

export default App;