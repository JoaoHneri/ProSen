import React from "react";
import { useState } from "react";
import NavBar from "../../Navbar/Navbar";
import "../../Styles/Login.css"
import BannerLogin from "../../Section-Banner/BannerLogin";
import imglogologin from "../../../Imagens/logo-login.png"
import {AiFillLock} from "react-icons/ai"
import {FaUserAlt} from "react-icons/fa"
import logoForm from "../../../Imagens/logo-form.png"
import { Link } from "react-router-dom";
import api from "../../../Services/Api"

function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
        const response = await api.post("http://localhost:3333/auth/login", {
          email,
          password,
        });
        alert("opas")
        console.log(response.data); 
    
      } catch (error) {
        console.error(error);
      }
    };
    return(
        <>
        <NavBar/>
        <BannerLogin/>
        <div className="login-sec">
        <div className="div-img-form">
            <img alt=""  src={imglogologin}/>
                </div>
                <div>
           
          <div class="center-edit">
                    <div className="div-form-text">
                        <h3>Conta ProSen</h3>
                        <img alt="" id="logo-form" src={logoForm}/>
                    </div>
                          <form onSubmit={handleLogin}>
                                <div class="inputbox">
                                    <input type="text"
                                     placeholder="Email" required="required"  value={email}
                                     onChange={(e) => setEmail(e.target.value)} />
                                    <i class="icon"><FaUserAlt id="icon-form-user"/></i>
                                    
                                </div>
                                <div class="inputbox">
                                    <input type="password" placeholder="Senha" required="required"
                                     value={password}
                                     onChange={(e) => setPassword(e.target.value)}
                                      />
                                    <i class="icon"><AiFillLock id="icon-form" /></i>
                                   
                                </div>
                                <Link to="/dashboard">
                                <div class="div-button">
                                    <button class="btn-form" type="submit">ACESSAR</button>
                                </div>
                                </Link>
                    </form>
                    </div>
                </div>
                </div>
            
        </>

    )
}


export default Login
