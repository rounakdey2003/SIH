import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

const data = [
    {
        title: "Proposed regulatory framework for modifications to artificial intelligence/machine learning",
        inventor: "GU (Gujarat University)",
        citation: "Citation :Author(s). (Year). Sustainable Packaging Solutions: Analyzing the Environmental Impact. Journal of Environmental Science & Technology, 45(6), 987-1003.",
        brief: "Proposed regulatory framework for modifications to artificial intelligence/machine learning (AI/ML)-based software as a medical device (SaMD)",
        pdfLink: "/path/to/pdf1.pdf"
    },
    {
        title: "Proposed regulatory framework for modifications to artificial intelligence/machine learning",
        inventor: "GU (Gujarat University)",
        citation: "Citation :Author(s). (Year). Sustainable Packaging Solutions: Analyzing the Environmental Impact. Journal of Environmental Science & Technology, 45(6), 987-1003.",
        brief: "Proposed regulatory framework for modifications to artificial intelligence/machine learning (AI/ML)-based software as a medical device (SaMD)",
        pdfLink: "/path/to/pdf1.pdf"
    },
    {
        title: "Proposed regulatory framework for modifications to artificial intelligence/machine learning",
        inventor: "GU (Gujarat University)",
        citation: "Citation :Author(s). (Year). Sustainable Packaging Solutions: Analyzing the Environmental Impact. Journal of Environmental Science & Technology, 45(6), 987-1003.",
        brief: "Proposed regulatory framework for modifications to artificial intelligence/machine learning (AI/ML)-based software as a medical device (SaMD)",
        pdfLink: "/path/to/pdf1.pdf"
    },
    {
        title: "Proposed regulatory framework for modifications to artificial intelligence/machine learning",
        inventor: "GU (Gujarat University)",
        citation: "Citation :Author(s). (Year). Sustainable Packaging Solutions: Analyzing the Environmental Impact. Journal of Environmental Science & Technology, 45(6), 987-1003.",
        brief: "Proposed regulatory framework for modifications to artificial intelligence/machine learning (AI/ML)-based software as a medical device (SaMD)",
        pdfLink: "/path/to/pdf1.pdf"
    },
    {
        title: "Proposed regulatory framework for modifications to artificial intelligence/machine learning",
        inventor: "GU (Gujarat University)",
        citation: "Citation :Author(s). (Year). Sustainable Packaging Solutions: Analyzing the Environmental Impact. Journal of Environmental Science & Technology, 45(6), 987-1003.",
        brief: "Proposed regulatory framework for modifications to artificial intelligence/machine learning (AI/ML)-based software as a medical device (SaMD)",
        pdfLink: "/path/to/pdf1.pdf"
    },
    {
        title: "Proposed regulatory framework for modifications to artificial intelligence/machine learning",
        inventor: "GU (Gujarat University)",
        citation: "Citation :Author(s). (Year). Sustainable Packaging Solutions: Analyzing the Environmental Impact. Journal of Environmental Science & Technology, 45(6), 987-1003.",
        brief: "Proposed regulatory framework for modifications to artificial intelligence/machine learning (AI/ML)-based software as a medical device (SaMD)",
        pdfLink: "/path/to/pdf1.pdf"
    },
    {
        title: "Proposed regulatory framework for modifications to artificial intelligence/machine learning",
        inventor: "GU (Gujarat University)",
        citation: "Citation :Author(s). (Year). Sustainable Packaging Solutions: Analyzing the Environmental Impact. Journal of Environmental Science & Technology, 45(6), 987-1003.",
        brief: "Proposed regulatory framework for modifications to artificial intelligence/machine learning (AI/ML)-based software as a medical device (SaMD)",
        pdfLink: "/path/to/pdf1.pdf"
    },
    {
        title: "Proposed regulatory framework for modifications to artificial intelligence/machine learning",
        inventor: "GU (Gujarat University)",
        citation: "Citation :Author(s). (Year). Sustainable Packaging Solutions: Analyzing the Environmental Impact. Journal of Environmental Science & Technology, 45(6), 987-1003.",
        brief: "Proposed regulatory framework for modifications to artificial intelligence/machine learning (AI/ML)-based software as a medical device (SaMD)",
        pdfLink: "/path/to/pdf1.pdf"
    },
    {
        title: "Proposed regulatory framework for modifications to artificial intelligence/machine learning",
        inventor: "GU (Gujarat University)",
        citation: "Citation :Author(s). (Year). Sustainable Packaging Solutions: Analyzing the Environmental Impact. Journal of Environmental Science & Technology, 45(6), 987-1003.",
        brief: "Proposed regulatory framework for modifications to artificial intelligence/machine learning (AI/ML)-based software as a medical device (SaMD)",
        pdfLink: "/path/to/pdf1.pdf"
    },
    {
        title: "Proposed regulatory framework for modifications to artificial intelligence/machine learning",
        inventor: "GU (Gujarat University)",
        citation: "Citation :Author(s). (Year). Sustainable Packaging Solutions: Analyzing the Environmental Impact. Journal of Environmental Science & Technology, 45(6), 987-1003.",
        brief: "Proposed regulatory framework for modifications to artificial intelligence/machine learning (AI/ML)-based software as a medical device (SaMD)",
        pdfLink: "/path/to/pdf1.pdf"
    },
];

function AppGroup() {
    return (
        <>
            <div style={{ marginLeft: '30px', marginTop: '50px', color: 'grey', fontSize: '40px', textDecoration: 'underline' }}>
                Topics/Title
            </div>
            <ListGroup as="ol" numbered style={{ margin: '30px', marginTop: '50px' }}>
                {data.map((item, index) => (
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        key={index}
                    >
                        <div className="ms-2 me-auto" style={{ color: 'grey' }}>
                            <div style={{ color: 'black' }}>
                                <p>{item.title.split("/")[0]}</p>
                                <p>{item.title.split("/")[1]}</p>
                            </div>
                            <p>Inventor: {item.inventor}</p>
                            <p>Citation: {item.citation}</p>
                            <div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ background: 'whitesmoke', color: 'black' }}>
                                        Brief Details
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <p>{item.brief}</p>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <Button variant="primary" href={item.pdfLink} target="_blank" style={{ background: 'rebeccapurple' }}>
                            Download PDF
                        </Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </>
    );
}

export default AppGroup;
