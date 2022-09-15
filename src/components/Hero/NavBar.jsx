import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="text-gray-600 body-font">
      <Link to="/">
        <h1>TIENDA OFICIAL</h1>
      </Link>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/">
          <img
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 logo"
            src="https://i.ibb.co/FbjDgqM/logoneche-removebg-preview.png"
            alt="logoneche-removebg-preview"
            border="0"
          ></img>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/category/mochila">
            <li className="mr-5 hover:text-gray-900 links" alt="">
              Mochilas
            </li>
          </Link>
          <Link to="/category/matera">
            <li className="mr-5 hover:text-gray-900 links" alt="">
              Materas
            </li>
          </Link>
          <Link to="/category/riñonera">
            <li className="mr-5 hover:text-gray-900 links" alt="">
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
