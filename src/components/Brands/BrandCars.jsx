import Car from "../Car/Car";
import CarDB from "../../data/cars.json";
import React, { useDebugValue, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

import "./brandcars.css"

const BrandCars = () => {
  const { brand } = useParams();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const brandCars = CarDB.filter(
      (car) => car.brand.toLowerCase() == brand.toLowerCase()
    );
    setCars(brandCars);
  }, [brand]);
  return (
    <Container>
      <Row>
        <p className="count">There are {cars.length} {brand.toUpperCase()} cars</p>
      </Row>
       <Row>
        {cars.length > 0
          ? cars.map((car) => (
              <Col xl={3} className="mb-3">
                <Car carInfo={car} key={car.id} />
              </Col>
            ))
          : (
            <p>No cars available for {brand}</p>
          )}
      </Row>
    </Container>
  );
};

export default BrandCars;
