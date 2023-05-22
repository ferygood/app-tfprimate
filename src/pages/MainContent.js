import React, { useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './MainContent.css';

function MainContent() {
  const firstRowRef = useRef(null);

  const scrollToFirstRow = () => {
    firstRowRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <>
      <main className="bg-image">
        <Row>
          <Col className='m-5'>
            <h3>Get the information of Transcription Factors</h3>
            <h3 className="text-success mb-5">from 27 primate species</h3>
            <ul>
              <li className='mb-2'><b>Search</b>: type a name or ID of a Transcription Factors</li>
              <li className='mb-2'><b>Alignment</b>: output sequencing alignment in different priamtes</li>
              <li className='mb-5'><b>Download</b>: get a report file including selected Transcription Factors</li>
              <Button variant="outline-success" onClick={scrollToFirstRow}>Get Started</Button>  
            </ul>
          </Col>
        </Row>
      </main>
      <Row id="first-row" className="my-5" style={{ backgroundColor: 'rgba(149, 185, 168, 0.16)' }} ref={firstRowRef}>
        <Col className='m-5'>
          <p className='my-5'>
            <h3>Search by ID or name</h3>
            Get information of selected TF in primates
          </p>
        </Col>
        <Col xs={8}>
          <Image src={require("../img/ZNF14.jpg")} fluid />
        </Col>
      </Row>
      <Row className='my-5' style={{ backgroundColor: 'rgba(204, 255, 230, 0.36)' }}>
        <Col xs={8}>
          <Image src={require("../img/test_rnaseq.png")} fluid />
        </Col>
        <Col className='m-5'>
          <h3>RNA-seq</h3>
          <p>Expression of TF in different tissues</p>
        </Col>
      </Row>
      <div className="scroll-buttons">
        <Button variant="outline-dark" onClick={scrollToTop}>Top</Button><br></br>
        <Button variant="outline-dark" onClick={scrollToBottom}>Bottom</Button>
      </div>
    </>
  );
}

export default MainContent;
