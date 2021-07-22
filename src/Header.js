import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';

export class Header extends Component {
    render() {
        return (
            <header>
                <NavLink to="/" component={Home} />
                <NavLink to="/About" component={About} />
            </header>
        )
    }
}

export default Header
