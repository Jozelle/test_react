import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
<footer className="bg-body-tertiary py-3 fixed-bottom">
    <Container fluid>
        <Row className="justify-content-center align-items-center">
            <Col md="auto" className="text-center">
            <p className="text-muted">&copy; {new Date().getFullYear()} Johanna Gull</p>
            </Col>
        </Row>
    </Container>
</footer>

    )
}

export default Footer