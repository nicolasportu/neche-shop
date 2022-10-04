import React, { useState } from "react";
import Swal from "sweetalert2";
import "./ItemCount.css";

function ItemCount({ stock, onAdd }) {
  const [count, setCount] = useState(0);


  const sumarItem = () => {
    count < stock ? setCount(count + 1) :
      Swal.fire({
        icon: "warning",
        text: "No hay más productos",
      });
  };

  const quitarItem = () => {
    count > 1 ? setCount(count - 1) :
      Swal.fire({
        icon: "info",
        text: "Agrega al menos 1 producto",
      });
  };

  return (
    <div className="contadorContainer">
      <div className="controlContainer">
        <button onClick={quitarItem}>-</button>
        <label>{count}</label>
        <button onClick={sumarItem}>+</button>
      </div>
      {stock && count
        ? <button className="botonAgregar" onClick={() => { onAdd(count); }}> Agregar al Carrito </button>
        : <button className="botonAgregar" disabled> Agregar al Carrito </button>
      }
    </div>

  );
}

export default ItemCount;
