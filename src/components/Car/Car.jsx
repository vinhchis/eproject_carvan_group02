import { useState, useEffect } from "react";
import { ButtonGroup, Card, ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CarImg from "../../assets/image/cars/Vinfast.webp";
import "./car.css";

import { BsFuelPumpDiesel } from "react-icons/bs";
import {RxColumnSpacing} from "react-icons/rx";

function getImagePath(carId) {
  try {
    // return require(`../../assets/image/brands/${brandName}.png`);
    return require(`../../assets/image/cars/${carId}.png`);
  } catch (err) {
    // Trả về đường dẫn đến ảnh dự phòng nếu không tìm thấy ảnh của brand.
    return require("../../assets/image/cars/default.webp");
  }
}

function Car({ carInfo }) {
  const [car, setCar] = useState({});
  const navigate = useNavigate();

  // run only once
  useEffect(() => {
    setCar(carInfo);
  }, []);
  return (
    <Card className="text-center car-card">
      <Card.Header className="text-end car-price">{car.price}$</Card.Header>
      {/* <Card.Img variant="top" src={CarImg} /> */}
      <Card.Img className="img-car" variant="top" src={getImagePath(car.id)} />

      <Card.Body>
        <Card.Title>{`${car.year} ${car.brand} ${car.name}`}</Card.Title>
        <ListGroup>
          <ListGroup.Item><RxColumnSpacing/> {car.odo} km</ListGroup.Item>
          <ListGroup.Item>{car.transmission}</ListGroup.Item>
          <ListGroup.Item>
            <BsFuelPumpDiesel />
            {car.fuel}
          </ListGroup.Item>
        </ListGroup>
        <ButtonGroup size="lg" className="my-2">
          <Button
            variant="info"
            className="button-detail"
            onClick={() => navigate(`/cars/${car.id}`)}
          >
            Detail
          </Button>
          <Button variant="secondary" className="button-cart">
            Add to Cart
          </Button>
        </ButtonGroup>
      </Card.Body>
      <Card.Footer className="text-muted">Sale</Card.Footer>
    </Card>
  );
}
export default Car;
