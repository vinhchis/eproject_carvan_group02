import { Button } from "react-bootstrap";
import CarDB from "../../data/cars.json";

const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className="d-flex justify-content-center my-2">
        {menuItems.map((Val, id) => {
          return (
            <Button
              className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </Button>
          );
        })}
        <button
          className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
          onClick={() => setItem(CarDB)}
        >
          All
        </button>
      </div>
    </>
  );
};

export default Buttons;