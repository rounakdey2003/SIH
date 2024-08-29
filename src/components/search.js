import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function AppSearch() {
    return (
        <div className="d-flex justify-content-center">
            <InputGroup className="mb-3" style={{marginRight: '5%', width: '250px'}}>
                <Form.Control
                    placeholder="Search"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">🔍</InputGroup.Text>
            </InputGroup>
        </div>
    );
}

export default AppSearch;