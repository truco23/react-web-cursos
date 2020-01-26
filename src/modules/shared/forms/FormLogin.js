import React, { Component } from 'react';

class FormLogin extends Component {

    constructor(props) {

        super(props);

        this.state = {
            name: ''
        }
    }

    handlerSubmit = e => {

        const { name } = this.state;

        e.preventDefault();

        this.setLocalStorage(name);
        this.redirectPage();
    }

    handleChangeInput = e => {

        this.setState({ [e.target.name]: e.target.value })
    }

    setLocalStorage = name => {

        window.localStorage.setItem('login:reactjs', name)
    }

    redirectPage = () => {

        this.props.props.history.push('/main');
    }

    render() {
        return (
            <form className="container" onSubmit={this.handlerSubmit}>
                <fieldset>
                    <div className="form-group text-left">
                        <label htmlFor="name">Nome para login</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="name"
                            aria-describedby="nameHelp"
                            placeholder="Digite o seu nome" 
                            onChange={this.handleChangeInput}
                        />

                        <small
                            id="nameHelp"
                            className="form-text text-muted">
                            Nome obrigatório
                        </small>
                    </div>
                </fieldset>

                <fieldset>
                    <button 
                        type="submit" 
                        className="btn btn-primary btn-block">
                            Entrar
                    </button>
                </fieldset>
            </form>
        );
    }
}

export default FormLogin;