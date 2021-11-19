import mercadoIMG from '../../img/mercadoIMG.svg'
import {ContentSignup, SectionLogin} from '../../styled'
import {LocalContext} from '../../context/Context'
import React, {useContext, useState} from 'react'

export default function CadastroMercado(){

    const {cadastroMercado} = useContext(LocalContext)

    const [dados, setDados] = useState({
        "nome": "",
        "cnpj": "",
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
        cadastroMercado(dados)
    
    }

    return(
        <SectionLogin>
        <ContentSignup>
            <form onSubmit={handleSubmit}>
                <h1>Cadastrar Mercado</h1>
                <input type="text" placeholder="Nome da Mercado" name="nome" value={dados.nome} onChange={getDados}/>
                <input type="text" placeholder="CNPJ" name="cnpj" value={dados.cnpj} onChange={getDados}/>
                <input type="text" placeholder="Telefone" name="telefone" value={dados.telefone} onChange={getDados}/>
                <input type="text" placeholder="Endereço" name="endereco" value={dados.endereco} onChange={getDados}/>
                <input type="email" placeholder="Email" name="email" value={dados.email} onChange={getDados}/>
                <input type="password" placeholder="Senha" name="senha" value={dados.senha} onChange={getDados}/>
                <button type="submit">Cadastrar Mercado</button>
            </form>
            <img src={mercadoIMG} alt="Mercado IMG"/>
        </ContentSignup>
        </SectionLogin>
    )
}