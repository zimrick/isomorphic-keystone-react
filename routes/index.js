'use strict';

import React from 'react';
import Router from 'react-router';

import FluxibleComponent from 'fluxible-addons-react/FluxibleComponent';
import createElement from 'fluxible-addons-react/createElementWithContext';

import serialize from 'serialize-javascript';

import keystone from 'keystone';
import middleware from './middleware';

import app from '../app';

import navigateAction from '../actions/navigateAction';
import PageService from '../services/PageService';

var HtmlComponent = React.createFactory(require('../components/Html'));
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);
// keystone.pre('routes', function(req, res, next) {
//  if(req.path.substring(0, 4) === '/api' || req.path.substring(0, 9) === '/keystone') {
//    next();
//  }
//  else {
//    res.send('Hello World!');
//  }
// });

// Import Route Controllers
// var routes = {
//   views: importRoutes('./views')
// };

// Setup Route Bindings
//
// The placement of fetchr in here is perhaps not the best of ideas,
// and should be refactored.
//
// This part is where we call react router and execute
// the navigation action to put the initial data
// into the page that will be rendered by react on
// the server.
//
export default function(server) {

  var fetchrPluginInstance = app.getPlugin('FetchrPlugin');
      fetchrPluginInstance.registerService(PageService);

  server.use(fetchrPluginInstance.getXhrPath(), fetchrPluginInstance.getMiddleware());

  server.use(function(req, res, next) {

      // Create a new context for the app
      //
      // We pass in req and xhrContext for fetchr
      //
      var context = app.createContext({
          req: req,
          xhrContext: {
              lang: 'en-US',
              _csrf: 'a3fc2d'
          }
      });

      //
      // Run the router and pass in the url from req
      //
      Router.run(app.getComponent(), req.path, function (Handler, state) {
          //
          // Execute the navigateAction, which will call data,
          // based on the url
          //
          context.executeAction(navigateAction, state, function () {
              //
              // Expose the serialized stores by assigning them
              // to window. The resulting js string will be passed
              // as a property to react.
              //
              var exposed = 'window.App=' + serialize(app.dehydrate(context)) + ';';

              //
              // Render the react app template and inject
              // the component from react-router
              //
              var Component = React.createFactory(Handler);
              var html = React.renderToStaticMarkup(HtmlComponent({
                  context: context.getComponentContext(),
                  state: exposed,
                  markup: React.renderToString(
                      React.createElement(
                          FluxibleComponent,
                          { context: context.getComponentContext() },
                          Component()
                      )
                  )
              }));

              //
              // Send the html back to the client
              //
              res.send(html);
          });
      });

  });

}
