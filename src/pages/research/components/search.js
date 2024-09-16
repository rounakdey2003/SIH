import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function AppSearch() {
    return (
        <div className="d-flex justify-content-center">
            <InputGroup className="mb-3" style={{width:'85%'}}>
                <Form.Control
                    placeholder="Browse any Topic, Title or Keywords ..."
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">🔍</InputGroup.Text>
            </InputGroup>
        </div>
    );
}

export default AppSearch;