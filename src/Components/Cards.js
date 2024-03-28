import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardData from "./CardData";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD } from "../Redux/Actions/action";

export default function Cards() {
  const [data, setData] = useState(CardData);
  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(ADD(e));
    toast.success("Item  added in your cart!"); // Show custom toast notification
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">Add to Cart Projects</h2>
      <ToastContainer position="top-center" />{" "}
      {/* Container for toast notifications */}
      <div className="row">
        {data.map((element) => (
          <div
            key={element.id}
            className="card col-lg-4 mb-4 border-0 mx-2"
            style={{ width: "22rem" }}
          >
            <Link to={`/cardDetails/${element.id}`}>
              <img
                src={element.imgdata}
                className="card-img-top"
                style={{ height: "250px", cursor: "pointer" }}
                alt="..."
              />
            </Link>
            <div className="card-body">
              <h5 className="card-title">{element.rname}</h5>
              <p className="card-text">Price : {element.price}</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => send(element)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
