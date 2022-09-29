import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import style from './Footer.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
    return (
        <Container fluid className={`py-2 fixed-bottom ${style.bgc}`}>
            <Row>
                <Col className={style.colorTexte}>Bookamania 2022 ©️ </Col>
                <Col className={`${style.displayRight} ${style.textBlack}`}>Make with love 🧡</Col>
            </Row>
        </Container>
    )
}
