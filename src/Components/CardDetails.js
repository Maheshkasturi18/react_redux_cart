import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD, REMOVE, DLT } from "../Redux/Actions/action";

export default function CardDetails() {
  const [data, setData] = useState([]);
  // console.log(data);

  const { id } = useParams();
  // console.log(id);

  const history = useNavigate();

  const dispatch = useDispatch();

  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
  };

  // add data

  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };

  // remove one
  const remove = (item) => {
    dispatch(REMOVE(item));
  };

  // delete btn
  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
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
            {
              /* console.warn("ele",ele.imgdata) */
            }
            return (
              <>
                <div className="px-4">
                  <img src={ele.imgdata} style={{ height: "300px" }} />
                </div>

                <div className="d-flex">
                  <div className="px-3">
                    <p>
                      <b>Restuarant: </b> {ele.rname}
                    </p>
                    <p>
                      <b>Price: </b>
                      {ele.price}
                    </p>
                    <p>
                      <b>Dishes: </b> {ele.address}
                    </p>
                    <p>
                      <b>Total: </b>
                      {ele.price * ele.qnty}
                    </p>

                    <div
                      className="mt-5 d-flex justify-content-between align-items-center"
                      style={{
                        width: 100,
                        cursor: "pointer",
                        background: "#ddd",
                        color: "#111",
                        padding: "8px",
                      }}
                    >
                      <span
                        style={{ fontSize: 24 }}
                        onClick={
                          ele.qnty <= 1 ? () => dlt(ele.id) : () => remove(ele)
                        }
                      >
                        -
                      </span>
                      <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                      <span style={{ fontSize: 24 }} onClick={() => send(ele)}>
                        +
                      </span>
                    </div>
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
                        {ele.rating}
                      </span>
                    </p>
                    <p>
                      <b>Order Review: </b>
                      {ele.somedata}
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
