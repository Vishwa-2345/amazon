// import { useParams } from "react-router-dom";
// import mobiles from "./MobileList";

// const MobileDetails = () => {
//   const { id } = useParams<{ id: string }>();
//   const mobile = mobiles.find((m) => m.id === Number(id));

//   if (!mobile) {
//     return <h2 className="text-center mt-5">Mobile not found!</h2>;
//   }

//   return (
//     <div className="container mt-4">
//       <div className="card p-4">
//         <img src={mobile.image} alt={mobile.name} width="200" />
//         <h2>{mobile.name}</h2>
//         <p><strong>Price:</strong> {mobile.price}</p>
//         <p><strong>MRP:</strong> <s>{mobile.mrp}</s></p>
//         <p><strong>Discount:</strong> {mobile.discount}</p>
//         <p><strong>Rating:</strong> {mobile.rating}</p>
//         <p><strong>Delivery:</strong> {mobile.delivery}</p>
//       </div>
//     </div>
//   );
// };

// export default MobileDetails;
import { useParams } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import mobiles from "./MobileList";

const ProductDetails = () => {
  const { id } = useParams();  
  const mobile = mobiles.find((m) => m.id === parseInt(id || "0"));

  if (!mobile) {
    return <h2 className="text-center text-danger">Product Not Found!</h2>;
  }

  return (
    <Container className="mt-5">
      <Card className="p-4 shadow-lg">
        <Card.Img
          variant="top"
          src={mobile.image}
          style={{ height: "300px", objectFit: "contain" }}
        />
        <Card.Body>
          <Card.Title className="fw-bold">{mobile.name}</Card.Title>
          <p className="text-warning">{mobile.rating}</p>
          <h4 className="text-danger">{mobile.price}</h4>
          <p>
            <s className="text-muted">{mobile.mrp}</s> &nbsp;
            <span className="text-success">{mobile.discount}</span>
          </p>
          <p className="text-primary">{mobile.delivery}</p>
          <Button variant="success" className="fw-bold">
            Buy Now
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductDetails;



