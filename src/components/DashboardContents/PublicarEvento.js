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
  const [formData, setFormData] = useState({
    user_id: userData.id,
    local: "",
    title: "",
    hour: "",
    type: "",
    descricao: "",
    startDate: "",
    file: null,
  });

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

  const handleChange = (e) => {
    if (e.target.name === "file") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
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
      const data = new FormData();
      data.append("user_id", userData.id);
      data.append("local", formData.local);
      data.append("title", formData.title);
      data.append("hour", formatTime(formData.hour));
      data.append("type", formData.type);
      data.append("descricao", formData.descricao);
      data.append("startDate", formatDate(formData.startDate));
      data.append("file", formData.file);

      const response = await api.post(url, data);
      alert("foi")
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
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="itens-form">
                  <label className="edit-label">Data:</label>
                  <input
                    type="date"
                    name="startDate"
                    className="input"
                    value={formData.startDate}
                    onChange={handleChange}
                  />
                  <label className="edit-label">Horário:</label>
                  <input
                    type="time"
                    name="hour"
                    className="input"
                    value={formData.hour}
                    onChange={handleChange}
                  />
                </div>
                <div className="itens-form">
                  <label className="edit-label">Local:</label>
                  <select
                    name="local"
                    className="input"
                    value={formData.local}
                    onChange={handleChange}
                  >
                    <option value="valor1">Valor 1</option>
                    <option value="valor2" selected>
                      Valor 2
                    </option>
                    <option value="valor3">Valor 3</option>
                  </select>
                  <label className="edit-label">Modalidade:</label>
                  <select
                    name="type"
                    className="input"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    <option value="valor1">Valor 1</option>
                    <option value="valor2" selected>
                      Valor 2
                    </option>
                    <option value="valor3">Valor 3</option>
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
                    value={formData.descricao}
                    onChange={handleChange}
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
                <div
                  {...getRootProps()}
                  className={`dropzone ${isDragActive ? "active" : ""}`}
                >
                  <input {...getInputProps()} />
                  <p>
                    Arraste e solte os arquivos aqui ou clique para selecionar.
                  </p>
                </div>

                {files.length > 0 && (
                  <div>
                    <h4>Pré-visualizações:</h4>
                    <div className="preview-container">
                      {files.slice(0, 4).map((file, index) => (
                        <div key={index} className="preview-item">
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`Preview ${index}`}
                            className="preview-image"
                          />
                          <button onClick={() => removeFile(index)}>
                            Remover
                          </button>
                        </div>
                      ))}
                      <div
                        {...getRootProps()}
                        className={`dropzone-edit ${
                          isDragActive ? "active" : ""
                        }`}
                      >
                        <input {...getInputProps()} />
                        <p>
                          {" "}
                          <AiOutlinePlus id="edit-icon-input" />
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                <input type="file" name="file" onChange={handleChange} />
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