import React from "react";
import Search from "../../Imagens/search.png";
import { Dropdown } from "react-bootstrap";
import TabelaDashboard from "../Tabela/TabelaDashboard";

function EditarProjeto(){
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
        <TabelaDashboard/>
        <div className="upArq">
          <button>Editar Projeto</button>
        </div>
       </div>
    </>
    )
}

export default EditarProjeto