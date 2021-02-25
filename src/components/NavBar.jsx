import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';

export default class NavBar extends Component {
    
    render() {
        return (
            <header className="navbar navbar-expand-md navbar-light bg-warning">
                <a className="navbar-brand font-weight-bold" href="/">Le site D'Allocine Revisité</a>
                <button className="navbar-toggler">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ml-2">
                            <NavLink exact to='/' className="nav-link text-black font-weight-bold" activeClassName="text-muted">Accueil</NavLink>
                        </li>
                        <li className="nav-item ml-2">
                            <NavLink to='/favorie' className="nav-link text-black font-weight-bold" activeClassName="text-muted">Favories</NavLink>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}