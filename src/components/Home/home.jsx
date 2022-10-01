import React from 'react';
import style from './home.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col><h1>Welcome to Bookamania</h1></Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default Home;
