import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

const data = [
    {
        title: "Proposed regulatory framework for modifications to artificial intelligence/machine learning",
        director: "Liam Holloway",
        sector: "Sector : Sustainable Consumer Goods",
        service: "Proposed regulatory framework for modifications to artificial intelligence/machine learning (AI/ML)-based software as a medical device (SaMD)",
        link: "https://google.com"
    },
    {
        title: "Proposed regulatory framework for modifications to artificial intelligence/machine learning",
        director: "Liam Holloway",
        sector: "Sector : Sustainable Consumer Goods",
        service: "Proposed regulatory framework for modifications to artificial intelligence/machine learning (AI/ML)-based software as a medical device (SaMD)",
        link: "https://google.com"
    },
    {
        title: "Proposed regulatory framework for modifications to artificial intelligence/machine learning",
        director: "Liam Holloway",
        sector: "Sector : Sustainable Consumer Goods",
        service: "Proposed regulatory framework for modifications to artificial intelligence/machine learning (AI/ML)-based software as a medical device (SaMD)",
        link: "https://google.com"
    },
    {
        title: "Proposed regulatory framework for modifications to artificial intelligence/machine learning",
        director: "Liam Holloway",
        sector: "Sector : Sustainable Consumer Goods",
        service: "Proposed regulatory framework for modifications to artificial intelligence/machine learning (AI/ML)-based software as a medical device (SaMD)",
        link: "https://google.com"
    },
    {
        title: "Proposed regulatory framework for modifications to artificial intelligence/machine learning",
        director: "Liam Holloway",
        sector: "Sector : Sustainable Consumer Goods",
        service: "Proposed regulatory framework for modifications to artificial intelligence/machine learning (AI/ML)-based software as a medical device (SaMD)",
        link: "https://google.com"
    },
    {
        title: "Proposed regulatory framework for modifications to artificial intelligence/machine learning",
        director: "Liam Holloway",
        sector: "Sector : Sustainable Consumer Goods",
        service: "Proposed regulatory framework for modifications to artificial intelligence/machine learning (AI/ML)-based software as a medical device (SaMD)",
        link: "https://google.com"
    },
    {
        title: "Proposed regulatory framework for modifications to artificial intelligence/machine learning",
        director: "Liam Holloway",
        sector: "Sector : Sustainable Consumer Goods",
        service: "Proposed regulatory framework for modifications to artificial intelligence/machine learning (AI/ML)-based software as a medical device (SaMD)",
        link: "https://google.com"
    },
    {
        title: "Proposed regulatory framework for modifications to artificial intelligence/machine learning",
        director: "Liam Holloway",
        sector: "Sector : Sustainable Consumer Goods",
        service: "Proposed regulatory framework for modifications to artificial intelligence/machine learning (AI/ML)-based software as a medical device (SaMD)",
        link: "https://google.com"
    },
    {
        title: "Proposed regulatory framework for modifications to artificial intelligence/machine learning",
        director: "Liam Holloway",
        sector: "Sector : Sustainable Consumer Goods",
        service: "Proposed regulatory framework for modifications to artificial intelligence/machine learning (AI/ML)-based software as a medical device (SaMD)",
        link: "https://google.com"
    },
    {
        title: "Proposed regulatory framework for modifications to artificial intelligence/machine learning",
        director: "Liam Holloway",
        sector: "Sector : Sustainable Consumer Goods",
        service: "Proposed regulatory framework for modifications to artificial intelligence/machine learning (AI/ML)-based software as a medical device (SaMD)",
        link: "https://google.com"
    },

];

function AppGroup() {
    return (
        <><div style={{marginLeft:'30px', marginTop:'50px', color:'grey', fontSize:'40px', textDecoration:'underline'}}>Topics/Title</div>
            <ListGroup as="ol" numbered style={{margin:'30px', marginTop:'50px'}}>
                {data.map((item, index) => (
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        key={index}
                    >
                        <div className="ms-2 me-auto" style={{color:'grey'}}>
                            <div style={{color:'black'}}>
                                <p>{item.title.split("/")[0]}</p>
                                <p>{item.title.split("/")[1]}</p>
                            </div>
                            <p>Director: {item.director}</p>
                            <p>Sector: {item.sector}</p>
                            <div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" style={{background:'whitesmoke', color:'black'}}>
                                        Service
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <p>{item.service}</p>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <Button
                            variant="primary"
                            style={{background:'rebeccapurple'}}
                            onClick={() => window.open(item.link, "_blank")}
                        >
                            Our Website
                        </Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </>
    );
}

export default AppGroup;
