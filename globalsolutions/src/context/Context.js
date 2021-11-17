import {createContext, useState, useEffect} from 'react'

export const LocalContext = createContext({})

function LocalProvider({children}, props){

    const [ userLogin, setUserLogin ] = useState(null)

    function login(){
        let datauser = {
            mercado: false
        }
        setUserLogin(datauser)
    }

    function sair(){
        setUserLogin()
        window.location = "/login"
    }

    return(
        <LocalContext.Provider value={{signed: !!userLogin, userLogin, login, sair}}>
            {children}
        </LocalContext.Provider>
    )
}

export default LocalProvider;