import React, { useState } from "react";
import CardData from "./CardData";

export default function Cards(props) {
  const [data, setData] = useState(CardData);

  console.warn("props",props)

  return (
    <div className="container">
      <h2 className="text-center my-4">Add to Cart Projects</h2>

      <div className="row">
        {data.map((element, id) => {
          return (
            <>
              <div
                className="card col-lg-4 mb-4 border-0 mx-2"
                style={{ width: "22rem" }}
              >
                <img
                  src={element.imgdata}
                  className="card-img-top "
                  style={{ height: "250px", cursor: "pointer" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{element.rname}</h5>
                  <p className="card-text">Price : {element.price}</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => props.addToCartHandler({element})}
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
