import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
const Login = lazy(() => import('./modules/login/Login'))
const Main = lazy(() => import('./modules/main/Main'))

function Routes() {

    return(
        <BrowserRouter>
            <Switch>
                <Suspense fallback={<h1>Carregando...</h1>}>
                    <Route exact path="/" component={ Login } ></Route>
                    <Route path="/main" component={ Main } ></Route>
                </Suspense>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes