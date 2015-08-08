'use strict';

import React from 'react';
import { DefaultRoute, Route } from 'react-router';

import Application from '../components/Application';
import Home from '../components/Home';
import About from '../components/About';
import Page from '../components/Page';

const routes = (
  <Route name="app" path="/" handler={Application}>
    <Route name="about" handler={About} />
    <Route name="sample" handler={Page} />
    <DefaultRoute name="home" handler={Home} />
  </Route>
);

export default routes;
