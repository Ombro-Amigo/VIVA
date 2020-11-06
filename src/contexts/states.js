import React, {Context, createContext, useState} from 'react'
import AuthContext from './auth/auth'

const StatesContext = createContext()

export const StatesProvider = ({children}) => {
    const [dispo, setDispo] = useState(1)
    return(
        <StatesContext.Provider value={{dispo, setDispo}}>
            {children}
        </StatesContext.Provider>
    )
    
}

export default StatesContext;