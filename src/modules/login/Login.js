import React, { Component } from 'react';
// import Teste from './Teste';
import FormLogin from '../shared/forms/FormLogin'

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
            <section>
                <h1>Login</h1>
                <FormLogin props={this.props} />
            </section>
        );
    }
}
 
export default Login;