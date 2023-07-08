import Container from "react-bootstrap/Container";
import logo from "../../Imagens/logo-nav.png";
import { Navbar, Nav } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import "../Styles/NavBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../useContext/UserContext";
import { useNavigate } from "react-router-dom";

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
                <Link to={"/dashboardAdmin"}>
                  <Nav.Link id="link-nav" href="#link">
                    Bem vindo {userData.name}
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