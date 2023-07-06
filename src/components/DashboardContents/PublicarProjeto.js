import React, { useState } from 'react';
import imgForm from "../../Imagens/imageForm.png"
import "../Styles/StyleContents/PublicarProjeto.css";
import api from "../../services/api";
import { useContext } from "react";
import { UserContext } from "../useContext/UserContext";

import Select from 'react-select';



const PublicarProjeto = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [userData, setUserData] = useContext(UserContext);
  const [title, setTitle] = useState('');
  const [area, setArea] = useState('');
  const [shift, setShift] = useState('');
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [linkEvent, setLinkEvent] = useState('');
  const [supervisor, setSupervisor] = useState('');
  const [groupLeaderEmail, setGroupLeaderEmail] = useState('');
  const [classProject, setClassproject] = useState('');
  const [authors, setAuthors] = useState('');
  const [file, setFile] = useState(null);


  const formatDate = (date) => {
    return date.replace(/\D/g, "");
  };

  const formatTime = (time) => {
    return time.replace(/\D/g, "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "/project";
      const data = new FormData();
      data.append("user_id", userData.id);
      data.append("title", title);
      data.append("area", area);
      data.append("shift", shift);
      data.append("type", type);
      data.append("date", date);
      data.append("linkEvent", linkEvent);
      data.append("supervisor", supervisor);
      data.append("groupLeaderEmail", groupLeaderEmail);
      data.append("classProject", classProject);
      data.append("authors", authors);
      data.append("file", file);
     ;

      const response = await api.post(url, data);
      alert("foi")
      console.log(response.data); // Mensagem de sucesso e dados do evento

      // Faça algo com a resposta, como redirecionar para outra página
    } catch (error) {
      console.error(error);
      alert(error.message);
      // Trate o erro aqui
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div id="color-bg">
            <div className="tx-form">
              <h4>Dados Do Projeto</h4>
            </div>
            <div className="form-edit-section-size">
              <div className="form-edit-section">
                <div>
                  <label className="edit-label">Titulo:</label>
                  <input
                    type="text"
                    name="title"
                    className="input"
          
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}
                  />
                </div>
                <div>
                  <label className="edit-label">Área:</label>
                  <input
                    type="text"
                    name="area"
                    className="input"
          
                    value={area}
                    onChange={(e)=>{setArea(e.target.value)}}
                  />
                </div>
                <div className="itens-form">
                  <label className="edit-label">Turma:</label>
                  <input
                    type="text"
                    name="classProject"
                    className="input"
    
                    value={classProject}
                    onChange={(e)=>{setClassproject(e.target.value)}}
                  />
                  <label className="edit-label">Turno:</label>
                  <select
                    name="shift"
                    className="input"
                    value={shift}
                    onChange={(e)=>{setShift(e.target.value)}}
                  >
                    <option value="valor1">Valor 1</option>
                    <option value="valor2">Valor 2</option>
                    <option value="valor3">Valor 3</option>
                  </select>
                </div>
                <div className="itens-form">
                  <label className="edit-label">Tipo:</label>
                  <select
                    name="type"
                    className="input"
                    value={type}
                    onChange={(e)=>{setType(e.target.value)}}
                  >
                    <option value="valor1">Valor 1</option>
                    <option value="valor2">Valor 2</option>
                    <option value="valor3">Valor 3</option>
                  </select>
                  <label className="edit-label">Data:</label>
                  <input
                    type="time"
                    name="date"
                    className="input"
         
                    value={date}
                    onChange={(e)=>{setDate(e.target.value)}}
                  />
                </div>
                <div className="itens-form">
                  <label className="edit-label">Vincular ao Evento</label>
                  <select
                    name="linkEvent"
                    className="input"
                    value={linkEvent}
                    onChange={(e)=>{setLinkEvent(e.target.value)}}
                  >
                    <option value="valor1">Valor 1</option>
                    <option value="valor2">Valor 2</option>
                    <option value="valor3">Valor 3</option>
                  </select>
                </div>
                <div className="itens-form">
                  <label className="edit-label">Orientador:</label>
                  <input
                    type="text"
                    name="supervisor"
                    className="input"
             
                    value={supervisor}
                    onChange={(e)=>{setSupervisor(e.target.value)}}
                  />
                </div>
                <div className="itens-form">
                  <label className="edit-label">Email do Líder do Grupo</label>
                  <input
                    type="text"
                    name="groupLeaderEmail"
                    className="input"
                 
                    value={groupLeaderEmail}
                    onChange={(e)=>{setGroupLeaderEmail(e.target.value)}}
                  />
                </div>
                <div>
                  <label className="edit-label">Autores</label>
                  <select
                    name="authors"
                    className="input"
                    value={authors}
                    onChange={(e)=>{setAuthors(e.target.value)}}
                  >
                    <option value="aluno1">aluno1</option>
                    <option value="aluno2">aluno2</option>
                    <option value="aluno3">aluno3</option>
                  </select>
                </div>
              </div>
              <div className="img-form-input">
                <p>Anexar Arquivos do Projeto em (PDF)</p>
                <input type="file" name="file" onChange={(e) => setFile(e.target.files[0])} />
              </div>
            </div>
            <div className="upArq">
              <button type="submit">Publicar Projeto</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PublicarProjeto;



