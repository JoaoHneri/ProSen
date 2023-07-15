import React, { useState } from "react";
import { BiExit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import imgEquipe2 from "../../../Imagens/foto1.jpg";
import Profile from "../../DashboardContentsAluno/Profile";
import NavBar from "../../Navbar/Navbar";
import "../../Styles/StyleContents/DashboardAluno.css";

const DashboardAluno = () => {
  const [activeComponent, setActiveComponent] = useState("perfil");
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate(true);

  const renderComponent = () => {
    switch (activeComponent) {
      case "perfil":
        return <Profile />;
      default:
        return null;
    }
  };

  async function logoutHandler(e) {
    localStorage.setItem("email_Prosen", "");
    localStorage.setItem("name_Prosen", "");
    localStorage.setItem("id_Prosen", "");
    localStorage.removeItem("logado_Prosen");
    await navigate("/");
    window.location.reload(true);
    e.preventDefault();
  }


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const isButtonActive = (componentName) => {
    return activeComponent === componentName ? "nav-button active" : "nav-button";
  };

  return (
    <>
      <NavBar />
      <div className="dashboard-opa">
        <div className="">
          <div className="content-avatar-center">
          <div class="avatar-w">
            <img src={imgEquipe2} alt="Descrição da imagem" />
          </div>
        </div>
        <div className="content-dados">
          <div>
            <p>
              <span id="title-span">Nome: </span>Ingrid Barreto de Almeida
              Passos{" "}
            </p>
            <p>
              <span id="title-span">Cargo: </span>Professora
            </p>
            <p>
              <span id="title-span">Email: </span> ingrid.passos@fieb.org.br
            </p>
            <p>
              <span id="title-span">Telefone: </span>(75) 9 9999 - 9999
            </p>
          </div>
        </div>
        <div className="nav-button-position">
          <button className="nav-button-exit" onClick={logoutHandler}>
            Sair Da Conta <BiExit id="icon-exit" />
          </button>
          </div>
        </div>
        <div className="content">{renderComponent()}</div>
        
      </div>
    </>
  );
};

export default DashboardAluno;
