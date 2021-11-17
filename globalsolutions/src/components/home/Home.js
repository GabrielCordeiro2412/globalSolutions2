import React, {useState, useContext} from 'react'
import Lupa from '../../img/lupa.svg'
import {BarraBuscar, Alinhamento, CardProduto, BottomCard, Buttons, SectionHome, TitleMeusProd } from '../../styled'
import Delete from '../../img/delete.svg'
import Edit from '../../img/edit.svg'
import {LocalContext} from '../../context/Context'

export default function Home(){

    const {sair, userLogin} = useContext(LocalContext)

    const [mercado, setMercado] = useState(userLogin.mercado)


    return(
        <>
        <Alinhamento>
            <h1>Buscar</h1>
            <BarraBuscar>
                <input type="text" placeholder="Buscar produtos" />
                <button><img src={Lupa} alt="Lupa"/></button>
            </BarraBuscar>
        </Alinhamento>

        <TitleMeusProd>Meus Produtos</TitleMeusProd>
        <SectionHome>
            { mercado ? <>
                <CardProduto>
                <h1>Caixa de Leite</h1>
                <h2>15 unidades</h2>
                <p>aqui ficará a descrição do produto aqui ficará a descrição do produto</p>
                <BottomCard>
                    <Buttons>
                        <button><img src={Delete} alt="Delete"/></button>
                        <button className="btn2"><img src={Edit} alt="Edit"/></button>
                    </Buttons>
                    <h3>Validade: 10/11/2020</h3>
                </BottomCard>
            </CardProduto>

            <CardProduto>
                <h1>Caixa de Leite</h1>
                <h2>15 unidades</h2>
                <p>aqui ficará a descrição do produto aqui ficará a descrição do produto</p>
                <BottomCard>
                    <Buttons>
                        <button><img src={Delete} alt="Delete"/></button>
                        <button className="btn2"><img src={Edit} alt="Edit"/></button>
                    </Buttons>
                    <h3>Validade: 10/11/2020</h3>
                </BottomCard>
            </CardProduto>

            <CardProduto>
                <h1>Caixa de Leite</h1>
                <h2>15 unidades</h2>
                <p>aqui ficará a descrição do produto aqui ficará a descrição do produto</p>
                <BottomCard>
                    <Buttons>
                        <button><img src={Delete} alt="Delete"/></button>
                        <button className="btn2"><img src={Edit} alt="Edit"/></button>
                    </Buttons>
                    <h3>Validade: 10/11/2020</h3>
                </BottomCard>
            </CardProduto>

            </> : <>
            <CardProduto>
                <h1>Caixa de Leite</h1>
                <h2>15 unidades</h2>
                <h3>Validade: 10/11/2020</h3>
                <h3>Provedor: Super Mercado Arroz</h3>
                <p>aqui ficará a descrição do produto aqui ficará a descrição do produto</p>
                <button className="btnSelect">Selecionar Produto</button>
            </CardProduto>
            </>}
        </SectionHome>

        
        
        
        </>
    )
}