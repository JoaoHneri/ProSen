import React from "react";
import "../Styles/Tabela.css";
import Email from "../../Imagens/email.png";
import pdf from "../../Imagens/pdf.png";

const Tabela = () => {
  return (
    <div className="table-wrapper">
      <table>
        <thead id="border">
          <tr>
            <th>Área</th>
            <th>Título</th>
            <th>Autores</th>
            <th>Tipo</th>
            <th>Orientador</th>
            <th>Data</th>
            <th>Email do Líder</th>
            <th>PDF</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Sistemas</td>
            <td>A IMPORTÂNCIA DO SONO: APLICATIVO CHAMADO MORPHEUS</td>
            <td>
              OLIVEIRA, Washington L.J.; GONÇALVES, João V. S.; PEDRO, Lian S.
              F.; TAMESON , Aberlan.
            </td>
            <td>Projeto Inovação</td>
            <td>PASSOS, Ingrid B. A.</td>
            <td>22/05/2023</td>
            <td>
              <img src={Email} alt="Email" />
            </td>
            <td>
              <img src={pdf} alt="PDF" />
            </td>
          </tr>
          <tr>
            <td>Administração</td>
            <td>
              RECYCLE – PROJETO PARA DESCARTE CORRETO DE MATERIAIS REUTILIZÁVEIS
            </td>
            <td>
              FREITAS, Rafael S.; JUNIOR, Edmilson P. S.; DIAS, Jesimiel A. V.
              F.; SANTOS, Samuel D. O.
            </td>
            <td>Projeto Empresa</td>
            <td>OLIVEIRA, Mennandro M.</td>
            <td>22/05/2023</td>
            <td>
              <img src={Email} alt="Email" />
            </td>
            <td>
              <img src={pdf} alt="PDF" />
            </td>
          </tr>
          <tr>
            <td>Desenvolvimento de Sistemas</td>
            <td>A IMPORTÂNCIA DO SONO: APLICATIVO CHAMADO MORPHEUS</td>
            <td>
              OLIVEIRA, Washington L.J.; GONÇALVES, João V. S.; PEDRO, Lian S.
              F.; TAMESON , Aberlan.
            </td>
            <td>Projeto Inovação</td>
            <td>PASSOS, Ingrid B. A.</td>
            <td>22/05/2023</td>
            <td>
              <img src={Email} alt="Email" />
            </td>
            <td>
              <img src={pdf} alt="PDF" />
            </td>
          </tr>
          <tr>
            <td>Administração</td>
            <td>
              RECYCLE – PROJETO PARA DESCARTE CORRETO DE MATERIAIS REUTILIZÁVEIS
            </td>
            <td>
              FREITAS, Rafael S.; JUNIOR, Edmilson P. S.; DIAS, Jesimiel A. V.
              F.; SANTOS, Samuel D. O.
            </td>
            <td>Projeto Empresa</td>
            <td>OLIVEIRA, Mennandro M.</td>
            <td>22/05/2023</td>
            <td>
              <img src={Email} alt="Email" />
            </td>
            <td>
              <img src={pdf} alt="PDF" />
            </td>
          </tr>
          <tr>
            <td>Desenvolvimento de Sistemas</td>
            <td>A IMPORTÂNCIA DO SONO: APLICATIVO CHAMADO MORPHEUS</td>
            <td>
              OLIVEIRA, Washington L.J.; GONÇALVES, João V. S.; PEDRO, Lian S.
              F.; TAMESON , Aberlan.
            </td>
            <td>Projeto Inovação</td>
            <td>PASSOS, Ingrid B. A.</td>
            <td>22/05/2023</td>
            <td>
              <img src={Email} alt="Email" />
            </td>
            <td>
              <img src={pdf} alt="PDF" />
            </td>
          </tr>
          <tr>
            <td>Administração</td>
            <td>
              RECYCLE – PROJETO PARA DESCARTE CORRETO DE MATERIAIS REUTILIZÁVEIS
            </td>
            <td>
              FREITAS, Rafael S.; JUNIOR, Edmilson P. S.; DIAS, Jesimiel A. V.
              F.; SANTOS, Samuel D. O.
            </td>
            <td>Projeto Empresa</td>
            <td>OLIVEIRA, Mennandro M.</td>
            <td>22/05/2023</td>
            <td>
              <img src={Email} alt="Email" />
            </td>
            <td>
              <img src={pdf} alt="PDF" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tabela;
