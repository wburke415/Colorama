import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './navbar/navbar';
import Splash from './splash/splash';
import Posts from './splash/posts';
import InstaSection from './insta_section/insta_section';
import Contact from './contact/contact'

const App = () => (
  <div>
    <Route path="/" component={Navbar} />
    <Route exact path="/" component={Splash} />
    <Route exact path="/" component={Posts} />
    <Route exact path="/" component={InstaSection} />
    <Route exact path="/" component={Contact} />
  </div>
);

export default App;