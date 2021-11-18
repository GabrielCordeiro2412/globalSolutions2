import {CardProduto, BtnFinalizar, SectionHome} from '../../styled'
import back from '../../img/back.svg'
import {Link} from 'react-router-dom'

export default function ListaProd(){
    return(
        <>
            <Link to="/home"><img src={back} alt="Voltar"/></Link>
            <h1>Minha Lista</h1>
            <SectionHome>
            <CardProduto>
                <h1>Mercado do Tiozinho</h1>
                <h2>15 produtos disponíveis</h2>
                <h3>Endereço: Rua do Charme, 456</h3>
                <button className="btnSelect">Excluir da Lista</button>
            </CardProduto>
            <CardProduto>
                <h1>Mercado do Tiozinho</h1>
                <h2>15 produtos disponíveis</h2>
                <h3>Endereço: Rua do Charme, 456</h3>
                <button className="btnSelect">Excluir da Lista</button>
            </CardProduto>
            <CardProduto>
                <h1>Mercado do Tiozinho</h1>
                <h2>15 produtos disponíveis</h2>
                <h3>Endereço: Rua do Charme, 456</h3>
                <button className="btnSelect">Excluir da Lista</button>
            </CardProduto>
            <CardProduto>
                <h1>Mercado do Tiozinho</h1>
                <h2>15 produtos disponíveis</h2>
                <h3>Endereço: Rua do Charme, 456</h3>
                <button className="btnSelect">Excluir da Lista</button>
            </CardProduto>
            <CardProduto>
                <h1>Mercado do Tiozinho</h1>
                <h2>15 produtos disponíveis</h2>
                <h3>Endereço: Rua do Charme, 456</h3>
                <button className="btnSelect">Excluir da Lista</button>
            </CardProduto>
            </SectionHome>

            <BtnFinalizar>Finalizar Pedido</BtnFinalizar>
        </>
    )
}