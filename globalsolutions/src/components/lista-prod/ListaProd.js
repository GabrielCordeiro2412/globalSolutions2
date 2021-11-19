import {CardProduto, BtnFinalizar, SectionHome, BottomCard, Buttons} from '../../styled'
import back from '../../img/back.svg'
import {Link} from 'react-router-dom'

export default function ListaProd(){

    const cardsMercado = [
        {titulo: "Caixa de Leite", qtdProd: "6", descricao: "aqui ficará a descrição do produto aqui ficará a descrição do produto", validade: "11/12/2021"},
        {titulo: "Caixa de Leite", qtdProd: "6", descricao: "aqui ficará a descrição do produto aqui ficará a descrição do produto", validade: "11/12/2021"},
        {titulo: "Caixa de Leite", qtdProd: "6", descricao: "aqui ficará a descrição do produto aqui ficará a descrição do produto", validade: "11/12/2021"}
    ]

    const cardBox = cardsMercado.map((c, i) => 
        <CardProduto>
                <h1>{c.titulo}</h1>
                <h2>{c.qtdProd} unidades</h2>
                <p>{c.descricao}</p>
                <button className="btnSelect">Excluir da Lista</button>
        </CardProduto>
    )

    return(
        <>
            <Link to="/home"><img src={back} alt="Voltar"/></Link>
            <h1>Minha Lista</h1>
            <SectionHome>
                {cardBox}
            </SectionHome>

            <BtnFinalizar>Finalizar Pedido</BtnFinalizar>
        </>
    )
}