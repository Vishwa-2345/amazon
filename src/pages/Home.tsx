// import React from "react";
// import MobileList from "../components/Mobile";

// const Home: React.FC = () => {
//   return <MobileList />;
// };

// export default Home;



import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import mobiles from "../components/MobileList";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container className="mt-4">
      {mobiles.map((mobile) => (
        <Card key={mobile.id} className="mb-4 p-3 shadow-sm">
          <Row>
            <Col md={3} className="d-flex align-items-center">
              <Card.Img
                src={mobile.image}
                alt={mobile.name}
                style={{ height: "200px", objectFit: "contain" }}
              />
            </Col>
            <Col md={9}>
              <Card.Body>
                <Card.Title className="fw-bold">{mobile.name}</Card.Title>
                <p className="text-warning">{mobile.rating}</p>
                <h4 className="text-danger">{mobile.price}</h4>
                <p>
                  <s className="text-muted">{mobile.mrp}</s> &nbsp;
                  <span className="text-success">{mobile.discount}</span>
                </p>
                <p className="text-primary">{mobile.delivery}</p>
                <Button
                  variant="warning"
                  className="fw-bold"
                  onClick={() => navigate(`/product/${mobile.id}`)}
                >
                  View Details
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
    </Container>
  );
};

export default Home;
