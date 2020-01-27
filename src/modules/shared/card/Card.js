import React, { Component } from 'react';

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { title, description, url } = this.props.props
        return (
            <div className="card mt-1">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={'/main/' + url} className="btn btn-info btn-block">Ir para {title}</a>
                </div>
            </div>
        );
    }
}

export default Card;