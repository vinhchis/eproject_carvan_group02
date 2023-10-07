import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "./range.css";

function Range({ range }) {
  const navigate = useNavigate();
  return (
    <Card className="range text-center">
      <Card.Img
        variant="top"
        src={require(`../../assets/image/ranges/${range.name}.svg`)}
      />
      <Card.Body>
        <Card.Title>{range.name}</Card.Title>
        <Card.Text className="text-start range-desc">{range.desc}</Card.Text>
        <Button
          className="button-list"
          variant="primary"
          onClick={() => {
            navigate(`/cars/range/${range.name}`);
          }}
        >
          List Car
        </Button>
      </Card.Body>
    </Card>
  );
}
export default Range;
