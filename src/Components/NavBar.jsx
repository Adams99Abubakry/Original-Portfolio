import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import "../Components/navBar.css"
import X from "../assets/Images/twitter-x.svg"
import Linkedin from "../assets/Images/linkedin.svg"
import Github from "../assets/Images/github.svg"

const NavBar = () => {
  const linkedinLink = "https://www.linkedin.com/in/adams-abubakry-siddique-50bb12304/";
  const Resume ="https://drive.google.com/file/d/1x16rQEjht5B4Pc46K4n_C97Zz_OPYXF7/view";
  const gitLink = "https://github.com/Adams99Abubakry";

  const names = ["Skills", "Services"];
  const [currentName, setCurrentName] = useState(names[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [names.length]);

  useEffect(() => {
    setCurrentName(names[index]);
  }, [index, names]);

  
  return (
    <div>
      <Navbar expand="lg" className="nav-head">
        <Container fluid className="">
          <h1 className="brandName">
            Adams Abubakry Siddique
          </h1>

          <div className="socials">
            <a href={linkedinLink} target="_blank">
              <img src={Linkedin} alt="" />
            </a>
            <a href={gitLink} target="_blank">
              <img src={Github} alt="" />
            </a>
          </div>

          <Navbar.Toggle
            className="nav-toggle"
            style={{ border: "2px solid #fe7f2d" }}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link className="nav-menu">Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/about">
                <Nav.Link className="nav-menu">About Me</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/skills">
                <Nav.Link key={currentName} className="nav-menu-addOn">
                  {currentName}
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/projects">
                <Nav.Link className="nav-menu">Projects</Nav.Link>
              </LinkContainer>

              <Nav.Link href={Resume} target="_blank" className="nav-menu">
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar