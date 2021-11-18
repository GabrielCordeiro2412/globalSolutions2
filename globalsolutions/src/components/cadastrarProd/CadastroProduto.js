import hamburgerIMG from '../../img/hamburgerIMG.svg'
import {ContentSignup, SectionLogin} from '../../styled'
import {LocalContext} from '../../context/Context'
import React, {useContext, useState} from 'react'

export default function CadastroProduto(){

    const {cadastroProduto} = useContext(LocalContext)

    const [dados, setDados] = useState({
        "nome": "",
        "quantidade": 0,
        "descricao": "",
        "dataValidade": "",
    })


    const getDados = (e) => {
        e.preventDefault()
        setDados({...dados, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        cadastroProduto(dados)
    
    }

    return(
        <SectionLogin>
        <ContentSignup>
            <form onSubmit={handleSubmit}>
                <h1>Cadastrar Produto</h1>
                <input type="text" placeholder="Nome do Produto" name="nome" value={dados.nome} onChange={getDados}/><br/>
                <input type="number" placeholder="Quantidade" name="quantidade" value={dados.quantidade} onChange={getDados}/><br/>
                <input type="text" placeholder="Descrição" name="descricao" value={dados.descricao} onChange={getDados}/><br/>
                <input type="date" placeholder="Data de Validade" name="dataValidade" value={dados.dataValidade} onChange={getDados}/><br/>
                
                <button type="submit">Salvar Produto</button>
            </form>
            <img src={hamburgerIMG} alt="Hamburger"/>
        </ContentSignup>
        </SectionLogin>
    )
}