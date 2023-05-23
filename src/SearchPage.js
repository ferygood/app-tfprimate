import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'; 
import Form from 'react-bootstrap/Form';
import './SearchPage.css';

function SearchPage(){
  return(
    <>
      <Container className='my-5'>
        <Row className='justify-content-center'>
          <Card className='search-card'>
            <Card.Header>Search with TF name or ID</Card.Header>
            <Card.Body>
              <Card.Text>
                You can get phylogenetic tree, RNAseq expression profile,...
              </Card.Text>
              <Form>
                <Form.Group className='mb-3'>
                  <Form.Control placeholder='i.e. ZNF14, ENSGXXX'></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formCheck1'>
                  <Form.Check type="checkbox" label="Phylogenetic Tree"></Form.Check>
                </Form.Group>
                <Form.Group className='mb-3' controlId="formCheck2">
                  <Form.Check type="checkbox" label="RNA-seq in tissue"></Form.Check>
                </Form.Group>
                <Button variant="outline-success" type="submit">Submit</Button>{' '}
              </Form>

            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  )
}

export default SearchPage;