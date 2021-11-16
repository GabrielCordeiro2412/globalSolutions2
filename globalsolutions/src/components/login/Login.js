
import {Link} from 'react-router-dom'
import React, {useContext} from 'react';
import Logo from '../../img/LOGO.svg'
import {SectionLogin} from '../../styled'

import {LocalContext} from '../../context/Context'

export default function Login(){

    const {login} = useContext(LocalContext)

    function handleLogin(){
        login();
    }

    return(
        <SectionLogin>
            <form onSubmit={handleLogin}>
                <img src={Logo} alt="Logo"/>
                <input type="text" name="inputEmail" placeholder="email"/>
                <input type="password" name="inputSenha" placeholder="senha"/>
                <button type="submit" name="btnSubmit">Fazer login</button>
            </form>
            <p>Não possui conta?<Link to="/chooseSignup"> Faça seu cadastro</Link></p>
        </SectionLogin>
    )
}