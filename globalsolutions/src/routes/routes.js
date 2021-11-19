import React, {useContext} from 'react';

import AppRoutes from './app-routes'
import AuthRoutes from './auth-routes'

import {LocalContext} from '../context/Context'


export default function Routes(){
    const { signed } = useContext(LocalContext);

    return(
        signed ? <AppRoutes/> : <AuthRoutes/>
    )
}