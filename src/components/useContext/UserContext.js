import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider(props) {
  const [userData, setUserData] = useState({
    token: localStorage.getItem("token"),
    id: localStorage.getItem("id_Prosen"),
    name: localStorage.getItem("name_Prosen"),
    email: localStorage.getItem("email_Prosen"),
    logado: localStorage.getItem("logado_Prosen"),// Adicione o campo tipoAdmin
  });

  return (
    <UserContext.Provider value={[userData, setUserData]}>
      {props.children}
    </UserContext.Provider>
  );
}
