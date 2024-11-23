import React, { useState } from "react";
import ApiRoutes from "../utils/ApiRoutes";
import AxiosService from "../utils/AxiosService";
import toast from "react-hot-toast";

function Card({ cart, setCart, product }) {
  const [id, setId] = useState(product._id);
  const [toggle, setToggle] = useState(true);
  const handleClick = async () => {
    setCart(prevCart => prevCart + 1);
    setToggle(false)

    try {

      const res = await AxiosService.get(`${ApiRoutes.MYCART.path}/${id}`);

      toast.success("Product added to cart successfully!");

    } catch (error) {
      toast.error(error.response?.data?.message || error.message || "An error occurred");
    }
  };

  return (
    <div className="col mb-5">
      <div className="card h-100">
        <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>
          Sale
        </div>
        <img className="card-img-top" src={product.image} alt="Product" />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{product.product}</h5>
            {product.cost} {"$"}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button className="btn btn-outline-dark mt-auto" onClick={handleClick}>
            {toggle ? "Buy" : "Buy+1"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
