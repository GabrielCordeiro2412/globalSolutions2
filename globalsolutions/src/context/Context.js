import {createContext, useState, useEffect} from 'react'

export const LocalContext = createContext({})

function LocalProvider({children}, props){

    const [ userLogin, setUserLogin ] = useState(null)

    return(
        <LocalContext.Provider value={{signed: !!userLogin, userLogin}}>
            {children}
        </LocalContext.Provider>
    )
}

export default LocalProvider;