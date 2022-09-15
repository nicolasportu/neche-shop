import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Items.css";

const Item = ({ id, picture, titulo, descripcion, precio, start }) => {
    const [rate, setRate] = useState(start);

    const handleClick= () => {
        setRate(rate + 1)
    }

    useEffect (() => {
        console.log(`el producto ${titulo} fue comprado`)
    });

  return (
    <div className="itemsContainer">
      <div className="cardContainer">
        <figure>
          <img className="fotoProducto" src={picture} alt={titulo} />
        </figure>
        <div className="contenidoCard">
          <h2 className="tituloProducto">{titulo}</h2>
          <p className="descripcionProducto">{descripcion}</p>
          <Link to={`item/${id}`}><button onClick={handleClick} className="precioProducto">{precio}</button></Link>
        </div>
      </div>
    </div>
  );
};  

export default Item;
