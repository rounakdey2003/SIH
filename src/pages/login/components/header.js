import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../../../assets/images/logo.png';

function AppHeader() {
    const navigate = useNavigate();
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#hero">

                    <img src={logo} alt="GIS" style={{height: '50px'}}/>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Button variant="primary" style={{textAlign: "center"}} onClick={() => navigate('/')}>HOME</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

/*<Form>
<Form.Check type="switch" id="custom-switch" style={{marginLeft: "20px", marginTop: '10px'}} label="🌗"/>
</Form>*/

export default AppHeader;