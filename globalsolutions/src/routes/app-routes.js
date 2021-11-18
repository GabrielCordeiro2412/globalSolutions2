import React, {useState, useContext} from 'react'
import Home from '../components/home/Home'
import CadProd from '../components/cadastrarProd/CadastroProduto'
import ProdutoMercado from '../components/mercado-prod/ProdutosMercado'
import ListaProd from '../components/lista-prod/ListaProd'
import {Route, Switch} from 'react-router-dom'
import Logo from '../img/LOGO.svg'
import {MenuBar, ContainerHome} from '../styled'
import {LocalContext} from '../context/Context'
import {Link} from 'react-router-dom'


export default function AppRoutes(){
    const {sair, userLogin} = useContext(LocalContext)

    const [mercado, setMercado] = useState(userLogin.mercado)

    function handleSair(){
        sair();
    }

    return(
        <>
            <MenuBar>
                <img src={Logo} alt="Logo"/>
                <div className="buttons">
                     {mercado ? <button><Link to="/cadastrarProd">Cadastrar Produto</Link></button> : <Link to="/listaProd">Minha Lista</Link>}
                    <button onClick={handleSair}>Sair</button>
                </div>
            </MenuBar>
        <ContainerHome>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/cadastrarProd" component={CadProd}/>
                <Route path="/prodMercado" component={ProdutoMercado}/>
                <Route path="/listaProd" component={ListaProd}/>
            </Switch>
        </ContainerHome>
        </>
    )
}