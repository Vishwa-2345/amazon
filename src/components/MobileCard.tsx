import React from "react";
import { Card, Button } from "react-bootstrap";

interface MobileProps {
  image: string;
  name: string;
  price: string;
  rating: number;
}

const MobileCard: React.FC<MobileProps> = ({ image, name, price, rating }) => {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>⭐ {rating} | ₹{price}</Card.Text>
        <Button variant="warning">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default MobileCard;


