import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './modules/login/Login'
import Main from './modules/main/Main'

function Routes() {

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ Login } ></Route>
                <Route path="/main" component={ Main } ></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes