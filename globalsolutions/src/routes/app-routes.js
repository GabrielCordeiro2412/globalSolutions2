import React from 'react'
import Home from '../components/home/Home'
import {Route, Switch} from 'react-router-dom'


export default function AppRoutes(){
    return(
        <section>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/home" component={Home}/>
            </Switch>
        </section>
    )
}