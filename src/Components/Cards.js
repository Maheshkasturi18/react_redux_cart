import React, { useState } from "react";
import CardData from "./CardData";
import { Link } from "react-router-dom";

export default function Cards(props) {
  const [data] = useState(CardData);

  console.warn("props", props);

  return (
    <div className="container">
      <h2 className="text-center my-4">Add to Cart Projects</h2>

      <div className="row">
        {data.map((element) => {
          return (
            <>
              <div
                className="card col-lg-4 mb-4 border-0 mx-2"
                style={{ width: "22rem" }}
              >
                <Link to={`/cardDetails/${element.id}`}>
                  <img
                    src={element.imgdata}
                    className="card-img-top "
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
                    onClick={() => props.addToCartHandler({ element })}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
