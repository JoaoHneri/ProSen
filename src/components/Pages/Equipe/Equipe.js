import React from "react";
import NavBar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import SectionBanner2 from "../../Section-Banner/Banner2";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import imgEquipe1 from "../../../Imagens/foto-erick.png";
import imgEquipe2 from "../../../Imagens/foto-ingrid.png";
import imgEquipe3 from "../../../Imagens/Imagens Equipe/edfran.png";
import imgEquipe4 from "../../../Imagens/Imagens Equipe/tatiane.png";
import imgEquipe5 from "../../../Imagens/Imagens Equipe/veronia.png";
import imgEquipe6 from "../../../Imagens/Imagens Equipe/victor.png";
import imgEquipe7 from "../../../Imagens/Imagens Equipe/vinicius.png";
import imgEquipe8 from "../../../Imagens/Imagens Equipe/silas.jpeg";
import imgEquipe9 from "../../../Imagens/Imagens Equipe/jean.jpg";
import imgEquipe10 from "../../../Imagens/Imagens Equipe/joao.jpeg";
import "../../Styles/Equipe.css";

function Equipe() {
  return (
    <>
      <NavBar />
      <SectionBanner2 />
      <div className="content-container ord">
        <div className="tx-cont container Section_Prosen">
          <h1>Idealizadores</h1>
        </div>
      </div>
      <div class="sec-equipe-1">
        <div class="image-container-s">
          <img alt="" src={imgEquipe1} />
        </div>
        <div class="sec-equipe-2">
          <div class="container edit1">
            <h4 id="edit-tx-h4">Erik do Carmo Marques</h4>
            <p id="edit-tx">
              Pós graduando no Programa de Pós-Graduação em Ciência da
              Computação. Possui Pós Graduação <br />
              lato-sensu no Curso de Especialização em Gestão da informação com
              ênfase em Redes de Computadores e<br /> Aplicações Web pela
              Faculdade Santissimo Sacramento (2018), MBA em Business
              intelligence
              <br /> e graduação em Sistemas para Internet pela Faculdade Anísio
              Teixeira (2016). Tem experiência na área
              <br /> acadêmica ministrando aulas em cursos de qualificação
              profissional, ensino técnico e superior além de
              <br /> trabalhar em projetos de desenvolvimento Web como
              freelancer. Atualmente exerce a função Gerente de Informações<br/> Gerenciais (MIS)  na empresa Tel Centro de Contatos.
            </p>
            <div id="icons-divs">
              <AiOutlineMail id="icons-equipe" />
              <AiFillLinkedin id="icons-equipe" />
            </div>
          </div>
        </div>
      </div>
      <div class="sec-equipe-1">
        <div class="sec-equipe-2-v2">
          <div class="container edit1-v2">
            <h4 id="edit-tx-h4-v2">Ingrid Barreto de Almeida Passos</h4>
            <p id="edit-tx-v2">
              Especialista em Gestão de Projetos (2022) e Gestão de Pessoas
              (2015). Graduada em
              <br />
              Administração pela Universidade Salvador (2014). Experiência na
              área Administrativa <br />
              Responsabilidade Social Empresarial e Empreendedorismo. Docente e
              Orientadora de Projetos
              <br /> com prática de ensino em Comunicação Empresarial, Gestão de
              Pessoas, Inovação e <br />
              Empreendedorismo, Gestão de Projetos, Liderança de Equipes e
              outros.
            </p>
            <div id="icons-divs-2">
              <AiOutlineMail id="icons-equipe" />
              <AiFillLinkedin id="icons-equipe" />
            </div>
          </div>
        </div>
        <div class="image-container2">
          <img alt="" src={imgEquipe2} />
        </div>
      </div>
      <div className="tx-cont container Section_Prosen">
        <h1>Desing & Front End</h1>
      </div>
      <div class="sec-equipe-1">
        <div class="image-container-s">
          <img alt="" src={imgEquipe3} />
        </div>
        <div class="sec-equipe-2">
          <div class="container edit1">
            <h4 id="edit-tx-h4">Édfran de Almeida Pereira</h4>
            <p id="edit-tx">
            Cursando Desenvolvimento de Sistemas no SENAI - Feira de Santana e participante <br/>da Mostra Científica e Tecnológica de 2022, conquistando o 1º lugar. <br/>Com sua formação no ensino médio ecomprometimento com o programa  de estudos no SENAI, está adquirindo as habilidades técnicas <br/> e conhecimentos necessários para se destacar <br/>no campo do Desenvolvimento de Sistemas. Sua dedicação aos estudos<br/> e entusiasmo pela tecnologia o tornam um exemplo de estudante, sempre disposto a assumir novos projetos e desafios
            </p>
            <div id="icons-divs">
              <AiOutlineMail id="icons-equipe" />
              <AiFillLinkedin id="icons-equipe" />
            </div>
          </div>
        </div>
      </div>
      <div class="sec-equipe-1">
        <div class="sec-equipe-2-v2">
          <div class="container edit1-v2">
            <h4 id="edit-tx-h4-v2">Tatiane Santiago Santana</h4>
            <p id="edit-tx-v2">
            Graduanda em Licenciatura em Matemática pela UEFS e estudante do curso técnico de Desenvolvimento de Sistemas do SENAI - Bahia, com enorme paixão pela criação de soluções tecnológicas inovadoras. Ao longo do seu percursoacadêmico, tem buscado aprimorar constantemente suas habilidades na área de desenvolvimento web,<br/>  mobile e design de experiência do usuário. Aperfeiçoamentos através de cursos lhe permitiram adquirir um conhecimento sólido e prático nesses domínios, capacitando-a para criar interfaces intuitivas e visualmente atraentes. Busca constantemente por novas oportunidades de enfrentar desafios complexos com criatividade e determinação.
            </p>
            <div id="icons-divs-2">
              <AiOutlineMail id="icons-equipe" />
              <AiFillLinkedin id="icons-equipe" />
            </div>
          </div>
        </div>
        <div class="image-container2">
          <img alt="" src={imgEquipe4} />
        </div>
      </div>
      <div class="sec-equipe-1">
        <div class="image-container-s">
          <img alt="" src={imgEquipe5} />
        </div>
        <div class="sec-equipe-2">
          <div class="container edit1">
            <h4 id="edit-tx-h4">Verônica Lobo de Santana</h4>
            <p id="edit-tx">
            Cursando Desenvolvimento de Sistemas no SENAI - Feira de Santana, participante do Hackaton  Orbita em 2023 ficando em 2º lugar.<br/> Com sua formação no ensino médio e seu atual programa de estudos no Senai,<br/> está adquirindo as habilidades técnicas e conhecimentos necessários para se destacar no campo do Desenvolvimento de Sistemas.<br/> Sua natureza proativa e atenciosa complementam essas habilidades, <br/>tornando-a uma estudante dedicada e promissora em sua área de estudo.
            </p>
            <div id="icons-divs">
              <AiOutlineMail id="icons-equipe" />
              <AiFillLinkedin id="icons-equipe" />
            </div>
          </div>
        </div>
      </div>
      <div class="sec-equipe-1">
        <div class="sec-equipe-2-v2">
          <div class="container edit1-v2">
            <h4 id="edit-tx-h4-v2">Victor Wallace Anselmo Santos da Silva</h4>
            <p id="edit-tx-v2">
            Profissional apaixonado por vendas e desenvolvimento de sistemas. Com anos de experiência<br/> na área comercial, desenvolveu habilidades sólidas em negociação e construção de relacionamentos.  Ao unir seu <br/>conhecimento em tecnologia,é capaz de oferecer soluções personalizadas que impulsionam os negócios dos clientes.<br/> Sua abordagem estratégica e focada em resultados  o torna a pessoa ideal para alavancar as vendase maximizar o crescimento.
            </p>
            <div id="icons-divs-2">
              <AiOutlineMail id="icons-equipe" />
              <AiFillLinkedin id="icons-equipe" />
            </div>
          </div>
        </div>
        <div class="image-container2">
          <img alt="" src={imgEquipe6} />
        </div>
      </div>
      <div class="sec-equipe-1">
        <div class="image-container-s">
          <img alt="" src={imgEquipe7} />
        </div>
        <div class="sec-equipe-2">
          <div class="container edit1">
            <h4 id="edit-tx-h4">Vinícius Moreira Silva Santos</h4>
            <p id="edit-tx">
            Possui uma formação multidisciplinar, que inclui uma graduação em Radiologia, graduação em Matemática (cursando) e curso técnico em Desenvolvimento de Sistemas SENAI-BA (cursando).<br/>Almeja aprimorar constantemente suas habilidades na área de desenvolvimento web, UX/UI design e também no desenvolvimento mobile. Possui uma abordagem abrangente e inovadora ao desenvolvimento de sistemas,<br/> combinando conhecimentos técnicos, habilidades analíticas e de resolução de problemas. Sua busca constante por desafios o impulsiona a aplicar seu conhecimento diversificado e criar soluções tecnológicas eficazes, criativas e impactantes.
            </p>
            <div id="icons-divs">
              <AiOutlineMail id="icons-equipe" />
              <AiFillLinkedin id="icons-equipe" />
            </div>
          </div>
        </div>
      </div>
      <div className="tx-cont container Section_Prosen">
        <h1>Full Stack</h1>
      </div>
      <div class="sec-equipe-1">
        <div class="sec-equipe-2-v2">
          <div class="container edit1-v2">
            <h4 id="edit-tx-h4-v2">Silas Silva Lima de Matos</h4>
            <p id="edit-tx-v2">
              Estudante dedicado do curso de desenvolvimento de sistemas no
              Senai, com experiência em JavaScript, Node.js, React.js e MongoDB.
              Sua paixão pela tecnologia e busca contínua de conhecimento o
              tornam um promissor desenvolvedor em ascensão,pronto para
              enfrentar desafios e contribuir com soluções inovadoras.
            </p>
            <div id="icons-divs-2">
              <AiOutlineMail id="icons-equipe" />
              <AiFillLinkedin id="icons-equipe" />
            </div>
          </div>
        </div>
        <div class="image-container2">
          <img alt="" id="imgBorder" src={imgEquipe8} />
        </div>
      </div>
      <div class="sec-equipe-1">
        <div class="image-container-s">
          <img alt="" id="imgBorder" src={imgEquipe10} />
        </div>
        <div class="sec-equipe-2">
          <div class="container edit1">
            <h4 id="edit-tx-h4">João Henrique Neri de Sousa</h4>
            <p id="edit-tx">
              Estudante de Desenvolvimento de Sistemas no Senai e
               em paralelo cursando o
              Superior em Bacharelado <br/>em Sistemas de Informação no IFBA-
              Instituto Federal da Bahia. Com interesse na área de desenvolvimento <br/>de sistemas,  e acredito que a área de desenvolvimento de softwares é
              uma área muito interessante e em constante mudança. Sempre muito
              interessado em aprender mais sobre a profissão de desenvolvedor de
              software.
            </p>
            <div id="icons-divs">
              <AiOutlineMail id="icons-equipe" />
              <AiFillLinkedin id="icons-equipe" />
            </div>
          </div>
        </div>
      </div>
      <div className="tx-cont container Section_Prosen">
        <h1>Back End</h1>
      </div>
      <div class="sec-equipe-1">
        <div class="sec-equipe-2-v2">
          <div class="container edit1-v2">
            <h4 id="edit-tx-h4-v2">Jean da Silva Freitas</h4>
            <p id="edit-tx-v2">
              Um estudante promissor no campo do desenvolvimento de sistemas.
              Movido pela curiosidade e pelo desejo de criar soluções inovadoras
              para desafios complexos. Entusiasta do back-end, possui um
              profundo conhecimento das linguagens de programação e estruturas
              relacionadas ao desenvolvimento de sistemas. Dominio de
              habilidades em linguagens como Java, JavaScript e PHP, além de
              estar sempre atualizado com as mais recentes tendências e
              tecnologias nesse campo em constante evolução.
            </p>
            <div id="icons-divs-2">
              <AiOutlineMail id="icons-equipe" />
              <AiFillLinkedin id="icons-equipe" />
            </div>
          </div>
        </div>
        <div class="image-container2">
          <img alt="" id="imgBorder" src={imgEquipe9} />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Equipe;
