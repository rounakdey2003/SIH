import Carousel from 'react-bootstrap/Carousel';

import img1 from '../assets/images/img-hero1.png';
import img2 from '../assets/images/img-hero2.png'
import img3 from '../assets/images/img-hero3.png'
import img4 from '../assets/images/img-hero4.png'
import img5 from '../assets/images/img-hero5.png'
import img6 from '../assets/images/img-hero6.png'
import Container from "react-bootstrap/Container";

function AppHero() {
    return (
        <Container className='container-fluid'
                   style={{
                       maxHeight: 'auto',
                       maxWidth: 'auto',
                       border: '',
                       borderRadius: '10px',
                       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
                       padding: '10px'
                   }}>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img4}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img5}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img6}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default AppHero;