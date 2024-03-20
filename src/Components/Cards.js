import React, { useState } from "react";
import CardData from "./CardData";

export default function Cards() {
  const [data, setData] = useState(CardData);

  return (
    <div className="container">
      <h2 className="text-center my-4">Add to Cart Projects</h2>

      <div className="row">
        {data.map((element, id) => {
          return (
            <>
              <div className="card col-lg-4 mb-4 border-0 mx-2" style={{width:"22rem"}}>
                <img src={element.imgdata} className="card-img-top " style={{height:"250px"}}  alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{element.rname}</h5>
                  <p className="card-text">
                    Price : {element.price}
                  </p>
                  <a href="#" className="btn btn-primary">
                    Add to cart
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
