import React from "react";
import {CardProduto, SectionHome } from '../../styled'
import back from '../../img/back.svg'
import {Link} from 'react-router-dom'

export default function ProdutosMercado(props){

    let id = props.match.params.id

    function teste(){
        console.log(id)
    }

    const cards = [
        {titulo: "Caixa de Leite", qtdProd: "6", descricao: "aqui ficará a descrição do produto aqui ficará a descrição do produto", validade: "11/12/2021"},
        {titulo: "Caixa de Leite", qtdProd: "6", descricao: "aqui ficará a descrição do produto aqui ficará a descrição do produto", validade: "11/12/2021"},
        {titulo: "Caixa de Leite", qtdProd: "6", descricao: "aqui ficará a descrição do produto aqui ficará a descrição do produto", validade: "11/12/2021"}
    ]

    const cardBox2 = cards.map((c, i) => 
        <CardProduto>
                <h1>{c.titulo}</h1>
                <h2>{c.qtdProd} unidades</h2>
                <h3>Validade: {c.validade}</h3>
                <p>{c.descricao}</p>
                <button className="btnSelect" onClick={teste}>Selecionar Produto</button>
        </CardProduto>
    )    
    

    return(
        <>
            <Link to="/home"><img src={back} alt="Voltar"/></Link>
            <h1>Mercado do Tiozinho</h1>
            <h3>Endereço: Rua do Charme, 456</h3>
            <SectionHome>
                {cardBox2}
            </SectionHome>
        </>
    )
}