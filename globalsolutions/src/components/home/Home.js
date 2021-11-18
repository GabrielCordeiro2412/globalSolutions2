import React, {useState, useContext} from 'react'
import Lupa from '../../img/lupa.svg'
import {BarraBuscar, Alinhamento, CardProduto, BottomCard, Buttons, SectionHome, TitleMeusProd } from '../../styled'
import Delete from '../../img/delete.svg'
import Edit from '../../img/edit.svg'
import {LocalContext} from '../../context/Context'
import {Link} from 'react-router-dom'

export default function Home(){

    const {userLogin} = useContext(LocalContext)

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

        { mercado ? (<TitleMeusProd>Meus Produtos</TitleMeusProd>) : (<TitleMeusProd>Mercados perto de mim</TitleMeusProd>)}
        
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
                <h1>Mercado do Tiozinho</h1>
                <h2>15 produtos disponíveis</h2>
                <h3>Endereço: Rua do Charme, 456</h3>
                <Link to="/prodMercado"><button className="btnSelect">Vizualizar Produtos</button></Link>
            </CardProduto>
            <CardProduto>
                <h1>Mercado do Tiozinho</h1>
                <h2>15 produtos disponíveis</h2>
                <h3>Endereço: Rua do Charme, 456</h3>
                <button className="btnSelect">Vizualizar Produtos</button>
            </CardProduto>
            <CardProduto>
                <h1>Mercado do Tiozinho</h1>
                <h2>15 produtos disponíveis</h2>
                <h3>Endereço: Rua do Charme, 456</h3>
                <button className="btnSelect">Vizualizar Produtos</button>
            </CardProduto>
            </>}
        </SectionHome>

        
        
        
        </>
    )
}