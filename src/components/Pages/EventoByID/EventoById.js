import React from "react";
import NavBar from "../../Navbar/Navbar";
import Banner4 from "../../Section-Banner/Banner4";
import "../../Styles/EventoByID.css";
import Date from "../../../Imagens/date.png";
import Time from "../../../Imagens/time.png";
import Location from "../../../Imagens/location.png";
import baseUser from "../../../Imagens/baseUser.png";
import User from "../../../Imagens/user.png";
import userHead from "../../../Imagens/usserHead.png";
import Vector from "../../../Imagens/Vector.png";
import Foto1 from "../../../Imagens/Imagens do Evento/MostraSENAI (1) (4).png";
import ImageVideo from "../../../Imagens/Imagens do Evento/Image Video.png";
import Search from "../../../Imagens/search.png";
import Dropdown from "react-bootstrap/Dropdown";
import Tabela from "../../Tabela/Tabela";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Evento2 from "../../../Imagens/evento2.png"
import Evento3 from "../../../Imagens/evento3.png"
import Evento4 from "../../../Imagens/evento4.png"
import Evento5 from "../../../Imagens/evento5.png"
import Evento6 from "../../../Imagens/evento6.png"
import Evento7 from "../../../Imagens/evento7.png"
import evento8 from "../../../Imagens/evento8.png"
import video2 from "../../../Imagens/video2.png"
import video3 from "../../../Imagens/video3.png"





const EventoById = () => {
  return (
    <div>
      <NavBar />
      <Banner4 />
      <div className="content-container"></div>
      <div className="tx-cont container Section_Prosen">
        <h1>Mostra de Projeto & Pesquisa Científica 2023.1</h1>
      </div>
      <div className="container informs">
        <div className="paragrafs">
          <p>
            No semestre 2023.1, o SENAI Feira de Santana promoveu a "Mostra de
            Projeto & Pesquisa Científica" com foco nas áreas de Gestão e
            Tecnologia da Informação (TI). O evento reuniu estudantes,
            professores e profissionais dessas áreas, proporcionando um espaço
            para o intercâmbio de conhecimento e a apresentação de projetos
            inovadores.
            <br />
            <br />
            Durante a mostra, os participantes tiveram a oportunidade de
            compartilhar suas descobertas e soluções para desafios enfrentados
            na área de Gestão e TI. Os projetos e pesquisas abordaram temas como
            inteligência artificial, análise de dados, gestão de processos e
            segurança da informação. A exposição de projetos e a sessão de
            pôsteres foram momentos-chave do evento, permitindo aos estudantes
            demonstrar sua criatividade e habilidade prática na aplicação de
            conceitos teóricos.
            <br />
            <br />
            Além disso, a mostra contou com a presença de representantes de
            empresas locais, interessados em identificar talentos e estabelecer
            parcerias. Esse contato direto entre os estudantes e o setor
            empresarial contribuiu para a formação de networking e possíveis
            oportunidades profissionais. A "Mostra de Projeto & Pesquisa
            Científica: Gestão e TI" foi um evento de sucesso, consolidando-se
            como um espaço para o compartilhamento de conhecimento, incentivo à
            pesquisa e promoção dos avanços nessas áreas de estudo.
          </p>
        </div>
        <div className="details">
          <p>
            <img src={Date} alt="Data do Evento" className="m-1" />
            25/05/2023
          </p>

          <p>
            <img className="m-1" src={Time} alt="Horário do Evento" />
            8h às 21h
          </p>
          <p>
            <img className="m-1" src={Location} alt="Localização do Evento" />
            SENAI - Feira de Santana
          </p>
          <p className="eventTypes m-1">
            <div className="userEvent">
              <img src={userHead} alt="Tipo de Evento" />
              <img className="user" src={User} alt="Tipo de Evento" />
              <img src={baseUser} alt="Tipo de Evento" />
            </div>
            Evento Presencial
          </p>
        </div>
      </div>
      <div className="tx-cont container Section_Prosen">
        <div className="photoStart">
          <h1>Fotos do Evento</h1>
          <button>
            Ver todas as Fotos <img src={Vector} alt="Ver todas as fotos" />
          </button>
        </div>
        <div className="divFotos">
          <div>
            <img src={Foto1} alt="Foto do evento" />
          </div>
          <div>
            <img src={Evento2} alt="Foto do evento" />
          </div>
          <div>
            <img src={Evento3} alt="Foto do evento" />
          </div>
          <div>
            <img src={Evento4} alt="Foto do evento" />
          </div>
          <div>
            <img src={Evento5} alt="Foto do evento" />
          </div>
          <div>
            <img src={Evento6} alt="Foto do evento" />
          </div>
          <div>
            <img src={Evento7} alt="Foto do evento" />
          </div>
          <div>
            <img src={evento8} alt="Foto do evento" />
          </div>
        </div>
      </div>
      <div className="tx-cont container Section_Prosen">
        <div className="photoStart">
          <h1>Vídeos do Evento</h1>
          <button>
            Ver todas os Vídeos <img src={Vector} alt="Ver todas as fotos" />
          </button>
        </div>
        <div className="divVideos">
          <div>
            <img src={ImageVideo} alt="Video do evento" />
          </div>
          <div>
            <img src={video2} alt="Video do evento" />
          </div>
          <div>
            <img src={video3} alt="Video do evento" />
          </div>
        </div>
      </div>
      <div className="tx-cont container Section_Prosen">
        <h1>Trabalhos Apresentados</h1>
        <div className="search-content">
          <div className="divInput">
            <input
              type="text"
              className="eventsSearch"
              placeholder="Buscar Trabalhos..."
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
        <div className="sessionTable">
          <Tabela />
          <div className="seeButton finish">
        <Link to={'/repositorios'}>
          <button className="buttonCards">Carregar mais</button>
        </Link>
        
      </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default EventoById;
