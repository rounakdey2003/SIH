import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import img1 from '../assets/images/gujarat.png';

function AppAbout() {
    const html = 80;
    const responsive = 95;
    const photoshop = 60;

    return (
        <section id="about" className="block about-block">
            <Container fluid>
                <div className="title-holder">
                    <h2><strong style={{color: '#f64b4b', fontSize: '40px'}}>ALL ABOUT GUJARAT</strong></h2>
                    <div className="subtitle" style={{marginBottom: '70px'}}>learn more about Gujarat</div>
                </div>
                <Container className='container-fluid'
                           fluid="sm"
                           style={{
                               border: '',
                               borderRadius: '30px',
                               boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
                               padding: '20px',
                               background: 'rgba(0, 0, 0, 0.0)'
                           }}
                >
                    <Row>
                        <Col sm={6}>
                            <h2><strong style={{color: 'grey', fontSize: '40px'}}>Gujarat at a Glance</strong></h2>
                            <p style={{marginTop: '50px'}}><b>Gujarat-</b>The Land of the Legends, stands bordered by
                                Pakistan and Rajasthan in the north east, Madhya Pradesh in the east,
                                and Maharashtra and the Union territories of Diu, Daman, Dadra and Nagar Haveli in the
                                south. The Arabian Sea borders the state both
                                to the west and the south west. Rock Inscriptions in the Girnar Hills show that the
                                Maurya Emperor Ashoka, extended his domain into Gujarat
                                in about 250 BC. With it’s fall, the control of the region came under the Sakas or
                                Scythians.</p>
                            <p>During the 900’s the Solanki Dynasty came to power and Gujarat reached it’s greatest
                                extent.</p>
                            <p>Then followed a long period of Muslim rule. Ahmed I, the first independent Muslim ruler
                                of Gujarat, found Ahmedabad in 1411. The Mughal Emperor Akbar conquered Malwa and
                                Gujarat in 1570s.</p>
                            <p>The British East India Company set its
                                first footsteps in Surat in 1818 and the State came in control of their rule.
                                In 1600’s, the Dutch, French, English and Portuguese had all established
                                bases along the coast of the region.</p>
                        </Col>
                        <Col sm={6} style={{alignItems: 'center', marginTop: '100px'}}>
                            <Image src={img1}/>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default AppAbout;