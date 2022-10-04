import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { db } from "../../utils/firebaseConfig";
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./Cart.css";

const Cart = () => {
  const ctx = useContext(CartContext);

  const createOrder = async () => {
    const itemsForDB = ctx.cartList.map(item => ({
      id: item.id,
      title: item.titulo,
      price: item.precio,
      quantity: item.quantity
    }));

    let order = {
      buyer: {
        name: "Carlos Samaritano",
        email: "samaritanocarlos@gmail.com",
        phone: "1198765432"
      },
      items: itemsForDB,
      date: serverTimestamp(),
      total: ctx.calcAll()
    }

    const newOrderRef = doc(collection(db, "orders"))
    await setDoc(newOrderRef, order)
    Swal.fire({
      icon: "success",
      text: "Su compra fue creada exitosamente con el siguiente id " + newOrderRef.id
    })
    ctx.clear()

    itemsForDB.map(async (item) => {
      const restarStock = doc(db, "products", item.id);
      await updateDoc(restarStock, {
        stock: increment(-item.quantity)
      })
    })
  }


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
        {
          ctx.cartList.map(item =>
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
                      <p>Cantidad</p>
                      <p>{item.quantity}</p>
                    </div>

                    <div className="item-caja">
                      <p>Total</p>
                      <p>${item.precio * item.quantity}</p>
                    </div>

                    <button className="boton-eliminar"
                      onClick={() => ctx.removeItem(item.id)}>Eliminar este producto</button>
                  </div>
                </>
              }
            </li>)
        }
      </ul>
      {ctx.cartList.length === 0 ? (
        <></>
      ) : (
        <div id="container-final">
          <p>Resumen del pedido</p>
          <p>Total de productos: {ctx.calcItem()}</p>
          <p>Total: ${ctx.calcAll()}</p>
          <button className="compra" onClick={createOrder}>Pagar</button>
        </div>
      )}
    </section>
  );
};

export default Cart;


