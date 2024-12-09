import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { HorsesList } from "../helpers/HorsesList.jsx"
import HorseCard from '../components/HorseCard.jsx'
import '../styles/Horses.css';

function Horses() {

    return (
        <Container className="horse-container">
            <Row>
                <Col as="h1">Våra hästar</Col>
            </Row>
            <Row xs={1} sm={2} md={3} lg={4}>
                {HorsesList.map((horse) => (
                      <HorseCard 
                        key={horse.id}
                        name={horse.name} 
                        year={horse.year} 
                        father={horse.father} 
                        mother={horse.mother}
                        image={horse.image}
                    />
                ))}
            </Row>
        </Container>
    )
}

export default Horses