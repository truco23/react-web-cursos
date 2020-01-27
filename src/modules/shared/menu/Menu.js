import React, { Component } from 'react';

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
        ]
    }
    render() {
        return (
            <nav className="bg-dark d-flex justify-content-between p-2">
                <a className="navbar-brand text-white" href="/main">
                    <i className="fas fa-school"></i>
                </a>

                <ul className="d-flex list-unstyled mb-0">
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