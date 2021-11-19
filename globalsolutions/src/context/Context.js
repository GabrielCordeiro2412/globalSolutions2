import {createContext, useState, useEffect} from 'react'

export const LocalContext = createContext({})

function LocalProvider({children}, props){

    const [ userLogin, setUserLogin ] = useState(null)

    function login(){
        let datauser = {
            mercado: true
        }
        setUserLogin(datauser)
    }

    function sair(){
        setUserLogin()
        window.location = "/login"
    }

    function cadastroONG(dados){
        console.log("iha")
    }

    function cadastroMercado(dados){
        console.log("iha")
    }

    function cadastroProduto(dados){
        console.log("iha")
    }

    function buscaProduto(busca){
        console.log("iha")
    }

    return(
        <LocalContext.Provider value={{signed: !!userLogin, userLogin, login, sair, cadastroONG, cadastroMercado, cadastroProduto, buscaProduto}}>
            {children}
        </LocalContext.Provider>
    )
}

export default LocalProvider;