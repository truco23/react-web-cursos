import React, { Component } from 'react';
import LocalStorage from '../../helpers/LocalStorage';

class FormLogin extends Component {

    constructor(props) {

        super(props);

        this.state = {
            name: '',
            message: '',
            localStorage: new LocalStorage()
        }
    }

    handlerSubmit = e => {

        const { name } = this.state;

        e.preventDefault();

        if(!this.validate()) return;
        this.validate();
        this.setLocalStorage(name);
        this.redirectPage();
    }

    handleChangeInput = e => {

        this.setState({ [e.target.name]: e.target.value })
    }

    setLocalStorage = name => {

        this.state.localStorage.set(name)
    }

    redirectPage = () => {

        this.props.props.history.push('/main');
    }

    validate = () => {

        const { name } = this.state;

        if(!name) {
            this.setState({ message: 'Campo obrigatório' });
            return false;            
        }
        return true;
    }

    render() {
        const { message } = this.state;
        
        return (
            <form className="container" onSubmit={this.handlerSubmit}>
                <fieldset>
                    <div className="form-group text-left">
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
                            className="form-text text-danger">
                            {message ? message : ''}
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