import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import tempImage from './foodWars.jpg';
import Col from 'react-bootstrap/Col';

const Item = (props) => {
    const {name, price, id, promo, categorie, pics, resume} = props;
    console.log(pics);
    return (
        <>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={tempImage} alt="soma" />
                    <Card.Body>
                        <Card.Title>{name}, id : {id.slice(10,20)}</Card.Title>
                        <div>{categorie}</div>
                        <Card.Text>
                        {resume} <span>{price}€</span>
                        </Card.Text>
                        <Button variant="primary">Voir</Button><Button variant="dark">Favoris</Button>
                        {promo ? (<div>Le prix de ce livre a baissé</div>) : (<></>) }
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

export default Item;