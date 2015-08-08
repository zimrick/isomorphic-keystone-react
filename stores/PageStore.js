'use strict';

import { createStore } from 'fluxible/addons';

var PageStore = createStore({
    storeName: 'PageStore',
    initialize: function () {
        this.content = 'initial content...';
    },
    handleContentChange: function (payload) {
        this.content = 'content for page with id '+payload.id;
        this.emitChange();
    },
    handlers: {
        'LOAD_PAGE': 'handleContentChange'
    },
    getState: function () {
        return {
            content: this.content
        };
    },
    dehydrate: function () {
        return this.getState();
    },
    rehydrate: function (state) {
        this.content = state.content;
    }
});

export default PageStore;
