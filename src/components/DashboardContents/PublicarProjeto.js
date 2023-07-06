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
  const [formData, setFormData] = useState({
    user_id: userData.id,
    title: "",
    area: "",
    classProject: "",
    shift: "",
    type: "",
    date: "",
    linkEvent: "",
    supervisor: "",
    groupLeaderEmail: "",
    authors: "",
    src: null,
    
  });

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
      data.append("title", formData.title);
      data.append("area", formData.area);
      data.append("shift", formData.shift);
      data.append("type", formData.type);
      data.append("date", formData.date);
      data.append("linkEvent", formData.linkEvent);
      data.append("supervisor", formData.supervisor);
      data.append("groupLeaderEmail", formData.groupLeaderEmail);
      data.append("classProject", formData.classProject);
      data.append("authors", formData.authors);
      data.append("src", formData.src);
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

  const handleChangesele = (selected) => {
    setSelectedOptions(selected);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
          
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="edit-label">Área:</label>
                  <input
                    type="text"
                    name="area"
                    className="input"
          
                    value={formData.area}
                    onChange={handleChange}
                  />
                </div>
                <div className="itens-form">
                  <label className="edit-label">Turma:</label>
                  <input
                    type="text"
                    name="classProject"
                    className="input"
    
                    value={formData.classProject}
                    onChange={handleChange}
                  />
                  <label className="edit-label">Turno:</label>
                  <select
                    name="shift"
                    className="input"
                    value={formData.shift}
                    onChange={handleChange}
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
                    value={formData.type}
                    onChange={handleChange}
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
         
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
                <div className="itens-form">
                  <label className="edit-label">Vincular ao Evento</label>
                  <select
                    name="linkEvent"
                    className="input"
                    value={formData.linkEvent}
                    onChange={handleChange}
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
             
                    value={formData.supervisor}
                    onChange={handleChange}
                  />
                </div>
                <div className="itens-form">
                  <label className="edit-label">Email do Líder do Grupo</label>
                  <input
                    type="text"
                    name="groupLeaderEmail"
                    className="input"
                 
                    value={formData.groupLeaderEmail}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="edit-label">Autores</label>
                  <select
                    name="authors"
                    className="input"
                    value={formData.authors}
                    onChange={handleChange}
                  >
                    <option value="aluno1">aluno1</option>
                    <option value="aluno2">aluno2</option>
                    <option value="aluno3">aluno3</option>
                  </select>
                </div>
              </div>
              <div className="img-form-input">
                <p>Anexar Arquivos do Projeto em (PDF)</p>
                <input type="file" name='src'  value={formData.src}
                    onChange={handleChange}/>
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
