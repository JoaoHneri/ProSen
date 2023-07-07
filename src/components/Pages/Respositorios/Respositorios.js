import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import Search from "../../../Imagens/search.png";
import Dropdown from "react-bootstrap/Dropdown";
import "../../Styles/Repositorios.css";
import Tabela from "../../Tabela/Tabela"
import ArrowLeft from "../../../Imagens/arrowLeft.png";
import Eclipse from "../../../Imagens/Ellipse 654.png";
import point from "../../../Imagens/Ellipse 657.png"
import ArrowRight from "../../../Imagens/ArrowRight.png";
import Footer from "../../Footer/Footer"

const Respositorios = () => {
  const [projetoFiltrado, setProjetoFiltrado] = useState('');
  return (
    <div>
      <Navbar />
      <div className="boxModel">
        <div className="search-content">
          <div className="divInput">
            <div className="modelDrop">
            <select id="clients" name="clients" className="modelDrop">
                  <option  value="ada">BUSCA AVANÇADA</option>  
              </select>
            </div>
            <input
              type="text"
              className="repoSearch"
              placeholder="Buscar Trabalhos..."
              onChange={(e)=>{setProjetoFiltrado(e.target.value)}}
            />
            <button className="Search-btn">
              <img src={Search} alt="Busque Trabalhos" />
            </button>
          </div>
          <div className="dropdown-content">
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Ordernar por
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="container table-edit">
      <Tabela projetoFiltrado={projetoFiltrado}/>
        <div className="controllers">
            <img src={ArrowLeft} alt="Voltar"/>
            <img src={Eclipse} alt="Numbers"/>
            <img src={point} alt="next"/>
            <img src={point} alt="next"/>
            <img src={point} alt="next"/>
            <img src={Eclipse} alt="Numbers"/>
            <img src={Eclipse} alt="Numbers"/>
            <img src={Eclipse} alt="Numbers"/>
            <img src={point} alt="next"/>
            <img src={point} alt="next"/>
            <img src={point} alt="next"/>
            <img src={Eclipse} alt="Numbers"/>
            <img src={ArrowRight} alt="next"/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Respositorios;
