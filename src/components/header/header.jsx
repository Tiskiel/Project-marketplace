import logo from "../Assests/livreEpure.png";
import style from './header.module.css';
import Navbar from "../navbar/navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Header = () => {
    
    
    
    return(
        
            <>
                <Container fluid className={`py-0 fixed-top ${style.bgc}`}>
                    <Row>
                    <Col ><img src={logo} alt="logo" className={style.sizeLogo} /></Col>
                    </Row>
                    <Row>
                    <Col><h1 className={style.colorTexte}>Bookamania</h1></Col>
                    <Col className={style.displayRight}><Navbar /></Col>
                    </Row>
                </Container>
            
        </>
    )
}

export default Header;