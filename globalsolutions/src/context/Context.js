import {createContext, useState, useEffect} from 'react'

export const LocalContext = createContext({})

function LocalProvider({children}, props){

    const [ userLogin, setUserLogin ] = useState(null)

    function login(){
        setUserLogin("text")
    }

    function sair(){
        setUserLogin()
    }

    return(
        <LocalContext.Provider value={{signed: !!userLogin, userLogin, login, sair}}>
            {children}
        </LocalContext.Provider>
    )
}

export default LocalProvider;