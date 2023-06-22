import React, { useState } from 'react';
import imgForm from "../../Imagens/imageForm.png"
import "../Styles/StyleContents/PublicarProjeto.css";
import Select from 'react-select';

const options = [
  { value: 'valor1', label: 'Valor 1' },
  { value: 'valor2', label: 'Valor 2' },
  { value: 'valor3', label: 'Valor 3' },
]

const options2 = [
  { value: 'valor1', label: 'Valor 1' },
  { value: 'valor2', label: 'Valor 2' },
  { value: 'valor3', label: 'Valor 3' },
];


const  PublicarProjeto = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };
  return (
    <>
    <div>
    <form>
      <div id="color-bg">
        <div className="tx-form">
        <h4>Dados Do Projeto</h4>
        </div>
      <div className="form-edit-section-size">
        <div className="form-edit-section">
                <div>
                  <label className="edit-label">Titulo:</label>
                <input type="text" name="text" class="input" pattern="\d+"/>
                </div>

                <div>
                <label className="edit-label">Área:</label>
                <input type="text" name="text" class="input" pattern="\d+"/>

                </div>
                  <div className="itens-form">
                  <label  className="edit-label">Turma:</label>
                  <input type="date" name="text" class="input" pattern="\d+"/>
                  <label  className="edit-label">Turno:</label>
              <select name="select" class="input">
                <option value="valor1">Valor 1</option>
                <option value="valor2" selected>Valor 2</option>
                <option value="valor3">Valor 3</option>
            </select>
                  </div>

                  <div className="itens-form">
                  <label  className="edit-label">Tipo:</label>
              <select name="select" class="input">
                <option value="valor1">Valor 1</option>
                <option value="valor2" selected>Valor 2</option>
                <option value="valor3">Valor 3</option>
            </select>
                  <label  className="edit-label">Data:</label>
                  <input type="time" name="text" class="input" pattern="\d+"/>
                  </div>

                  <div className="itens-form">
                <label className="edit-label">Vincular ao Evento</label>
              <select name="select" class="input">
                <option value="valor1">Valor 1</option>
                <option value="valor2" selected>Valor 2</option>
                <option value="valor3">Valor 3</option>
            </select>
                </div>
                <div  className="itens-form">
                  <label className="edit-label">Orientador:</label>
                <input type="text" name="text" class="input" pattern="\d+"/>
                </div>
                <div  className="itens-form">
                  <label className="edit-label">Email do Líder do Grupo</label>
                <input type="text" name="text" class="input" pattern="\d+"/>
                </div>
                <div>
                  <label className="edit-label">Autores</label>
                  <Select
                    options={options}
                    isMulti
                    value={selectedOptions}
                    onChange={handleChange}
                  />
                   <Select
                    options={options2}
                    isMulti
                    value={selectedOptions}
                    onChange={handleChange}
                  />
                </div>
        </div>
        <div className="img-form-input">
          <p>Anexar Arquivos do Projeto em (PDF)</p>
          <img alt="" src={imgForm}/> 
        </div>
        </div>
        <div className="upArq">
          <button>Publicar Projeto</button>
        </div>
        </div>
        

        </form>

     </div>

    </>
  );
};

export default PublicarProjeto;
