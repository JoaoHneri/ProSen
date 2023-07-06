import React, { useState } from "react";
import imgForm from "../../Imagens/imageForm.png";
import "../Styles/StyleContents/PublicarEvento.css";
import FileVideo from "../Configs/InputVideo";
import { useDropzone } from "react-dropzone";
import "../Styles/InputFile.css";
import { AiOutlinePlus } from "react-icons/ai";
import api from "../../services/api";
import { useContext } from "react";
import { UserContext } from "../useContext/UserContext";

const PublicarEvento = () => {
  const [userData, setUserData] = useContext(UserContext);
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [startDate, setStateDate] = useState("");
  const [hour, setHour] = useState("");
  const [local, setLocal] = useState("");
  const [type, setType] = useState("");
  const [descricao, setDescricao] = useState("");
  const [file, setFile] = useState(null);

  // console.log(title)
  // console.log(startDate)
  // console.log(hour)
  // console.log(local)
  // console.log(type)
  // console.log(descricao)




  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    multiple: true,
    onDrop: (acceptedFiles) => {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    },
  });

  const removeFile = (index) => {
    setFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles.splice(index, 1);
      return newFiles;
    });
  };


  const formatDate = (date) => {
    return date.replace(/\D/g, "");
  };

  const formatTime = (time) => {
    return time.replace(/\D/g, "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const url = "/event"; // Sua rota /event aqui
      const userId = userData.id;
      const data = new FormData();
      data.append("user_id", userId);
      data.append("local", local);
      data.append("title", title);
      data.append("hour", formatTime(hour));
      data.append("type", type);
      data.append("descricao", descricao);
      data.append("startDate", formatDate(startDate));
      data.append("file", file);
  
      const response = await api.post(url, data);
  
      console.log(response.data); // Mensagem de sucesso e dados do evento
  
      // Faça algo com a resposta, como redirecionar para outra página
    } catch (error) {
      console.error(error);
      // Trate o erro aqui
    }
  };
  

  return (
    <>
      <div>
        <form>
          <div id="color-bg">
            <div className="tx-form">
              <h4>Dados Do Evento</h4>
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
                <div className="itens-form">
                  <label className="edit-label">Data:</label>
                  <input
                    type="date"
                    name="startDate"
                    className="input"
                    value={startDate}
                    onChange={(e)=>{setStateDate(e.target.value)}}
                  />
                  <label className="edit-label">Horário:</label>
                  <input
                    type="time"
                    name="hour"
                    className="input"
                    value={hour}
                    onChange={(e)=>{setHour(e.target.value)}}
                  />
                </div>
                <div className="itens-form">
                  <label className="edit-label">Local:</label>
                  <select
                    name="local"
                    className="input"
                    value={local}
                    onChange={(e)=>{setLocal(e.target.value)}}
                  >
                    <option value="">Selecione o Local do Evento</option>
                    <option value="Senai - Feira de Santana">Senai - Feira de Santana</option>
                    <option value="Senai - Salvador" >
                      Senai - Salvador
                    </option>
                  </select>
                  <label className="edit-label">Modalidade:</label>
                  <select
                    name="type"
                    className="input"
                    value={type}
                    onChange={(e)=>{setType(e.target.value)}}
                  >
                    <option value="">Selecione o tipo do evento</option>
                    <option value="Evento Presencial">Evento Presencial</option>
                    <option value="Evento a distância" >
                      Evento A Distância
                    </option>

                  </select>
                </div>
                <div className="itens-form-text">
                  <label className="edit-label" htmlFor="formDescricao">
                    Descrição
                  </label>
                  <textarea
                    className="form-control"
                    name="descricao"
                    id="formDescricao"
                    rows="3"
                    placeholder="Digite a descrição"
                    value={descricao}
                    onChange={(e)=>{setDescricao(e.target.value)}}
                  ></textarea>
                </div>
              </div>
              <div className="img-form-input">
                <img alt="" src={imgForm} />
              </div>
            </div>
            <div className="ftn-file">
              <h5>Fotos do Evento</h5>
              <div className="input-file-edit">
                {/* <div
                  {...getRootProps()}
                  className={`dropzone ${isDragActive ? "active" : ""}`}
                >
                  <input {...getInputProps()} />
                  <p>
                    Arraste e solte os arquivos aqui ou clique para selecionar.
                  </p>
                </div> */}
                <input type="file" name="file" onChange={(e) => setFile(e.target.files[0])} />
              </div>
            </div>
            {/* <div className="ftn-file">
              <h5>Videos do Evento</h5>
              <FileVideo />
            </div> */}
            <div className="upArq">
              <button onClick={handleSubmit}>Publicar Evento</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PublicarEvento;
