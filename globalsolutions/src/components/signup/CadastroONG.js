import ongIMG from '../../img/ongIMG.svg'
import {ContentSignup, SectionLogin} from '../../styled'
import React, {useContext, useState} from 'react'
import {LocalContext} from '../../context/Context'

export default function CadastroONG(){

    const {cadastroONG} = useContext(LocalContext)

    const [dados, setDados] = useState({
        "nome": "",
        "nomeResponsavel": "",
        "cnpj": 0,
        "telefone": "",
        "endereco": "",
        "email": "",
        "senha": ""
    })

    const getDados = (e) => {
        e.preventDefault()
        setDados({...dados, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        cadastroONG(dados)
    
    }

    return(
        <SectionLogin>
        <ContentSignup>
            <form onSubmit={handleSubmit}>
                <h1>Cadastrar ONG</h1>
                <input type="text" placeholder="Nome da ONG" name="email" value={dados.email} onChange={getDados}/>
                <input type="text" placeholder="Nome do responsável pela conta" name="nomeResponsavel" value={dados.nomeResponsavel} onChange={getDados}/>
                <input type="text" placeholder="CNPJ" name="cnpj" value={dados.cnpj} onChange={getDados}/>
                <input type="text" placeholder="Telefone" name="telefone" value={dados.telefone} onChange={getDados}/>
                <input type="text" placeholder="Endereço" name="endereco" value={dados.endereco} onChange={getDados}/>
                <input type="email" placeholder="Email" name="email" value={dados.email} onChange={getDados}/>
                <input type="password" placeholder="Senha" name="senha" value={dados.senha} onChange={getDados}/>
                <button type="submit">Cadastrar ONG</button>
            </form>
            <img src={ongIMG} alt="ONG IMG"/>
        </ContentSignup>
        </SectionLogin>
    )
}