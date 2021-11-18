import React from "react";
import {CardProduto, SectionHome } from '../../styled'

export default function ProdutosMercado(){
    return(
        <>
            <h1>Mercado do Tiozinho</h1>
            <h3>Endereço: Rua do Charme, 456</h3>
            <SectionHome>
                <CardProduto>
                    <h1>Caixa de Leite</h1>
                    <h2>15 unidades</h2>
                    <h3>Validade: 10/11/2021</h3>
                    <p>a caixa vem lacrado a caixa vem lacrado a caixa vem lacrado</p>
                    <button className="btnSelect">Selecionar Produto</button>
                </CardProduto>
            </SectionHome>
        </>
    )
}