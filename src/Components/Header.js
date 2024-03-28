import react from "react";
import { Link } from "react-router-dom";
import {  useSelector } from 'react-redux'

export default function Header() {

  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);

  return (
    <div className="container-fluid sticky-top">
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Add to Cart
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          <Link to="/cart" type="button" className="btn  position-relative">
            <i className="fa-solid fa-cart-shopping cart"></i>
            <span className="position-absolute top-10 start-90 translate-middle badge rounded-pill bg-danger">
              {getdata.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
