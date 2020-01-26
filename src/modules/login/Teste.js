import React, { Component } from 'react';

class Teste extends Component {
    
    constructor(props) {

        super(props);

        this.state = {  
            nome: '',
            email: ''
        }
    }

    componentDidMount() {
        const {nome, email} = this.props.valores;

        this.setState({  
            nome,
            email
        })
    }

    render() { 
        const {nome, email} = this.state;

        return (  
            <div>
                <p>{nome}</p>
                <p>{email}</p>
            </div>
        );
    }
}
 
export default Teste;