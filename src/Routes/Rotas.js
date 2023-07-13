import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { Home } from "../components/Pages/Home/Home";
import Eventos from "../components/Pages/Eventos/Eventos";
import EventoById from "../components/Pages/EventoByID/EventoById";
import Respositorios from "../components/Pages/Respositorios/Respositorios";
import Equipe from "../components/Pages/Equipe/Equipe";
import Login from "../components/Pages/Login/Login";
import Dashboard from "../components/Pages/Dashboard/Dashboard";
import DashboardAdmin from "../components/Pages/DashboardAdmin/DashboardAdmin";
import { useContext } from "react";
import { UserContext } from "../components/useContext/UserContext";
import api from "../services/api";
import CadastrarProfessor from "../components/DashboardContentsAdmin/CadastrarProfessor";

function ToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const Rotas = () => {
  const [userData, setUserData] = useContext(UserContext);
  // const userId = userData.id;

  // useEffect(() => {
  //   const getUserData = async () => {
  //     try {
  //       const response = await api.get(`/user/${userId}`);
  //       const user = response.data;

  //       if (user.logado) {
  //         setUserData({ ...userData, logado: true, admin: user.tipoAdmin });
  //       } else {
  //         setUserData({ ...userData, logado: false, admin: false });
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   if (userData.logado) {
  //     getUserData();
  //   }
  // }, [userData.logado, setUserData, userId]);

  return (
    <Router>
      <ToTop />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/eventos" Component={Eventos} />
        <Route exact path="/eventos/:id" Component={EventoById} />
        <Route
          path="/repositorios"
          element={userData.logado ? <Respositorios /> : <Login />}
        />
        <Route exact path="/repositorios" Component={Respositorios} />
        <Route exact path="/equipe" Component={Equipe} />
        <Route exact path="/login" Component={Login} />
        <Route
          path="/Dashboard"
          element={userData.logado ? userData.authAdmin === 'false' ? <Dashboard /> : <DashboardAdmin /> : <Login/>}
        />

        <Route path="/CadastrarProfessor" element={userData.logado ? <CadastrarProfessor/> : <Login/>}/>
          {/* <Route
          path="/DashboardAdmin"
          element={userData.authAdmin === 'true' ? <DashboardAdmin /> : <Login />}
        /> */}
      </Routes>
    </Router>
  );
};

export default Rotas;
