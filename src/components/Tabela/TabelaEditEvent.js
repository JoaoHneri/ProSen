import React from "react";
import "../Styles/TabelaDashboard.css";



const TabelaEditEvent = () => {
  return (
    <div className="table-wrapper">
      <table>
        <thead id="border">
          <tr>
            <th>Selecione</th>
            <th>Data</th>
            <th>Título</th>
            <th>Local</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="radio"/></td>
            <td>22/05/2023</td>
            <td>Mostra de Projetos e Pesquisa Científica 2023.1</td>
            <td>SENAI - FEIRA DE SANTANA</td>
          </tr>
          <tr>
            <td><input type="radio"/></td>
            <td>22/05/2023</td>
            <td>Mostra de Projetos e Pesquisa Científica 2023.1</td>
            <td>SENAI - FEIRA DE SANTANA</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TabelaEditEvent;
