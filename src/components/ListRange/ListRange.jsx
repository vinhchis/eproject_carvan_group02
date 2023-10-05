import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./listRange.css";
import Range from "../Range/Range";
import RangeDB from "../../data/ranges.json";
import { useEffect, useState } from "react";

function ListRange({setRangeIdSelected}) {
  const [ranges, setRanges] = useState([]);
  useEffect(() => {
    setRanges(RangeDB);
  },[]);
  return (
    <Container className="list-range">
      <Row>
        {ranges.map((range) => (
          <Col key={range.id} xl={4} className="my-4">
            <Range  range={range} setRangeIdSelected={setRangeIdSelected}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ListRange;
