
import {Link} from 'react-router-dom'
import React, {useContext, useState} from 'react';
import Logo from '../../img/LOGO.svg'
import {SectionLogin} from '../../styled'
import {LocalContext} from '../../context/Context'

export default function Login(){

   

    const {login} = useContext(LocalContext)

    const [dados, setDados] = useState({
        "email": "",
        "senha": ""
    })

    const getDados = (e) => {
        e.preventDefault()
        setDados({...dados, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        login(dados)

    }

    return(
        <SectionLogin>
            <form onSubmit={handleSubmit}>
                <img src={Logo} alt="Logo"/>
                <input type="text" name="email" placeholder="email" value={dados.email} onChange={getDados}/>
                <input type="password" name="senha" placeholder="senha" value={dados.senha} onChange={getDados}/>
                <button type="submit" name="btnSubmit">Fazer login</button>
            </form>
            <p>Não possui conta?<Link to="/chooseSignup"> Faça seu cadastro</Link></p>
        </SectionLogin>
    )
}