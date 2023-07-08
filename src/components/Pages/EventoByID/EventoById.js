import React, { useEffect, useState } from "react";
import NavBar from "../../Navbar/Navbar";
import Banner4 from "../../Section-Banner/Banner4";
import "../../Styles/EventoByID.css";
import DateIcon from "../../../Imagens/date.png";
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
import Evento2 from "../../../Imagens/evento2.png";
import Evento3 from "../../../Imagens/evento3.png";
import Evento4 from "../../../Imagens/evento4.png";
import Evento5 from "../../../Imagens/evento5.png";
import Evento6 from "../../../Imagens/evento6.png";
import Evento7 from "../../../Imagens/evento7.png";
import evento8 from "../../../Imagens/evento8.png";
import video2 from "../../../Imagens/video2.png";
import video3 from "../../../Imagens/video3.png";
import { useParams } from "react-router-dom";
import api from "../../../services/api";

const EventoById = () => {
  const [Event, setEvent] = useState();
  const { id } = useParams();
  const [projetoFiltrado, setProjetoFiltrado] = useState("");

  useEffect(() => {
    async function getEventById() {
      try {
        const event = await api.get(`/event/${id}`);
        const { data } = event;
        setEvent(data);
        console.log(event);
      } catch (error) {
        console.log(error);
      }
    }
    getEventById();
  }, [id]);

  function formatarDataBrasileira(data) {
    const dateObj = new Date(data);

    const dia = String(dateObj.getDate()).padStart(2, "0");
    const mes = String(dateObj.getMonth() + 1).padStart(2, "0"); // Os meses são indexados a partir de 0, então é necessário adicionar +1
    const ano = dateObj.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }

  function formatarHora(hora) {
    const horaFormatada = hora.substring(0, 2) + ":" + hora.substring(2);
    return horaFormatada;
  }
  
  

  return (
    <div>
      <NavBar />
      <Banner4 />
      <div className="content-container"></div>
      <div className="tx-cont container Section_Prosen">
        <h1>{Event ? Event.title : "Carregando"}</h1>
      </div>
      <div className="container informs">
        <div className="paragrafs">
          <p>{Event ? Event.descricao : "Carregando"}</p>
        </div>
        <div className="details">
          <p>
            <img src={DateIcon} alt="Data do Evento" className="m-1" />
            {Event ? formatarDataBrasileira(Event.startDate) : "Carregando"}
          </p>

          <p>
            <img className="m-1" src={Time} alt="Horário do Evento" />
            {Event ? formatarHora(Event.hour) : "Carregando"}
          </p>
          <p>
            <img className="m-1" src={Location} alt="Localização do Evento" />
            {Event ? Event.local : "Carregando"}
          </p>
          <p className="eventTypes m-1">
            <div className="userEvent">
              <img src={userHead} alt="Tipo de Evento" />
              <img className="user" src={User} alt="Tipo de Evento" />
              <img src={baseUser} alt="Tipo de Evento" />
            </div>
            {Event ? Event.type : "Carregando"}
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
            <img
              className="imageToPost"
              src={
                Event
                  ? `${process.env.REACT_APP_API}temp/uploads/${Event.src.key}`
                  : "carregando"
              }
              alt="Foto do evento"
            />
          </div>
          <div>
            <img src={Foto1} alt="Foto do evento" />
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
              onChange={(e) => {
                setProjetoFiltrado(e.target.value);
              }}
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
          <Tabela projetoFiltrado={projetoFiltrado} />
          <div className="seeButton finish">
            <Link to={"/repositorios"}>
              <button className="buttonCards">Carregar mais</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventoById;
