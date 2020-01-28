import React, { Component } from 'react';

import LocalStorage from '../../helpers/LocalStorage';
import './menu.css';

class Menu extends Component {
    state = {
        menu: [
            {
                name: 'Categorias',
                url: 'categories'
            },
            {
                name: 'Cursos',
                url: 'courses'
            }
        ],
        localStorage: new LocalStorage(),
        logged: false
    }

    componentDidUpdate() {

    }

    componentWillUpdate() {

    }

    isLogged = () => {
        const localStorage = this.state.localStorage.get()

        if(localStorage) {
            console.log('logado');
            return
        }

        console.log('não logado');
        
    }

    render() {
        return (
            <nav className="bg-dark d-flex justify-content-between p-2">
                <a className="navbar-brand text-white" href="/">
                    <i className="fas fa-school"></i>
                </a>

                <span className="menu-icon">
                    <i className="fas fa-bars text-white"></i>
                </span>

                <ul className="d-flex list-unstyled mb-0">
                    <span className="menu-icon">
                        <i className="fas fa-bars text-white"></i>
                    </span>
                    {
                        this.state.menu.map((item, indice) => (
                            <li key={indice} className="nav-item active">
                                <a className="nav-link text-white" href={'/main/' + item.url}>{item.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        );
    }
}

export default Menu;