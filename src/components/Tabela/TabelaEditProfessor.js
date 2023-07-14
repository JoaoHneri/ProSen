import React from "react";
import "../Styles/TabelaDashboard.css";



const TabelaEditProfessor = ({}) => {
  return (
    <div className="table-wrapper">
      <table>
        <thead id="border">
          <tr>
            <th>Selecione</th>
            <th>Registro</th>
            <th>Nome</th>
            <th>Graduação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="radio"/></td>
            <td>956622554225</td>
            <td>ERIK DO CARMO MARQUES</td>
            <td>TECNOLOGIA DA INFORMAÇÃO</td>
          </tr>
          <tr>
            <td><input type="radio"/></td>
            <td>565655544554</td>
            <td>INGRED BARRETO DE ALMEIDA PASSOS</td>
            <td>ADMINISTRAÇÃO</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TabelaEditProfessor;
