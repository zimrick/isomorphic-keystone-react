'use strict';

import React from 'react';
import ApplicationStore from '../stores/ApplicationStore';

class Html extends React.Component {
	render() {
		return (
			<html>
        <head>
          <meta charSet="utf-8" />
          <title>React Router Example</title>
          <meta name="viewport" content="width=device-width, user-scalable=no" />
          <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.5.0/pure-min.css" />
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
        </body>
        <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
        <script src="/js/client.js" defer></script>
      </html>
		);
	}
}

export default Html;
