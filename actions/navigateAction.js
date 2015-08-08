'use strict';

export default function (actionContext, payload, done) {

	//
	// The fetchr service is exposed via the actionContext
	//
	// Fetchr will determine whether we can access the data
	// directly via the PageService, or whether we need XHR
	//
	actionContext.service.read('pages', {}, {}, (err, pageData) => {

		console.log('Received page data: ', pageData);

		actionContext.dispatch('CHANGE_ROUTE', payload);
		actionContext.dispatch('LOAD_PAGE', pageData);

		// actionContext.dispatch('LOADED_DATA', pageData);
    done();
	});

}
