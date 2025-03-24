import { Link } from "react-router-dom";
import mobiles from "./MobileList";

const MobileList = () => {
  return (
    <div className="container mt-4">
      {mobiles.map((mobile) => (
        <div key={mobile.id} className="card mb-3 p-3">
          <img src={mobile.image} alt={mobile.name} width="100" />
          <h4>
            <Link to={`/mobile/${mobile.id}`} className="text-primary">
              {mobile.name}
            </Link>
          </h4>
          <p>Price: {mobile.price}</p>
        </div>
      ))}
    </div>
  );
};

export default MobileList;
