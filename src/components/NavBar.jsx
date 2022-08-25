function NavBar() {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/"cclass="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" alt="">
            <img class="logo" src="https://i.ibb.co/FbjDgqM/logoneche-removebg-preview.png"           alt="logoneche-removebg-preview" border="0"></img>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="/" class="mr-5 hover:text-gray-900 links" alt="">Inicio</a>
          <a href="/" class="mr-5 hover:text-gray-900 links" alt="">Productos</a>
          <a href="/" class="mr-5 hover:text-gray-900 links" alt="">Contacto</a>
        </nav>
      </div>
    </header>  
  );
}

export default NavBar;
