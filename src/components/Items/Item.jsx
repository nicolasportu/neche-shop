import React, { useEffect, useState } from "react";
import "./Items.css";

const Item = ({ imagen, titulo, descripcion, precio, start }) => {
    const [rate, setRate] = useState(start);

    const handleClick= () => {
        setRate(rate + 1)
    }

    useEffect (() => {
        console.log(`el producto ${titulo} fue comprado`)
    }, [rate]);

  return (
    <div className="itemsContainer">
      <div className="cardContainer">
        <figure>
          <img className="fotoProducto" src={imagen} alt={titulo} />
        </figure>
        <div className="contenidoCard">
          <h2 className="tituloProducto">{titulo}</h2>
          <p className="descripcionProducto">{descripcion}</p>
          <button onClick={handleClick} className="precioProducto">{precio}</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
