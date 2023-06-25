import React from "react";
import imgEquipe2 from "../../Imagens/foto1.jpg"
import "../Styles/StyleContents/Profile.css"
import {BiEdit} from "react-icons/bi"



function Profile(){
    return(
    <>
   <div className="content-action">
        <div className="content-avatar">
        <div class="avatar">
            <img src={imgEquipe2} alt="Descrição da imagem"/>
            </div>
        </div>
        <div className="content-dados">
          <div>
            <p><span id="title-span">Nome: </span>Ingrid Barreto de Almeida Passos </p>
            <p><span id="title-span">Cargo: </span>Professora</p>
            <p><span id="title-span">Email: </span>ingrid.passos@gmail.com </p>
            <p><span id="title-span">Telefone: </span>(75) 9 9999 - 9999</p>
          </div>
        </div>
       </div>
       <div>
      <div className="profile-infos">
       <div className="title-profile">
        <h4>Atividade Recente</h4>
       </div>
      <div className="profile-itens">
        <p>17/06/2023</p>
        <p>Projeto</p>
        <p>Trabalho de Conclusão de Curso</p>
        <BiEdit id="icon-profile"/>
      </div>
      <div className="profile-itens">
        <p>17/06/2023</p>
        <p>Projeto</p>
        <p>Trabalho de Conclusão de Curso</p>
        <BiEdit id="icon-profile"/>
      </div>
      <div className="profile-itens">
        <p>17/06/2023</p>
        <p>Projeto</p>
        <p>Trabalho de Conclusão de Curso</p>
        <BiEdit id="icon-profile"/>
      </div>
      </div>
       </div>
    </>
    )
}

export default Profile