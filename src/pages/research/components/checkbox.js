import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function AppCheckbox() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);


    return (
        <Form>
            <Row className="justify-content-center">
                <Col xs="auto" className="p-1">
                    <Form.Check
                        type="radio"
                        id="default-radio"
                        label={<span style={{ color: 'red' }}>Title</span>}
                    />
                </Col>
                <Col xs="auto" className="p-1">
                    <Form.Check
                        type="radio"
                        id="default-checkbox-1"
                        label={<span style={{ color: 'red' }}>Topic</span>}
                    />
                </Col>
                <Col xs="auto" className="p-1">
                    <Form.Check
                        type="radio"
                        id="default-checkbox-2"
                        label={<span style={{ color: 'red' }}>Keyword</span>}
                    />
                </Col>
            </Row>

            <Row className="justify-content-center mt-4">
                <Col xs="auto">
                    <Dropdown>
                        <Dropdown.Toggle
                            id="dropdown-basic"
                            style={{
                                backgroundColor: 'transparent',
                                border: '2px solid red',
                                color: 'red',
                            }}
                        >
                            Title A-Z
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">A-E</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">F-K</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">L-P</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">Q-U</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">V-Z</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>

                <Col xs="auto">
                    <Dropdown>
                        <Dropdown.Toggle
                            id="dropdown-basic"
                            style={{
                                backgroundColor: 'transparent',
                                border: '2px solid red',
                                color: 'red',
                            }}
                        >
                            Items 1-20
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">5</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">10</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">15</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">20</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col xs="auto">
                    <DropdownButton
                        id="dropdown-button-date-range"
                        size="sm"
                        style={{
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                            backgroundColor: 'transparent',
                            border: '1px solid red',
                            color: 'red',
                            borderRadius: '5px',
                        }}
                        title={startDate && endDate
                            ? `${startDate.toLocaleDateString('en-GB', { year: '2-digit', month: 'short' })} - ${endDate.toLocaleDateString('en-GB', { year: '2-digit', month: 'short' })}`
                            : "Select Date"}
                    >
                        <div style={{ padding: '10px' }}>
                            <div>
                                <label>Start</label>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => {
                                        setStartDate(date);
                                        if (date > endDate) {
                                            setEndDate(null);
                                        }
                                    }}
                                    placeholderText="Select start month and year"
                                    dateFormat="MM/yyyy"
                                    showMonthYearPicker
                                    inline
                                />
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                <label>End</label>
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    placeholderText="Select end month and year"
                                    dateFormat="MM/yyyy"
                                    showMonthYearPicker
                                    minDate={startDate}
                                    inline
                                />
                            </div>
                        </div>
                    </DropdownButton>
                </Col>
            </Row>
        </Form>
    );
}

export default AppCheckbox;
