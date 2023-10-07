import React, { useState } from "react";
import "./Brands.css";
import brandDB from "../../data/brands.json";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Brands = () => {
  const [brands, setBrands] = useState(brandDB);
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="products-box">
        <div className="row " style={{ marginTop: 35 }}>
          {brands.map((brand) => (
            <div className="col-md-4 col-lg-3 col-6 pb-4" key={brand.id}>
              <div className="card">
                <a href="#">
                  <img
                    src={require(`../../assets/image/brands/${brand.name}.png`)}
                    className="card-img-top"
                    alt={brand.name}
                  />
                </a>
                <div className="card-body text-center d-flex flex-column justify-content-between">
                  <Button
                    className="button-list"
                    variant="primary"
                    onClick={() => {
                      navigate(`/cars/brand/${brand.name}`);
                    }}
                  >
                    <div>
                      <h3 style={{ fontVariant: "small-caps" }}>
                        {brand.name}
                      </h3>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
