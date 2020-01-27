import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './modules/shared/menu/Menu';
const Login = lazy(() => import('./modules/login/Login'));
const Main = lazy(() => import('./modules/main/Main'));
const Category = lazy(() => import('./modules/category/Category'));

function Routes() {

    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Suspense fallback={<h1>Carregando...</h1>}>
                    <Route exact path="/" component={Login} ></Route>
                    <Route exact path="/main" component={Main} ></Route>
                    <Route exact path="/main/categories" component={Category} ></Route>
                </Suspense>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes