import React from 'react'
import Login from '../components/login/Login'
import CadastroONG from '../components/signup/CadastroONG'
import CadastroMercado from '../components/signup/CadastroMercado'
import EscolhaCadastro from '../components/signup/EscolhaCadastro'
import {Route, Switch} from 'react-router-dom'


export default function AuthRoutes(){
    return(
        <section>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/login" component={Login}/>
                <Route path="/cadastroONG" component={CadastroONG}/>
                <Route path="/chooseSignup" component={EscolhaCadastro}/>
                <Route path="/cadastroMercado" component={CadastroMercado}/>
            </Switch>
        </section>
    )
}