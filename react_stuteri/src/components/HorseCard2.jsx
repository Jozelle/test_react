import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../styles/Horses.css';

function HorseCard2({ id, image, name, year, father, mother, onShow}) {
    return(
        <Card className='horse-card' key={id}>
            <Card.Img variant="top" src={image} alt="Picture" style={{ width: '100%', height: '200px', objectFit: 'cover' }}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{year} <br/>e. {father}<br/> u. {mother}</Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="primary" onClick={onShow}>
                Mer info
            </Button>
            </Card.Footer>
        </Card>
    )
}

export default HorseCard2