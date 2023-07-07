import React, { useRef,useState } from "react";
import imgForm from "../../Imagens/imageForm.png";
import "../Styles/StyleContents/PublicarEvento.css";
import FileVideo from "../Configs/InputVideo";
import { useDropzone } from "react-dropzone";
import "../Styles/InputFile.css";
import { AiOutlinePlus } from "react-icons/ai";
import api from "../../services/api";
import { useContext } from "react";
import { UserContext } from "../useContext/UserContext";
import Upload from '../../Imagens/Upload.png'
import AddImageEvent from '../../Imagens/AddImageEvent.png'
import { useNavigate } from "react-router-dom";

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
  const inputFileRef = useRef(null);
  const navigate = useNavigate();

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
  const handleFileSelect = () => {
    inputFileRef.current.click();
  };
  

  const removeFile = (index) => {
    setFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles.splice(index, 1);
      return newFiles;
    });
  };


  const formatDate = (date) => {
    const formattedDate = new Date(date);
    const formattedDateString = formattedDate.toISOString().split('T')[0];
    return formattedDateString;
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
      alert('Sucesso, Evento Publicado!')
      navigate('/eventos')
      console.log(response.data); // Mensagem de sucesso e dados do evento
  
      // Faça algo com a resposta, como redirecionar para outra página
    } catch (error) {
      console.error(error);
      alert('Publicação do Evento falhou, verifique se todos os campos estão preenchidos corretamente')
      // Trate o erro aqui
    }
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
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
              <div >
                  
                    <label htmlFor="fileInput" className="fileInputContainer">
                      <span className="labelText">
                        <div><img id="UpIcon" src={Upload} alt="Arraste o arquivo"/></div>
                        <p id="arrest">Arraste e solte o arquivo aqui</p>
                        <p id="or">ou <span id="sele">selecione o arquivo</span></p>
                      </span>
                      
                      <input
                        ref={inputFileRef}
                        id="fileInput"
                        type="file"
                        style={{ display: "none" }}
                        name="file"
                      />
                      
                    </label>
              </div>
            </div>
            <div className="ftn-file">
              <h5>Fotos do Evento</h5>
              <div className="img-form-input">
                <div
                  onDrop={handleFileDrop}
                  onDragOver={handleDragOver}
                >
                  {file ? (
                    <div>
                      <span>Arquivo selecionado:</span>
                      <br />
                      <span>{file.name}</span>
                    </div>
                  ) : (
                    <label htmlFor="fileInput" className="fileInputContainer" onClick={handleFileSelect}>
  <span className="labelText">
    <div><img id="UpIconAdd" src={AddImageEvent} alt="Arraste o arquivo"/></div>
  </span>
  <input
    ref={inputFileRef}
    id="fileInput"
    type="file"
    style={{ display: "none" }}
    name="file"
    onChange={(e) => {
      setFile(e.target.files[0]);
    }}
  />
</label>

                  )}
                </div>
              </div>
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
                {/* <input type="file" name="file" onChange={(e) => setFile(e.target.files[0])} /> */}
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
