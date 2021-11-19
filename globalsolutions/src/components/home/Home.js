import React, {useState, useContext} from 'react'
import Lupa from '../../img/lupa.svg'
import {BarraBuscar, Alinhamento, CardProduto, BottomCard, Buttons, SectionHome, TitleMeusProd } from '../../styled'
import Delete from '../../img/delete.svg'
import Edit from '../../img/edit.svg'
import {LocalContext} from '../../context/Context'
import ProdMercado from '../mercado-prod/ProdutosMercado'
import {Link} from 'react-router-dom'


export default function Home(){

    const {userLogin} = useContext(LocalContext)

    const [mercado, setMercado] = useState(userLogin.mercado)

    const cards = [
        {titulo: "Mercado do tio", qtdProd: "15", endereco: "Rua do Charles, 123", id: 2313131},
        {titulo: "Quitandinha Esquina", qtdProd: "8", endereco: "Rua das Flores, 143", id: 2313131},
        {titulo: "Julia Frigo", qtdProd: "25", endereco: "Rua do Sangue Bom, 321", id: 2313131},
    ]

    const cardsMercado = [
        {titulo: "Caixa de Leite", qtdProd: "6", descricao: "aqui ficará a descrição do produto aqui ficará a descrição do produto", validade: "11/12/2021"},
        {titulo: "Caixa de Leite", qtdProd: "6", descricao: "aqui ficará a descrição do produto aqui ficará a descrição do produto", validade: "11/12/2021"},
        {titulo: "Caixa de Leite", qtdProd: "6", descricao: "aqui ficará a descrição do produto aqui ficará a descrição do produto", validade: "11/12/2021"}
    ]

    const cardBox = cards.map((c, i) => 
        <CardProduto key={i}>
                <h1>{c.titulo}</h1>
                <h2>{c.qtdProd} produtos disponíveis</h2>
                <h3>Endereço: {c.endereco}</h3>
                <Link to={`/prodMercado/${c.id}`}><button className="btnSelect" >Ver Produtos</button></Link>
        </CardProduto>
    )

    function teste(){
        <ProdMercado titulo="pinto"/>
    }

    const cardBox2 = cardsMercado.map((c, i) => 
        <CardProduto>
                <h1>{c.titulo}</h1>
                <h2>{c.qtdProd} unidades</h2>
                <p>{c.descricao}</p>
                <BottomCard>
                    <Buttons>
                        <Link><button><img src={Delete} alt="Delete"/></button></Link>
                        <Link><button className="btn2" onClick={teste}><img src={Edit} alt="Edit"/></button></Link>
                    </Buttons>
                    <h3>Validade: {c.validade}</h3>
                </BottomCard>
        </CardProduto>
    )


    return(
        <>
        <Alinhamento>
            <h1>Buscar</h1>
            <BarraBuscar>
                <input type="text" placeholder="Buscar produtos" />
                <button><img src={Lupa} alt="Lupa"/></button>
            </BarraBuscar>
        </Alinhamento>

        { mercado ? (<TitleMeusProd>Meus Produtos</TitleMeusProd>) : (<TitleMeusProd>Mercados perto de mim</TitleMeusProd>)}
        
        <SectionHome>
            { mercado ? <>
                {cardBox2}
            </> : <>
            {cardBox}
            </>}
        </SectionHome>

        
        
        
        </>
    )
}