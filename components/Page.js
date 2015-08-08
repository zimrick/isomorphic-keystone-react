'use strict';

import React from 'react';
import { connectToStores } from 'fluxible-addons-react';

import PageStore from '../stores/PageStore';

@connectToStores([PageStore], (context) => context.getStore(PageStore).getState())
class Page extends React.Component {
    static contextTypes = {
        getStore: React.PropTypes.func,
        executeAction: React.PropTypes.func
    };
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <p>{this.props.content}</p>
        );
    }
}

export default Page;
