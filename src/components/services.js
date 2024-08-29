import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const data = [
    {
        id: 1,
        icon: 'fas fa-rocket',
        title: 'STARTUPS',
        description: 'Startups are innovative, often tech-driven companies focused on rapid growth, disrupting industries, and solving problems with unique solutions.',
        link: 'https://www.google.com'
    },
    {
        id: 2,
        icon: 'fas fa-book',
        title: 'RESEARCHES',
        description: 'Researches involve systematic investigations to discover new information, test hypotheses, and advance knowledge across various fields, driving innovation and progress.',
        link: 'https://www.google.com'
    },
    {
        id: 3,
        icon: 'fas fa-lightbulb',
        title: 'INNOVATIONS',
        description: 'Innovations drive progress by introducing novel ideas, technologies, or methods, transforming industries, enhancing efficiency, and improving quality of life globally.',
        link: 'https://www.google.com'
    },
    {
        id: 4,
        icon: 'fas fa-certificate',
        title: 'PATENTS',
        description: 'An innovative system and method for real-time, adaptive user interfaces that dynamically customize experiences based on user behavior and preferences.',
        link: 'https://www.google.com'
    },
    {
        id: 5,
        icon: 'fas fa-box',
        title: 'INVENTORY',
        description: 'Effective inventory management involves tracking levels, optimizing storage, and ensuring timely replenishment to meet demand.',
        link: 'https://www.google.com'
    },
    {
        id: 6,
        icon: 'fas fa-plus-circle',
        title: 'ADD MORE',
        description: 'Expanding your ideas can be achieved by brainstorming, considering different perspectives, asking questions, and exploring related topics for deeper insights.',
        link: 'https://www.google.com'
    }
]

function AppServices() {
    return (
        <section id="services" className="block services-block">
            <Container fluid>
                <div className="title-holder">
                    <h2><strong style={{color: '#f64b4b', fontSize: '40px'}}>Our services</strong></h2>
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