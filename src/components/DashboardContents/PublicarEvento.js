import React from "react";
import imgForm from "../../Imagens/imageForm.png"
import "../Styles/StyleContents/PublicarEvento.css";
import FileUpload from "../Configs/InputFile";
import FileVideo from "../Configs/InputVideo";

const  PublicarEvento = () => {
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
                <input type="text" name="text" class="input" pattern="\d+"/>
                </div>
                  <div className="itens-form">
                  <label  className="edit-label">Data:</label>
                  <input type="date" name="text" class="input" pattern="\d+"/>
                  <label  className="edit-label">Horário:</label>
                  <input type="time" name="text" class="input" pattern="\d+"/>
                  </div>
                <div className="itens-form">
              <label  className="edit-label">Local:</label>
              <select name="select" class="input">
                <option value="valor1">Valor 1</option>
                <option value="valor2" selected>Valor 2</option>
                <option value="valor3">Valor 3</option>
            </select>
            <label  className="edit-label">Modalidade:</label>
              <select name="select" class="input">
                <option value="valor1">Valor 1</option>
                <option value="valor2" selected>Valor 2</option>
                <option value="valor3">Valor 3</option>
            </select>
            </div>
            <div  className="itens-form-text">
            <label  className="edit-label" htmlFor="formDescricao">Descrição</label>
                        <textarea className="form-control" id="formDescricao" rows="3" placeholder="Digite a descrição"></textarea>
            </div>

        </div>
        <div className="img-form-input">
          <img alt="" src={imgForm}/> 
        </div>
        
        </div>
        <div className="ftn-file">
          <h5>Fotos do Evento</h5>
        <FileUpload/>
        </div>
        <div className="ftn-file">
          <h5>Videos do Evento</h5>
        <FileVideo/>
        </div>
        <div className="upArq">
          <button>Publicar Evento</button>
        </div>
        </div>
        </form>
     </div>

    </>
  );
};

export default PublicarEvento;
