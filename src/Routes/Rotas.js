import React, { useEffect } from "react";
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import { Home } from "../components/Pages/Home/Home";
import Eventos from "../components/Pages/Eventos/Eventos";
import EventoById from "../components/Pages/EventoByID/EventoById";
import Respositorios from "../components/Pages/Respositorios/Respositorios";
import Equipe from "../components/Pages/Equipe/Equipe";
import Login from "../components/Pages/Login/Login";
import PublicarProjeto from "../components/Pages/publicarProjeto/PublicarProjeto";
import PublicarEvento from "../components/Pages/PublicarEvento/PublicarEvento";
import Dashboard from "../components/Pages/Dashboard/Dashboard"

function ToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const Rotas = () => {
  return (
    <Router>
      <ToTop />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/eventos" Component={Eventos} />
        <Route exact path="/eventos/id" Component={EventoById} />
        <Route exact path="/repositorios" Component={Respositorios} />
        <Route exact path="/equipe" Component={Equipe} />
        <Route exact path="/login" Component={Login}/>
        <Route exact path="/publicarProjeto" Component={PublicarProjeto}/>
        <Route exact path="/publicarEvento" Component={PublicarEvento}/>
        <Route exact path="/Dashboard" Component={Dashboard}/>
      </Routes>
    </Router>
  );
};

export default Rotas;
