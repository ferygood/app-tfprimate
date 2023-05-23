import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useRef } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainContent from './pages/MainContent';
import SearchPage from './pages/SearchPage';
import RenderRunHTML from './pages/Alignment'; 
import Download from './pages/Download';
import About from './pages/About';

function App() {
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const navbarRef = useRef(null);

  const handleNavLinkClick = () => {
    if (navbarRef.current) {
      navbarRef.current.collapse();
      setNavbarExpanded(false);
    }
  };

  return (
    <Router>
      <Navbar
        ref={navbarRef}
        expanded={navbarExpanded}
        onToggle={(expanded) => setNavbarExpanded(expanded)}
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="black"
      >
        <Container fluid className="d-flex align-items-center">
          <Navbar.Brand href="#home" className="mr-auto" as={Link} to="/">
            <Image src={require("./img/TFprimate.png")} fluid width="30" height="30" />
            TFprimate
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/search" onClick={handleNavLinkClick}>
                Search
              </Nav.Link>
              <Nav.Link as={Link} to="/alignment" onClick={handleNavLinkClick}>
                Alignment
              </Nav.Link>
              <Nav.Link as={Link} to="/download" onClick={handleNavLinkClick}>
                Download
              </Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={handleNavLinkClick}>
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/alignment" element={<RenderRunHTML />} />
        <Route path="/download" element={<Download />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <footer className="footer" style={{ backgroundColor: 'lightblue', textAlign: 'center' }}>
        <Container fluid>
          <p>Nowick Lab All Right Reserved &copy; 2023</p>
        </Container>
      </footer>
    </Router>
  );
}

export default App;
