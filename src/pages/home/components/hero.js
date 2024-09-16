import Carousel from 'react-bootstrap/Carousel';

var heroData = [
    {
        id: 1,
        image: require('../../../assets/images/banner1.png'),
        title: 'GUJARAT IN THE FIELD OF EDUCATION',
        description: 'The state government has also implemented various initiatives to improve\n' +
            '                    literacy rates and promote education,\n' +
            '                    especially in rural areas.',
        link: 'https://www.google.com'
    },
    {
        id: 2,
        image: require('../../../assets/images/banner2.png'),
        title: 'GUJARAT IN THE FIELD OF BUSINESS',
        description: 'Gujarat is a leading state in India’s business and industrial landscape, known for its strong entrepreneurial spirit and favorable business environment.\n' +
            '         It serves as a major industrial hub, excelling in sectors such as chemicals, petrochemicals, textiles, and pharmaceuticals.',
        link: 'https://www.google.com'
    }
]

function AppHero() {
    return (
        <section id="hero" className="hero-block">
            <Carousel>
                {
                    heroData.map(hero => {
                        return (
                            <Carousel.Item key={hero.id}>
                                <img
                                    className="d-block w-100"
                                    src={hero.image}
                                    alt={"slide " + hero.id}
                                />
                                <Carousel.Caption>
                                    <h2>{hero.title}</h2>
                                    <p>{hero.description}</p>
                                    <a className="btn btn-primary" href={hero.link}>Learn More <i className="fas fa-chevron-right"></i></a>
                                </Carousel.Caption>
                            </Carousel.Item>
                        );
                    })
                }
            </Carousel>
        </section>
    );
}

export default AppHero;