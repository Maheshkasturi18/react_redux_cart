import React from "react";

export default function Cart(props) {
  return (
    <section>
      <div className="container d-flex justify-content-center py-4">
        {props.data.length ? 
          <div class="add-to-cart">
  <table>
    <thead>
      <tr>
        <th>Product</th>
        <th>Description</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
        <th>Action</th>
      </tr>
    </thead>
    {/* <tbody>
      <tr>
        <td>Product Name</td>
        <td>Description of the product goes here.</td>
        <td>$10.00</td>
        <td><input type="number" value="1" min="1"/></td>
        <td>$10.00</td>
        <td><button>Add to Cart</button></td>
      </tr>
    </tbody> */}
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
