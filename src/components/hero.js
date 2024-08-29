import Carousel from 'react-bootstrap/Carousel';

import img1 from '../assets/images/img-hero1.png';
import img2 from '../assets/images/img-hero2.png'
import img3 from '../assets/images/img-hero3.png'
import img4 from '../assets/images/img-hero4.png'
import img5 from '../assets/images/img-hero5.png'
import img6 from '../assets/images/img-hero6.png'

function AppHero() {
    return (
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
    );
}

export default AppHero;