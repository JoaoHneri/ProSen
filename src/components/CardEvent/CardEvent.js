import React from 'react'
import "../Styles/CardEvent.css"
import imgCard from "../../Imagens/cardImg.png"
import { HiLocationMarker } from 'react-icons/hi';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function CardEvent(){
     return(<>
     <div className='Card-div-1'>
        <div className='Card-div-2'>
          <div><img alt='' id='img-card' src={imgCard}/></div>
        </div>
        <div className='contsCard'>
        <div className='Card-div-3'>
          <h5>Mostra de Projeto e<br/> Pesquisa Científica</h5>
          <div className='Card-div-4'>
          <BsFillCalendarCheckFill id='icon-cards'/> <p className=''>20/06/2023 </p>
          </div>
          <div className='Card-div-5'>
          <HiLocationMarker id='icon-cards' />  <p>SENAI - Feira de Santana</p>
          </div>
          <div className='Card-div-6'>
          <Link to={'/eventos/id'}>
            <button className='btn-cards'>SABER MAIS</button>
          </Link>
          </div>
        </div>
        </div>
        
      </div>

     </>
     )
}

export default CardEvent