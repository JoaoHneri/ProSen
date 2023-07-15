import React from "react";
import { BiEdit } from "react-icons/bi";
import iconTitle from "../../Imagens/iconTitle.png";
import "../Styles/StyleContents/Profile.css";
function Profile() {
  return (
    <>
   
      <div>
        <div className="profile-infos">
        <div className="tx-form">
              <img alt="" id="imgicon" src={iconTitle} />
              <h4>Hist</h4>
            </div>
          <div className="profile-itens">
            <p>17/06/2023</p>
            <p>Projeto</p>
            <p>Trabalho de Conclusão de Curso</p>
            <BiEdit id="icon-profile" />
          </div>
          <div className="profile-itens">
            <p>17/06/2023</p>
            <p>Projeto</p>
            <p>Trabalho de Conclusão de Curso</p>
            <BiEdit id="icon-profile" />
          </div>
          <div className="profile-itens">
            <p>17/06/2023</p>
            <p>Projeto</p>
            <p>Trabalho de Conclusão de Curso</p>
            <BiEdit id="icon-profile" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
