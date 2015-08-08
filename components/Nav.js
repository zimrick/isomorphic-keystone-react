'use strict';

import React from 'react';
import {Link} from 'react-router';

class Nav extends React.Component {
    static contextTypes = {
        router: React.PropTypes.func.isRequired
    };
    render() {
        return (
            <ul className="pure-menu pure-menu-open pure-menu-horizontal">
                <li className={this.context.router.isActive('/') ? 'pure-menu-selected' : ''}><Link to='/'>Home</Link></li>
                <li className={this.context.router.isActive('/about') ? 'pure-menu-selected' : ''}><Link to='/about'>About</Link></li>
                <li className={this.context.router.isActive('/sample') ? 'pure-menu-selected' : ''}><Link to='/sample'>Sample</Link></li>
            </ul>
        );
    }
}

export default Nav;
