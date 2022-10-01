import React from 'react'
import Item from '../Item/Item'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Manga(props) {
    const {listItems} = props;
    // console.log(listItems);
    const item = listItems.map(item => <Item key={item.id} {...item}  />) 
    // console.log(item);
    return (
        <div>
            
        <Container fluid>
        <Row>
            <Col><h1>Here all our manga</h1></Col>
        </Row>
                <Row>
                    {item}
                </Row>
        </Container>
        </div>
    )
}
