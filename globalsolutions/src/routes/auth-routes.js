import React from 'react'
import Login from '../components/login/Login'
import CadastroONG from '../components/signup/CadastroONG'
import EscolhaCadastro from '../components/signup/EscolhaCadastro'
import {Route, Switch} from 'react-router-dom'


export default function AuthRoutes(){
    return(
        <section>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={CadastroONG}/>
                <Route path="/chooseSignup" component={EscolhaCadastro}/>
            </Switch>
        </section>
    )
}