import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../assets/images/logo.png';

function AppHeader() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">


                    <img src={logo} alt="GIS" style={{height: '50px'}}/>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" style={{textAlign: "center"}}>HOME</Nav.Link>
                        <Nav.Link href="#about" style={{textAlign: "center"}}>ABOUT</Nav.Link>
                        <Nav.Link href="#about" style={{textAlign: "center"}}>MISSION</Nav.Link>
                        <Nav.Link href="#services" style={{textAlign: "center"}}>SERVICES</Nav.Link>
                        <div style={{marginRight: '300px'}}></div>
                        <Button variant="primary" style={{textAlign: "center"}}>SIGN IN</Button>{' '}

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