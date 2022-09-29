import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({name, price, id, promo, categorie, pics}) => {

    
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pics} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content. {price}€
            </Card.Text>
            <Button variant="primary">Voir</Button><Button variant="dark">Favoris</Button>
            <div>{promo ?? "Le prix de ce livre a baissé"}</div>
        </Card.Body>
        </Card>
    );
}

export default Item;