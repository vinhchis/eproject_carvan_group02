import { useEffect, useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import CarDB from "../../data/cars.json";

function SearchBar({ setItem }) {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {});

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleSumit = (e) => {
    e.preventDefault();
    setItem(
      CarDB.filter(
        (car) =>
          car.name.toLowerCase() === searchInput.toLowerCase() ||
          car.brand.toLowerCase() === searchInput.toLowerCase()
      )
    );
  };
  return (
    <>
    <Form className="my-3" onSubmit={handleSumit}>
      <Row>
        <Col>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Search by name"
              onChange={handleChange}
              value={searchInput}
            />
          </Form.Group>
        </Col>
        <Col>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
    {/* <span className="result">
      {} results
    </span> */}
    </>
    
  );
}

export default SearchBar;
