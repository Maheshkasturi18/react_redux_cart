import React from "react";

export default function Cart(props) {
  return (
    <>
      {
        {/* <div className="container d-flex justify-content-center py-4"> */}
          props.state.length ?
          <>
            <div className="cart" style={{ width: "50rem" }}>
              <table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Restuarant</th>
                    <th>Total</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div>
              <h3> Your cart is empty</h3>
              <img src="cart.gif" className="cart-gif" />
            </div>
          </>
        {/* </div> */}
      }
    </>
  );
}
