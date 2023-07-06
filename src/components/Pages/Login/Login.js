import React, { useState } from "react";
import NavBar from "../../Navbar/Navbar";
import "../../Styles/Login.css";
import BannerLogin from "../../Section-Banner/BannerLogin";
import imglogologin from "../../../Imagens/logo-login.png";
import { AiFillLock } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import logoForm from "../../../Imagens/logo-form.png";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../services/api";
import { useContext } from "react";
import { UserContext } from "../../useContext/UserContext";

function Login() {
  const [UserData, setUserData] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nes, setNes] = useState([]);
  const navigate = useNavigate();


  const logar = async (e) => {
    e.preventDefault();
    try{
      const Data = await api.post("auth/login", {
        email,
        password
      });
      console.log(Data.data);
      const tokenGuard = JSON.stringify(Data.data.token).replace(/["]/g, "");
      const id = JSON.stringify(Data.data.usuario._id).replace(/["]/g, "");
      const nome = JSON.stringify(Data.data.usuario.name).replace(/["]/g, "");
      const emailProsen = JSON.stringify(Data.data.usuario.email).replace(/["]/g, "");

      localStorage.setItem("token_Prosen", tokenGuard);
      localStorage.setItem("id_Prosen", id);
      localStorage.setItem("name_Prosen", nome);
      localStorage.setItem("email_Prosen", emailProsen);
      localStorage.setItem("logado_Prosen", true);
      await navigate("/");
      window.location.reload(true);
    }catch{
      console.log("Não funcionou");
    }
  };

  return (
    <>
      <NavBar />
      <BannerLogin />
      <div className="login-sec">
        <div className="div-img-form">
          <img alt="" src={imglogologin} />
        </div>
        <div>
          <div class="center-edit">
            <div className="div-form-text">
              <h3>Conta ProSen</h3>
              <img alt="" id="logo-form" src={logoForm} />
            </div>
            <form>
              <div class="inputbox">
                <input
                  type="text"
                  placeholder="Email"
                  required="required"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <i class="icon">
                  <FaUserAlt id="icon-form-user" />
                </i>
              </div>
              <div class="inputbox">
                <input
                  type="text"
                  placeholder="Senha"
                  required="required"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <i class="icon">
                  <AiFillLock id="icon-form" />
                </i>
              </div>

              <div class="div-button" onClick={logar}>
                <button class="btn-form">
                  ACESSAR
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;