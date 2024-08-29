import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

var data = [
    {
        id: 1,
        name: 'GUJARAT IN THE FIELD OF EDUCATION',
        description: 'The state government has also implemented various initiatives to improve\n' +
            '                    literacy rates and promote education,\n' +
            '                    especially in rural areas. Gujarat has made significant strides in improving access to education for\n' +
            '                    girls and marginalized communities.\n' +
            '                    The state also emphasizes skill development and vocational training to enhance employability among\n' +
            '                    the youth.',
    },
    {
        id: 2,
        name: 'GUJARAT IN THE FIELD OF BUSINESS',
        description: 'Gujarat is a leading state in India’s business and industrial landscape, known for its strong entrepreneurial spirit and favorable business environment.\n' +
            '                    It serves as a major industrial hub, excelling in sectors such as chemicals, petrochemicals, textiles, and pharmaceuticals.\n' +
            '                    The biennial Vibrant Gujarat Summit attracts global investors, highlighting the state\'s investment potential.\n' +
            '                    Gujarat’s strategic location with an extensive coastline makes it a leader in ports and logistics, with significant cargo handled at ports like Kandla and Mundra.\n' +
            '                    The state is also home to several Special Economic Zones (SEZs) that incentivize business operations and exports.',
    }
]

function AppInfo() {
    return (
        <section id="testimonials" className="testimonials-block">
            <Container fluid>
                <div className="title-holder">
                    <h2><strong style={{color: '#f64b4b', fontSize: '40px'}}>ABOUT EDUCATION & BUSINESS</strong></h2>
                    <div className="subtitle" style={{marginBottom: '50px', color: 'grey'}}>learn more about Gujarat
                    </div>
                </div>
                <Carousel controls={false}>
                    {
                        data.map(testimonials => {
                            return (
                                <Carousel.Item key={testimonials.id}>
                                    <blockquote>
                                        <span className='name' style={{
                                            fontStyle: 'italic',
                                            color: 'black',
                                            fontSize: '20px'
                                        }}>{testimonials.name}</span>
                                        <cite>
                                            <p style={{color: 'grey'}}>{testimonials.description}</p>
                                        </cite>
                                    </blockquote>
                                </Carousel.Item>
                            );
                        })
                    }
                </Carousel>
            </Container>
        </section>
    );
}

export default AppInfo;