import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function MainContent() {
  return (
    <main>
      <Container className="bg-image" fluid>
        <Row>
          <Col className='m-5'>
            <h3>Get the information of Transcription Factors</h3>
            <h3 className="text-success mb-5">from 27 primate species</h3>
            <ul>
              <li className='mb-2'><b>Search</b>: type a name or ID of a Transcription Factors</li>
              <li className='mb-2'><b>Alignment</b>: output sequencing alignment in different priamtes</li>
              <li className='mb-5'><b>Download</b>: get a report file including selected Transcription Factors</li>
              <Button variant="outline-success">Get Started</Button>  
            </ul>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default MainContent;





