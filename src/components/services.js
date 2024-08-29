import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const data = [
    {
        id: 1,
        icon: 'fas fa-rocket',
        title: 'STARTUPS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.',
        link: 'https://www.google.com'
    },
    {
        id: 2,
        icon: 'fas fa-book',
        title: 'RESEARCHES',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.',
        link: 'https://www.google.com'
    },
    {
        id: 3,
        icon: 'fas fa-lightbulb',
        title: 'INNOVATIONS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.',
        link: 'https://www.google.com'
    },
    {
        id: 4,
        icon: 'fas fa-certificate',
        title: 'PATENTS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.',
        link: 'https://www.google.com'
    },
    {
        id: 5,
        icon: 'fas fa-box',
        title: 'INVENTORY',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.',
        link: 'https://www.google.com'
    },
    {
        id: 6,
        icon: 'fas fa-plus-circle',
        title: 'ADD MORE',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.',
        link: 'https://www.google.com'
    }
]

function AppServices() {
    return (
        <section id="services" className="block services-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>Our services</h2>
                    <div className="subtitle">services we provide</div>
                </div>
                <Row xs={1} md={3} className="g-4">
                    {data.map((service) => (
                        <Col sm={4} className="holder" key={service.id}>
                            <Card className="h-100">
                                <Card.Body className="text-center">
                                    <div className="icon">
                                        <i className={service.icon}></i>
                                    </div>
                                    <Card.Title>{service.title}</Card.Title>
                                    <Card.Text>{service.description}</Card.Text>
                                    <a href={service.link} className="btn btn-primary">Explore <i
                                        className="fas fa-chevron-right"></i></a>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default AppServices;