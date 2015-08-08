'use strict';

//
// The page service is responsible for delivering
// the data, requested from actions. In this case,
// the service queries a hardcoded array, but
// this can be easily changed to execute a mongoose
// query on a keystone list etc.
//
// This code is only available on the server!
//
// In order to make data accessible on the client,
// use fetchr to interface with the fetchr api, which
// determines whether we can call directly, or whether
// we need XHR
//
// For an example, see ../actions/navigateAction.js
//

var data = [
	{ id: '192', name: 'About', body: 'Something in here would be great.' },
	{ id: '281', name: 'Home', body: 'More text here would be cool as well.' },
	{ id: '92', name: 'Sample', body: 'Just a sample page.' }
];

export default {
	name: 'pages',
	//
	// So far only using the read method
	//
	read: function(req, resource, params, config, callback) {
		console.log('Getting data!');
		//
		// Callback can be used for async requests on the server
		//
		callback(null, data[0]);
	}
}
