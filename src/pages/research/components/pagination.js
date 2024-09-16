import Pagination from 'react-bootstrap/Pagination';

function AppPagination() {
    return (
        <Pagination style={{marginLeft:'35%', marginBottom:'10px'}}>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    );
}

export default AppPagination;