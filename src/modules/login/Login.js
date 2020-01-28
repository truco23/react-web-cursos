import React, { Component } from 'react';
// import Teste from './Teste';
import FormLogin from '../shared/forms/FormLogin'
import './login.css'

class Login extends Component {
    
    // constructor(props) {

    //     super(props);

    //     this.state = {  
    //         nome: 'Nome',
    //         email: 'E-mail'
    //     }
    // }

    render() { 

        return (  
            // <Teste valores={this.state} />
            <section className="login-wrapper bg-light">
                <div className="login-content bg-white rounded">
                    <FormLogin props={this.props} />
                </div>
            </section>
        );
    }
}
 
export default Login;