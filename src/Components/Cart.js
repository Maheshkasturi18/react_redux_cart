import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cart(props) {
  //  console.warn("cart",props.data)

  const [price, setPrice] = useState(0);
  // console.warn("price",price);

  const total = () => {
    let price = 0;
    props.data.map((ele, k) => {
      price = ele.cardData.element.price + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <section>
      <div className="container d-flex justify-content-center py-4 ">
        {props.data.length ? (
          <div class="add-to-cart">
            <table className="mb-5">
              <thead>
                <tr>
                  <th className="text-center">Product</th>
                  <th className="text-center">Description</th>
                  <th className="text-center">price</th>
                  <th className="text-center">Quantity</th>
                  <th className="text-center">SubTotal</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {props.data.map((e) => {
                  {
                    /* console.warn(e.cardData.element.qnty) */
                  }
                  return (
                    <>
                      <tr key={e.id}>
                        <td className="text-center">
                          <Link to={`/cardDetails/${e.cardData.element.id}`}>
                            <img
                              src={e.cardData.element.imgdata}
                              style={{ width: "5rem", height: "5rem" }}
                            />
                          </Link>
                        </td>
                        <td className="text-center">
                          {e.cardData.element.rname}
                        </td>
                        <td className="text-center">
                          {e.cardData.element.price}
                        </td>
                        <td className="text-center">
                          <input
                            type="number"
                            value={e.cardData.element.qnty}
                          />
                        </td>
                        <td className="text-center">{e.cardData.element.price}</td>
                        <td className="text-center">
                          <i
                            className="fa-solid fa-trash"
                            style={{
                              color: "red",
                              padding: "5px",
                              cursor: "pointer",
                            }}
                            onClick={() => props.removeToCartHandler()}
                          ></i>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>

            <div className="row">
              <div className="col-lg-8"></div>
              <div className="col-lg-4">
                <table>
                  <thead>
                    <tr>
                      <th className="text-center">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">{price}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="d-flex">
            <h3>Your cart is empty</h3>
            <img src="cart.gif" alt="Cart" className="cart-gif" />
          </div>
        )}
      </div>
    </section>
  );
}
