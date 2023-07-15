import { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Imagens/logo-nav.png";
import "../Styles/NavBar.css";
import { UserContext } from "../useContext/UserContext";

function NavBar() {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();

  
  return (
    <Navbar expand="lg" className="nav-edit">
      <Container>
        <Navbar.Brand >
          <Link to={"/"}>
            <img src={logo} alt="Logo" id="logo-nav" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link id="link-nav" href="/eventos">
              Eventos
            </Nav.Link>
            <Nav.Link id="link-nav" href="/repositorios">
              Repositório
            </Nav.Link>
            <Nav.Link
              id="link-nav"
              href="/equipe"
            >
              Contato
            </Nav.Link>
            <div className="link-nav-login">
              {userData.logado ? (
                <Link to={"/dashboard"}>
                  <Nav.Link id="link-nav" href="#link">
                    Bem vindo {userData.nameUser}
                  </Nav.Link>
                </Link>
              ) : (
                <Link to={"/dashboard"}>
                  <Nav.Link id="link-nav" href="#link">
                    Conta ProSen
                  </Nav.Link>
                </Link>
              )}
              

              <FaUserAlt id="icon-nav" />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;