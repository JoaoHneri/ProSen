import React from "react";
import NavBar from "../../Navbar/Navbar";
import "../../Styles/Login.css"
import BannerLogin from "../../Section-Banner/BannerLogin";
import imglogologin from "../../../Imagens/logo-login.png"
import {AiFillLock} from "react-icons/ai"
import {FaUserAlt} from "react-icons/fa"
import logoForm from "../../../Imagens/logo-form.png"
import { Link } from "react-router-dom";

function Login(){
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
                          <form>
                                <div class="inputbox">
                                    <input type="text" placeholder="Email" required="required" />
                                    <i class="icon"><FaUserAlt id="icon-form-user"/></i>
                                    
                                </div>
                                <div class="inputbox">
                                    <input type="text" placeholder="Senha" required="required" />
                                    <i class="icon"><AiFillLock id="icon-form" /></i>
                                   
                                </div>
                                <Link to="dashboard">
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
