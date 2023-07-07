import React from "react";
import "../Styles/CardEvent.css";
import imgCard from "../../Imagens/cardImg.png";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function CardEvent({ id, title, local, startDate }) {


  function formatarDataBrasileira(data) {
    const dateObj = new Date(data);

    const dia = String(dateObj.getDate()).padStart(2, "0");
    const mes = String(dateObj.getMonth() + 1).padStart(2, "0"); // Os meses são indexados a partir de 0, então é necessário adicionar +1
    const ano = dateObj.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }

  return (
    <>
      <div className="Card-div-1">
        <div className="Card-div-2">
          <div>
            <img alt="" id="img-card" src={imgCard} />
          </div>
        </div>
        <div className="contsCard">
          <div className="Card-div-3">
            <h5>{title}</h5>
            <div className="Card-div-4">
              <BsFillCalendarCheckFill id="icon-cards" />{" "}
              <p className="">{formatarDataBrasileira(startDate)}</p>
            </div>
            <div className="Card-div-5">
              <HiLocationMarker id="icon-cards" /> <p>{local}</p>
            </div>
            <div className="Card-div-6">
              <Link to={`/eventos/${id}`}>
                <button className="btn-cards">SABER MAIS</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardEvent;
