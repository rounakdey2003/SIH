import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AppContact() {
    return (
        <section id="contact" className="block contact-block">
            <Container fluid>
                <Container className='container-fluid'
                           fluid="sm"
                           style={{
                               border: '2px solid #ccc',
                               borderRadius: '10px',
                               boxShadow: '',
                               padding: '20px',
                               background: 'rgba(0, 0, 0, 0.05'
                           }}
                >
                    <div className="title-holder">
                        <h2><strong style={{color: '#f64b4b', fontSize: '40px'}}>CONTACT US</strong></h2>
                        <div className="subtitle" style={{marginBottom: '70px'}}>get connected with us</div>
                    </div>
                    <Row>
                        <Col sm={6}>
                            <Container className='container-fluid'
                                       fluid="sm"
                                       style={{
                                           border: '2px solid #ccc',
                                           borderRadius: '10px',
                                           boxShadow: '',
                                           padding: '20px',
                                           background: 'rgba(0, 0, 0, 0.05'
                                       }}
                            >
                                <div className='google-map'>
                                    <iframe title="map"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777453.131204817!2d68.68484476301825!3d22.394408048336572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959051f5f0ef795%3A0x861bd887ed54522e!2sGujarat!5e0!3m2!1sen!2sin!4v1724948913487!5m2!1sen!2sin"></iframe>
                                </div>
                            </Container>
                        </Col>
                        <Col sm={6} style={{alignItems: 'center', marginTop: '100px'}}>
                            <Form className='contact-form'>
                                <Row>
                                    <Col sm={4}>
                                        <Form.Control type="text" placeholder="Enter Name" required/>
                                    </Col>
                                    <Col sm={4}>
                                        <Form.Control type="email" placeholder="Enter Email" required/>
                                    </Col>
                                    <Col sm={4}>
                                        <Form.Control type="tel" placeholder="Enter Contact" required/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12}>
                                        <Form.Control as="textarea" placeholder="Enter Message" required/>
                                    </Col>
                                </Row>
                                <div className='btn-holder'>
                                    <Button type="submit">Submit</Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default AppContact;