import React from "react";
import { Link } from "react-router-dom";

export default function Cart(props) {
 
  return (
    <section>
      <div className="container d-flex justify-content-center py-4 ">
        {props.data.length ? 
          <div class="add-to-cart">
            <table>
              <thead>
                <tr>
                  <th className="text-center">Product</th>
                  <th className="text-center">Description</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Quantity</th>
                  <th className="text-center">Total</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {
                  props.data.map((e) => {
                    console.warn(e.cardData.element.qnty)
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
                        <td className="text-center">{e.cardData.element.rname}</td>
                        <td className="text-center">{e.cardData.element.price}</td>
                        <td className="text-center">
                          <input type="number"  value={e.cardData.element.qnty}  />
                          
                        </td>
                        <td className="text-center">300</td>
                        <td className="text-center">
                          <i
                            className="fa-solid fa-trash"
                            style={{ color: "red", padding: "5px" }}
                          ></i>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
         : 
          <div className="d-flex">
            <h3>Your cart is empty</h3>
            <img src="cart.gif" alt="Cart" className="cart-gif" />
          </div>
        }
      </div>
    </section>
  );
}
