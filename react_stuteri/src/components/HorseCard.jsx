import Card from 'react-bootstrap/Card';
import '../styles/Horses.css';

function HorseCard({ id, image, name, year, father, mother}) {
    return(
        <Card className='horse-card' key={id}>
            <Card.Img variant="top" src={image} alt="Picture" style={{ width: '100%', height: '200px', objectFit: 'cover' }}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{year} <br/>e. {father}<br/> u. {mother}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default HorseCard