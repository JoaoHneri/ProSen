import React, {createContext, useState} from "react";
export const UserContext = createContext()
export function UserProvider(props){
  const token = localStorage.getItem('token')

  const [userData, setUserData] = useState({
    token: localStorage.getItem('token'),
    id: localStorage.getItem('id_Prosen'),
    name: localStorage.getItem('name_Prosen'),
    email: localStorage.getItem('email_Prosen'),
    logado: localStorage.getItem('logado_Prosen'),
    }
        
    )
    return (
        <UserContext.Provider value={[userData, setUserData]}>
            {props.children}
        </UserContext.Provider>
    )
}