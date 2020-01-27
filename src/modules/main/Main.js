import React, { Component } from 'react';
import Card from '../shared/card/Card';
import Menu from '../shared/menu/Menu';

class Main extends Component {

    constructor(props) {

        super(props);
        this.state = {
            cards: [
                {
                    title: 'Categorias',
                    description: 'Veja todas as categorias cadastradas em nosso sistema',
                    url: 'categories'
                },
                {
                    title: 'Cursos',
                    description: 'Veja todos os cursos cadastrados em nosso sistema',
                    url: 'courses'
                }
            ]
        }
    }

    render() {
        return (
            <section className="container">
                <Menu />
                {
                    this.state.cards.map((card, indice) => (<Card key={indice} props={card} />))
                }
            </section>
        );
    }
}

export default Main;