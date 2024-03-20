import react from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
          <button type="button" class="btn  position-relative">
            <i className="fa-solid fa-cart-shopping cart"></i>
            <span class="position-absolute top-10 start-90 translate-middle badge rounded-pill bg-danger">
              1
              <span class="visually-hidden">unread messages</span>
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
}
