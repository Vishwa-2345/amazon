import { useParams } from "react-router-dom";
import mobiles from "./MobileList";

const MobileDetails = () => {
  const { id } = useParams<{ id: string }>();
  const mobile = mobiles.find((m) => m.id === Number(id));

  if (!mobile) {
    return <h2 className="text-center mt-5">Mobile not found!</h2>;
  }

  return (
    <div className="container mt-4">
      <div className="card p-4">
        <img src={mobile.image} alt={mobile.name} width="200" />
        <h2>{mobile.name}</h2>
        <p><strong>Price:</strong> {mobile.price}</p>
        <p><strong>MRP:</strong> <s>{mobile.mrp}</s></p>
        <p><strong>Discount:</strong> {mobile.discount}</p>
        <p><strong>Rating:</strong> {mobile.rating}</p>
        <p><strong>Delivery:</strong> {mobile.delivery}</p>
      </div>
    </div>
  );
};

export default MobileDetails;
