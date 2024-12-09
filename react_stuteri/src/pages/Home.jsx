import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from 'react-bootstrap/Image';
import Background from '../assets/full_miljo-1.png';
import '../styles/Home.css';

function Home() {
    return (
        <Container fluid className="homeContainer" style={{backgroundImage :`url(${Background})` }}> 

        </Container>


    )
}

export default Home