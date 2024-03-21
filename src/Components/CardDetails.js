import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CardDetails(props) {
  // console.warn("details", props.data);

  const [data, setData] = useState([]);
  // console.warn("state",data)

  // for comparing data id and assisgned id, if true then details will shown 
  const { id } = useParams();
  // console.warn("details",id);

  const compare = () => {
    let comparedata = props.data.filter((e) => {
      return e.cardData.element.id == id;
    });
    setData(comparedata);
  };

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <div className="container">
      <h2 className="mt-3 mb-5 text-center">Items Details Page</h2>

      <section className="container border-black">
        <div className="itemsDetails d-flex ">
          {data.map((ele) => {
            {/* console.warn("ele",ele.cardData.element.imgdata) */}
            return (
              <>
                <div className="px-4">
                  <img src={ele.cardData.element.imgdata} style={{ height: "300px" }} />
                </div>

                <div className="d-flex">
                  <div className="px-3">
                    <p>
                      <b>Restuarant: </b> {ele.cardData.element.rname}
                    </p>
                    <p>
                      <b>Price: </b>{ele.cardData.element.price}
                    </p>
                    <p>
                      <b>Dishes: </b> {ele.cardData.element.address}
                    </p>
                    <p>
                      <b>Total: </b>
                      350
                    </p>
                  </div>

                  <div>
                    <p>
                      <b>Rating: </b>
                      <span
                        style={{
                          backgroundColor: "green",
                          color: "white",
                          padding: "3px",
                          borderRadius: "5px",
                        }}
                      >
                       {ele.cardData.element.rating}
                      </span>
                    </p>
                    <p>
                      <b>Order Review: </b>
                      {ele.cardData.element.somedata}
                      
                    </p>
                    <p>
                      <b>Remove:</b>
                      <i
                        className="fa-solid fa-trash"
                        style={{ color: "red", padding: "5px" }}
                      ></i>
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
}
