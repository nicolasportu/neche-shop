import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <Link to="/">
        <h1 className="titlePage">TIENDA OFICIAL</h1>
      </Link>
      <div className="header">
        <Link to="/">
          <img
            className="logo"
            src="https://i.ibb.co/FbjDgqM/logoneche-removebg-preview.png"
            alt="logoneche"
            border="0"
          ></img>
        </Link>
        <nav className="navBar">
          <Link to="/category/mochila">
            <li className="links" alt="">
              Mochilas
            </li>
          </Link>
          <Link to="/category/matera">
            <li className="links" alt="">
              Materas
            </li>
          </Link>
          <Link to="/category/riñonera">
            <li className="links" alt="">
              Riñoneras
            </li>
          </Link>
        </nav>
      </div>
      <CartWidget />
    </header>
  );
}

export default NavBar;
