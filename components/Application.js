'use strict';

import React from 'react';
import {connectToStores, provideContext} from 'fluxible-addons-react';
import {RouteHandler} from 'react-router';

import Nav from './Nav';
import ApplicationStore from '../stores/ApplicationStore';

@provideContext
class App extends React.Component {

  static contextTypes = {
    getStore: React.PropTypes.func,
    executeAction: React.PropTypes.func
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Nav />
        <RouteHandler />
      </div>
    );
  }

}

export default App;
