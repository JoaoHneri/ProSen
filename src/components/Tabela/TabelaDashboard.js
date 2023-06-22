import React from "react";
import "../Styles/TabelaDashboard.css";


const TabelaDashboard = () => {
  return (
    <div className="table-wrapper">
      <table>
        <thead id="border">
          <tr>
            <th>Selecione</th>
            <th>Data</th>
            <th>Área</th>
            <th>Título</th>
            <th>Autores</th>
            <th>Tipo</th>
            <th>Orientador</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="radio"/></td>
            <td>22/05/2023</td>
            <td>Desenvolvimento de Sistemas</td>
            <td>A IMPORTÂNCIA DO SONO: APLICATIVO CHAMADO MORPHEUS</td>
            <td>
              OLIVEIRA, Washington L.J.; GONÇALVES, João V. S.; PEDRO, Lian S.
              F.; TAMESON , Aberlan.
            </td>
            <td>Projeto Inovação</td>
            <td>PASSOS, Ingrid B. A.</td>
          </tr>
          <tr>
            <td><input type="radio"/></td>
            <td>22/05/2023</td>
            <td>Desenvolvimento de Sistemas</td>
            <td>A IMPORTÂNCIA DO SONO: APLICATIVO CHAMADO MORPHEUS</td>
            <td>
              OLIVEIRA, Washington L.J.; GONÇALVES, João V. S.; PEDRO, Lian S.
              F.; TAMESON , Aberlan.
            </td>
            <td>Projeto Inovação</td>
            <td>PASSOS, Ingrid B. A.</td>
          </tr>
          <tr>
            <td><input type="radio"/></td>
            <td>22/05/2023</td>
            <td>Desenvolvimento de Sistemas</td>
            <td>A IMPORTÂNCIA DO SONO: APLICATIVO CHAMADO MORPHEUS</td>
            <td>
              OLIVEIRA, Washington L.J.; GONÇALVES, João V. S.; PEDRO, Lian S.
              F.; TAMESON , Aberlan.
            </td>
            <td>Projeto Inovação</td>
            <td>PASSOS, Ingrid B. A.</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default TabelaDashboard;
