import { Col, Card, Button } from "react-bootstrap";

const Bebida = ({ bebida }) => {
  return (
    <Col md={6} lg={4}>
      <Card className="mb-4">
        <Card.Img
          variant="top"
          src={bebida.strDrinkThumb}
          alt={bebida.strDrink}
        />
      </Card>
    </Col>
  );
};

export default Bebida;
