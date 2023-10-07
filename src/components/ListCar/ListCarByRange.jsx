import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

import Buttons from "./Buttons";
import Car from "../Car/Car";
import SearchBar from "../Search/SearchBar";

import "./listCar.css";
import { useParams } from "react-router-dom";
import CarDB from "../../data/cars.json";

function ListCarByRange() {
  const { rName } = useParams();
  const [cars, setCars] = useState([]);
  const filtedCars = CarDB.filter((car) => car.class === rName);

  useEffect(() => {
    setCars(CarDB.filter((car) => car.class === rName));
  }, [rName]);

  //  filter by year
  const menuItems = [...new Set(cars.map((car) => car.year))];
  const filterItem = (yearSelected) => {
    const newItem = cars.filter((newVal) => {
      return newVal.year === yearSelected;
    });
    setCars(newItem);
  };

  return (
    <Container className="list-car">
      {/* <Row>
        <SearchBar setItem={setCars} />
      </Row> */}
      <Row>
        <Buttons
          filterItem={filterItem}
          setItem={setCars}
          menuItems={menuItems}
          data={filtedCars}
        />
      </Row>
      <Row>
        <p className="count">
          There are {cars.length} cars belonging to the{" "}
          <span style={{ fontStyle: "bold" }}></span>
          {rName} class
        </p>
      </Row>
      <Row>
        {cars.length > 0
          ? cars.map((car) => (
              <Col xl={3} className="mb-3" key={car.id}>
                <Car carInfo={car} />
              </Col>
            ))
          : null}
      </Row>
    </Container>
  );
}

export default ListCarByRange;
