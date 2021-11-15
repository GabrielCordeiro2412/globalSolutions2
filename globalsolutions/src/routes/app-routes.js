import React, {useState, useContext} from 'react'
import Home from '../components/home/Home'
import CadProd from '../components/cadastrarProd/CadastroProduto'
import {Route, Switch} from 'react-router-dom'
import Logo from '../img/LOGO.svg'
import {MenuBar} from '../styled'
import {LocalContext} from '../context/Context'
import {Link} from 'react-router-dom'


export default function AppRoutes(){
    const {sair} = useContext(LocalContext)

    const [mercado, setMercado] = useState("sim")

    function handleSair(){
        sair();
    }

    return(
        <>

            <MenuBar>
                <img src={Logo} alt="Logo"/>
                <div className="buttons">
                    { mercado ? <Link to="/cadastrarProd"><button>Cadastrar Produto</button></Link> : <></>}
                    <button onClick={handleSair}>Sair</button>
                </div>
            </MenuBar>
        <section>

            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/cadastrarProd" component={CadProd}/>
            </Switch>
        </section>
        </>
    )
}