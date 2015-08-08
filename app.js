'use strict';

import Fluxible from 'fluxible';
import ApplicationStore from './stores/ApplicationStore';
import PageStore from './stores/PageStore';

import fetchrPlugin from 'fluxible-plugin-fetchr';
import RoutesComponent from './config/Routes';

let pluginInstance = fetchrPlugin({
	xhrPath: '/api'
});

const app = new Fluxible({
  component: RoutesComponent,
  stores: [
    ApplicationStore,
    PageStore
  ]
});

app.plug(pluginInstance);

export default app;
