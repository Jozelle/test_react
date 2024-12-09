import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup'

function Contact() {
    return (
        <Container className='horse-container'> 
            <Row>
                <Col as="h1">Kontakta oss</Col>
            </Row>
            <Row>
                <Col>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>              
                <Col xs="auto" className="my-1">
                    <Button type="submit">Submit</Button>
                </Col>
                    
                
                
                
                </Col>
            </Row>
            
        </Container>


    )
}

export default Contact