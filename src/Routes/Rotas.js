import React, { useEffect } from "react";
import {BrowserRouter as Router, Routes, Route, useLocation, Navigate} from "react-router-dom";
import { Home } from "../components/Pages/Home/Home";
import Eventos from "../components/Pages/Eventos/Eventos";
import EventoById from "../components/Pages/EventoByID/EventoById";
import Respositorios from "../components/Pages/Respositorios/Respositorios";
import Equipe from "../components/Pages/Equipe/Equipe";
import Login from "../components/Pages/Login/Login";
import PublicarProjeto from "../components/Pages/publicarProjeto/PublicarProjeto";
import PublicarEvento from "../components/Pages/PublicarEvento/PublicarEvento";
import Dashboard from "../components/Pages/Dashboard/Dashboard"
import { useContext } from "react";
import { UserContext } from "../components/useContext/UserContext";

function ToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const Rotas = () => {
  const [userData, setUserData] = useContext(UserContext);
  console.log(userData.logado);
  return (
    <Router>
      <ToTop />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/eventos" Component={Eventos} />
        <Route exact path="/eventos/:id" Component={EventoById} />
        <Route
          path="/repositorios"
          element={userData.logado ? <Respositorios/> : <Login/>}
        />
        <Route exact path="/repositorios" Component={Respositorios} />
        <Route exact path="/equipe" Component={Equipe} />
        <Route exact path="/login" Component={Login}/>

        <Route
          path="/Dashboard"
          element={userData.logado ? <Dashboard/> : <Login/>}
        />
      </Routes>
    </Router>
  );
};

export default Rotas;
