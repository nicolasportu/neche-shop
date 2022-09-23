import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import "./Cart.css";

const Cart = () => {
  const ctx = useContext(CartContext);

  return (
    
    <section className="sectionCart">
      <div id="btn-container">
        {ctx.cartList.length === 0 ? (
          <>
            <h1 className="titleCart">El carrito esta vacio</h1>
            <Link to="/">
              <button id="boton-volver">Volver a la tienda</button>
            </Link>
          </>
        ) : (
          <button id="btn-borrartodo" onClick={ctx.clear}>
            Eliminar todos los productos
          </button>
        )}
      </div>
      <ul className="cartList">
        {ctx.cartList.map((item) => (
          <li key={item.id}>
            {
              <>
                <div className="itemCaja-box">
                  <img src={item.imagen} alt="Imagen Producto" />

                  <div className="item-caja">
                    <p>Producto</p>
                    <p>{item.titulo}</p>
                  </div>

                  <div className="item-caja">
                    <p>Precio</p>
                    <p>${item.precio}</p>
                  </div>

                  <div className="item-caja">
                    <p>Stock</p>
                    <p>{item.stock}</p>
                  </div>

                  <div className="item-caja">
                    <p>Total</p>
                    <p>${item.precio * item.quantity}</p>
                  </div>

                  <button
                    className="boton-eliminar"
                    onClick={() => ctx.removeItem(item.id)}
                  >
                    Eliminar este producto
                  </button>
                </div>
              </>
            }
          </li>
        ))}
      </ul>
      {ctx.cartList.length === 0 ? (
        <></>
      ) : (
        <div id="container-final">
          <p>Total de productos: {ctx.cantidadProductos()}</p>
          <p>Total: ${ctx.total()}</p>
          <button className="compra">Pagar</button>
        </div>
      )}
    </section>
  );
};

export default Cart;
