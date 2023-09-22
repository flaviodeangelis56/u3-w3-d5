import { Button, Col, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./logo/Spotify_Logo.png";

const SideBar = () => {
  return (
    <Col xs={2} className="col-2">
      <Navbar
        className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
        id="sidebar"
      >
        <Container>
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Spotify_Logo" width="131" height="40" />
          </Link>
          <Button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <Link className="nav-item nav-link" to="index.html">
                    <i className="fas fa-home fa-lg"></i>&nbsp; Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-item nav-link" to="#">
                    <i className="fas fa-book-open fa-lg"></i>&nbsp; Your Library
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>

        <div className="nav-btn">
          <Button className="btn signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="btn login-btn" type="button">
            Login
          </Button>
          <Link to="#">Cookie Policy</Link> |<Link to="#"> Privacy</Link>
        </div>
      </Navbar>
    </Col>
  );
};

export default SideBar;
