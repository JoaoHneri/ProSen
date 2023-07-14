import React, { useEffect, useState } from "react";
import imgEquipe2 from "../../Imagens/foto1.jpg";
import "../Styles/StyleContents/Profile.css";
import { BiEdit } from "react-icons/bi";
import api from "../../services/api";
import { UserContext } from "../useContext/UserContext";
import { useContext } from "react";

function Profile() {
  const [userData, setUserData] = useContext(UserContext);
  const [user, setUser] = useState([]);
  const [project, setProject] = useState([]);

  async function init(){
    try {
      const user = await api.get(`/user/${userData.id}`);
      const {data} = user;
      setUser(data);

    } catch (error) {
      console.log(error);
    }
  }

  async function getUserProjects(){
    try {
      const project = await api.get(`/project/${userData.id}`);
      const {data} = project;
      setProject(data.projects)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    init()
    getUserProjects();
  },[api])

  function formatarDataBrasileira(data) {
    const dateObj = new Date(data);

    const dia = String(dateObj.getDate()).padStart(2, "0");
    const mes = String(dateObj.getMonth() + 1).padStart(2, "0"); // Os meses são indexados a partir de 0, então é necessário adicionar +1
    const ano = dateObj.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }

  return (
    <>
      <div className="content-action">
        <div className="content-avatar">
          <div class="avatar">
            <img src={imgEquipe2} alt="Descrição da imagem" />
          </div>
        </div>
        <div className="content-dados">
          <div>
            <p>
              <span id="title-span">Nome: </span>{user.name}{" "}
            </p>
            <p>
              <span id="title-span">Cargo: </span>{user.cargo}
            </p>
            <p>
              <span id="title-span">Email: </span> {user.email}
            </p>
            <p>
              <span id="title-span">Telefone: </span>{user.telefone}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="profile-infos">
          <div className="title-profile">
            <h4>Atividade Recente</h4>
          </div>
          {project.map((project)=>(
            <div className="profile-itens">
            <p>{formatarDataBrasileira(project.date)}</p>
            <p>{project.type}</p>
            <p>{project.linkEvent}</p>
            <BiEdit id="icon-profile" />
          </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Profile;
