import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import mobiles from "./MobileList";
const MobileList = () => {

    const [searchTerm] = useState("");
  
    const filteredMobiles = mobiles.filter((mobile) =>
      mobile.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <Container className="mt-4">
        {/* Search Input (Uncomment if needed) */}
        {/* <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Search for mobiles"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form.Group> */}
  
        {filteredMobiles.map((mobile) => (
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
                  <Button variant="warning" className="fw-bold">
                    Add to cart
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        ))}
      </Container>
    );
  };
  
  export default MobileList;
  