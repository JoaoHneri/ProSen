import React, { useEffect, useState } from "react";
import Search from "../../Imagens/search.png";
import { Dropdown } from "react-bootstrap";
import TabelaDashboard from "../Tabela/TabelaDashboard";
import api from "../../services/api";
import { useContext } from "react";
import { UserContext } from "../useContext/UserContext";
import { Link } from "react-router-dom";

function EditarProjeto(){
  const[project, setProject] = useState([]);
  const [userData, setUserData] = useContext(UserContext);
  const [selectedProjectId, setSelectedProjectId] = useState("");
  

  async function getUserProjects(){
    try {
      const project = await api.get(`/project/${userData.id}`);
      const {data} = project;
      setProject(data.projects)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() =>{
    getUserProjects();
  },[api]);

  const handleProjectSelect = (projectId) => {
    setSelectedProjectId(projectId);
  };

    return(
    <>
   <div className="content-action editProj">
        <div className="">
          <h1>Buscar Trabalho</h1>
          <div className="search-content">
            <div className="divInput">
              <input
                type="text"
                className="eventsSearch"
                placeholder="Buscar Trabalhos..."
              />
              <button className="Search-btn"><img src={Search} alt="Busque Ttrabalhos"/></button>
            </div>
            <div className="dropdown-content">
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  Ordernar por
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          </div>
       </div>
       <div>
        <TabelaDashboard project={project} onProjectSelect={handleProjectSelect}/>
        <div className="upArq">
          <Link to={`/EditarProjeto/${selectedProjectId}`}>
              <button>Editar Projeto</button>
          </Link>
          
        </div>
       </div>
    </>
    )
}

export default EditarProjeto