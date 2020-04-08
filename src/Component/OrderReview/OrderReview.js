import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Login/useAuth";

const OrderReview = () => {
  const auth = useAuth();
  console.log(auth.user);

  return (<div>
   {
     auth.user ? 
     <div>
        <h4>Login Successful {auth.user.name}</h4>
        <Link to="/shipment" className="btn btn-success">
          Let's Go for payment
        </Link>
      </div> :
     <div>
    <h4>Please Check your Order</h4>
    <Link to="/login" className="btn btn-success">
      Please Login First
    </Link>
  </div>}
</div>  );
};

export default OrderReview;
