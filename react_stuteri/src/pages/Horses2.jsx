import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { HorsesList } from "../helpers/HorsesList.jsx"
import HorseCard2 from '../components/HorseCard2.jsx'
import '../styles/Horses.css';
import HorseModal from '../components/HorseModal.jsx';

function Horses() {
    const [modalShow, setModalShow] = useState(false);

    const [selectedHorse, setSelectedHorse] = useState(null);

    const handleCardClick = (horse) => {
        setSelectedHorse(horse);
    };

    const handleCloseModal = () => {
        setSelectedHorse(null);
    };

    return (
        <Container className="horse-container">
            <Row>
                <Col as="h1">Våra hästar</Col>
            </Row>
            <Row xs={1} sm={2} md={3} lg={4}>
                {HorsesList.map((horse) => (
                      <HorseCard2 
                        key={horse.id}
                        name={horse.name} 
                        year={horse.year} 
                        father={horse.father} 
                        mother={horse.mother}
                        image={horse.image}
                        onShow={() => setModalShow(true)}
                    />
                ))}
            </Row>
            <Row>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Launch vertically centered modal
                </Button>

                <HorseModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </Row>
        </Container>
    )
}

export default Horses