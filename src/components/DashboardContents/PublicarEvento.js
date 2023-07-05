import React, { useState } from "react";
import axios from "axios";
import { useDropzone } from 'react-dropzone';
import imgForm from "../../Imagens/imageForm.png";
import "../Styles/StyleContents/PublicarEvento.css";
import { AiOutlinePlus } from 'react-icons/ai';
import FileUpload from "../Configs/InputFile";
import { FiVideo } from 'react-icons/fi';

import FileVideo from "../Configs/InputVideo";

const PublicarEvento = () => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
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
  const [formData, setFormData] = useState({
    user_id: "",
    area: "",
    title: "",
    authors: "",
    type: "",
    teacher: "",
    startDate: "",
    email: "",
    pdf: null,
  });

  const handleInputChange = (event) => {
    if (event.target.type === "file") {
      setFormData({ ...formData, pdf: event.target.files[0] });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const eventData = new FormData();
    eventData.append('user_id', formData.user_id);
    eventData.append('area', formData.area);
    eventData.append('title', formData.title);
    eventData.append('authors', formData.authors);
    eventData.append('type', formData.type);
    eventData.append('teacher', formData.teacher);
    eventData.append('startDate', formData.startDate);
    eventData.append('email', formData.email);
    eventData.append('pdf', formData.pdf);

    // Append image files to the form data
    files.forEach((file, index) => {
      eventData.append(`image${index + 1}`, file);
    });

    try {
      const response = await axios.post("http://localhost:3333/event", eventData);
      console.log(response.data);
      // Realize as ações desejadas após o evento ser publicado com sucesso
    } catch (error) {
      console.error(error);
      alert("Error")
      // Lide com o erro de forma adequada
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div id="color-bg">
            <div className="tx-form">
              <h4>Dados do Evento</h4>
            </div>
            <div className="form-edit-section-size">
              <div className="form-edit-section">
                <div>
                  <label className="edit-label">Titulo:</label>
                  <input
                    type="text"
                    name="title"
                    className="input"
                    pattern="\d+"
                    value={formData.title}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="itens-form">
                  <label className="edit-label">Data:</label>
                  <input
                    type="date"
                    name="startDate"
                    className="input"
                    pattern="\d+"
                    value={formData.startDate}
                    onChange={handleInputChange}
                  />
                  <label className="edit-label">Horário:</label>
                  <input
                    type="time"
                    name="time"
                    className="input"
                    pattern="\d+"
                    value={formData.time}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="itens-form">
                  <label className="edit-label">Local:</label>
                  <select
                    name="area"
                    className="input"
                    value={formData.area}
                    onChange={handleInputChange}
                  >
                    <option value="valor1">Valor 1</option>
                    <option value="valor2">Valor 2</option>
                    <option value="valor3">Valor 3</option>
                  </select>
                  <label className="edit-label">Modalidade:</label>
                  <select
                    name="type"
                    className="input"
                    value={formData.type}
                    onChange={handleInputChange}
                  >
                    <option value="valor1">Valor 1</option>
                    <option value="valor2">Valor 2</option>
                    <option value="valor3">Valor 3</option>
                  </select>
                </div>
                <div className="itens-form-text">
                  <label
                    className="edit-label"
                    htmlFor="formDescricao"
                  >
                    Descrição
                  </label>
                  <textarea
                    className="form-control"
                    id="formDescricao"
                    rows="3"
                    placeholder="Digite a descrição"
                    value={formData.description}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>
              <div className="img-form-input">
                <img alt="" src={imgForm} />
              </div>
            </div>
            <div className="ftn-file">
              <h5>Fotos do Evento</h5>
              <div className='input-file-edit'>
                <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
                  <input {...getInputProps()} />
                  <p>Arraste e solte os arquivos aqui ou clique para selecionar.</p>
                </div>

                {files.length > 0 && (
                  <div>
                    <h4>Pré-visualizações:</h4>
                    <div className="preview-container">
                      {files.slice(0, 4).map((file, index) => (
                        <div key={index} className="preview-item">
                          <img src={URL.createObjectURL(file)} alt={`Preview ${index}`} className="preview-image" />
                          <button onClick={() => removeFile(index)}>Remover</button>
                        </div>
                      ))}
                      <div {...getRootProps()} className={`dropzone-edit ${isDragActive ? 'active' : ''}`}>
                        <input {...getInputProps()} />
                        <p> <AiOutlinePlus id='edit-icon-input' /></p>
                      </div>
                    </div>
                  </div>
                )}

                {files.length < 4 && (
                  <div>
                    <div className="additional-preview">
                      <input type="file" accept="image/*" onChange={(e) => setFiles((prevFiles) => [...prevFiles, e.target.files[0]])}></input>
                    </div>
                  </div>
                )}
              </div>
            </div>
          
            <div className="upArq">
              <button type="submit">Publicar Evento</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PublicarEvento;
