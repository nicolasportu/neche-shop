import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <header className="text-gray-600 body-font">
      <h1>TIENDA OFICIAL</h1>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/"className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" alt="">
            <img className="logo" src="https://i.ibb.co/FbjDgqM/logoneche-removebg-preview.png" alt="logoneche-removebg-preview" border="0"></img>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="/" className="mr-5 hover:text-gray-900 links" alt="">Inicio</a>
          <a href="/" className="mr-5 hover:text-gray-900 links" alt="">Productos</a>
          <a href="/" className="mr-5 hover:text-gray-900 links" alt="">Contacto</a>
        </nav>
      </div>
      <CartWidget/>
    </header>  
    
  );
}

export default NavBar;


