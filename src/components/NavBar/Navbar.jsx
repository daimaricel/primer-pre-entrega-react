import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import logo from "../assets/Logo-dl.png";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to={"/"}>
          <img src={logo} alt="logo Dalas tennis store" className="logoDl" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to={`/categoria/raquetas`}
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Raquetas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`/categoria/mochilas`}
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Mochilas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`/categoria/accesorios`}
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Accesorios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`/categoria/pelotas`}
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Pelotas
              </NavLink>
            </li>
          </ul>

        </div>
        <CartWidget />
      </div>

    </nav>


  );
};

export default NavBar;
