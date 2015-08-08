'use strict';

import React from 'react';
import app from './app';
import Router from 'react-router';
import { HistoryLocation } from 'react-router';
import navigateAction from './actions/navigateAction';
import FluxibleComponent from 'fluxible-addons-react/FluxibleComponent';
import createElement from 'fluxible-addons-react/createElementWithContext';

window.React = React;

//
// Get the serialized stores from the window
// object. This was assigned to window in
// ./routes/index.js
//
var dehydratedState = window.App;

//
// App render function
//
function RenderApp(context, Handler) {
    var mountNode = document.getElementById('app');
    var Component = React.createFactory(Handler);
    React.render(
        React.createElement(
            FluxibleComponent,
            { context: context.getComponentContext() },
            Component()
        ),
        mountNode,
        function () {
            console.log('Rendered app!');
        }
    );
}

app.rehydrate(dehydratedState, function (err, context) {
    if (err) {
        throw err;
    }
    window.context = context;

    var firstRender = true;
    //
    // Rerun the router on the client side
    //
    // This should yield the same result as on the server
    //
    Router.run(app.getComponent(), HistoryLocation, function (Handler, state) {
        if (firstRender) {
            //
            // If the app renders for the first time we don't need
            // to rerun the navigate action. The data is already in
            // the stores.
            //
            RenderApp(context, Handler);
            firstRender = false;
        } else {
            //
            // Once the app has rendered for the first time, the next
            // route change will result in the navigateAction being
            // executed. This is where the app switches and becomes
            // a real SPA.
            //
            context.executeAction(navigateAction, state, function () {
                RenderApp(context, Handler);
            });
        }
    });
});
