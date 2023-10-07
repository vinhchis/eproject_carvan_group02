import { Button } from "react-bootstrap";

const Buttons = ({ filterItem, setItem, menuItems, data }) => {
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
          onClick={() => setItem(data)}
        >
          All
        </button>
      </div>
    </>
  );
};

export default Buttons;