import { useEffect, useState } from "react";
import {
  Button,
  Carousel,
  Col,
  Container,
  Image,
  Row,
  Table,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import CarDB from "../../data/cars.json";
import "./carDetail.css";

function getImagePath(carId) {
  try {
    // return require(`../../assets/image/brands/${brandName}.png`);
    return require(`../../assets/image/cars/${carId}.png`);
  } catch (err) {
    // Trả về đường dẫn đến ảnh dự phòng nếu không tìm thấy ảnh của brand.
    return require("../../assets/image/cars/default.webp");
  }
}

function CarDetail() {
  const { id } = useParams();
  const [car, setCar] = useState({});

  const getCar = () => {
    setCar(CarDB[id]);
  };

  useEffect(() => {
    getCar();
  }, []);

  return (
    <Container className="car-detail my-3">
      <Row>
        <Col xl={8}>
          <Carousel>
            <Carousel.Item>
              <Image src={getImagePath(car.id)} />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={getImagePath(car.id)} />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={getImagePath(car.id)} />
            </Carousel.Item>
          </Carousel>
          <Table responsive="sm" hover>
            <thead>
              <tr>
                <th>specific</th>
                <th>value</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(car).map((key) =>
                key != "id" && key != "image" ? (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{car[key]}</td>
                  </tr>
                ) : null
              )}
            </tbody>
          </Table>
        </Col>
        <Col xl={4}>
          <h2>{`${car.year} ${car.brand} ${car.name}`}</h2>
          <div className="car-story">
            <h3>About</h3>
            <p>
              In 2019, I purchased a brand new Toyota Corolla, and it quickly
              became an integral part of my daily life. Its sleek design and
              reliable reputation were major selling points for me. Little did I
              know that four years later, it would continue to exceed my
              expectations. The Corolla's performance has remained stellar, with
              its fuel efficiency impressively consistent. It navigates city
              streets with ease, and the responsive handling ensures a smooth
              ride. Whether it's daily commutes, road trips, or quick errands,
              the Corolla has proven to be a versatile companion. Inside the
              cabin, the interior has aged gracefully. The comfortable seats,
              user-friendly infotainment system, and ample cargo space have all
              held up well. The technology features have remained up-to-date,
              thanks to occasional software updates provided by Toyota. What
              truly stands out is the Corolla's reliability. It starts without
              fail, even in harsh weather conditions, and maintenance costs have
              been minimal. It feels as dependable as the day I drove it off the
              lot. In summary, my 2019 Toyota Corolla has been a remarkable
              investment. It continues to deliver exceptional performance,
              comfort, and reliability, making it a loyal and trusted partner on
              the road.
            </p>
          </div>
          <Button variant="secondary">Compare</Button>
          <Button variant="primary">Add to Cart</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default CarDetail;
