import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainContent from './pages/MainContent';
import SearchPage from './pages/SearchPage';
import Alignment from './pages/Alignment'; 
import Download from './pages/Download';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="black">
        <Container fluid className='d-flex align-items-center'>
          <Navbar.Brand href="#home" className='mr-auto' as={Link} to="/">
            <Image src={require("./img/TFprimate.png")} fluid width="30" height="30"></Image>TFprimate
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/search">Search</Nav.Link>
              <Nav.Link as={Link} to="/alignment">Alignment</Nav.Link>
              <Nav.Link as={Link} to="/download">Download</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path="/" element={<MainContent/>}/>
        <Route exact path="/search" element={<SearchPage/>}/>
        <Route exact path="/alignment" element={<Alignment/>}/>
        <Route exact path="/download" element={<Download/>}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
      <footer className='footer' style={{ backgroundColor: 'lightblue', textAlign: 'center' }}>
        <Container fluid>
          <p>Nowick Lab All Right Reserved &copy; 2023</p>
        </Container>
      </footer>
    </Router>
  );
}

export default App;
