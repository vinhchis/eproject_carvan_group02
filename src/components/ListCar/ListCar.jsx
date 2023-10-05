import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

import Buttons from "./Buttons";
import Car from "../Car/Car";
import SearchBar from "../Search/SearchBar";

import "./listCar.css";
import { useParams } from "react-router-dom";
import CarDB from "../../data/cars.json";
import RangeDB from "../../data/ranges.json";
import BrandDB from "../../data/brands.json";

function ListCar({ rangeIdSelected, brandIdSelected }) {
  // const {rangeN} = useParams();
  const [cars, setCars] = useState(CarDB);

  // useEffect(() => {
  //   setCars(CarDB);
  // },[]);
  // console.log(rangeIdSelected);
  const getCarsByRangeId = (rangeId) => {
    const range = RangeDB[rangeId];
    setCars(cars.filter((car) => car.class === range.name));
  };

  // useEffect(() => {
  //  getCarsByRangeId(rangeIdSelected);
  // },[rangeIdSelected])

  // useEffect(() => {
  //   const brand = BrandDB[brandIdSelected];
  //   setCars(cars.filter(car => car.brand === brand.name));
  // },[brandIdSelected])

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
        />
      </Row>
      <Row>
        <p className="count">There are {cars.length} cars</p>
      </Row>
      <Row>
        {cars.length > 0 ? (
          cars.map((car) => (
            <Col xl={3} className="mb-3" key={car.id}>
              <Car carInfo={car} />
            </Col>
          ))
        ) : (
          <p>No cars available</p>
        )}
      </Row>
    </Container>
  );
}

export default ListCar;
