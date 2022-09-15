import React from "react";
import "./Details.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const onAdd = (cantidad) => {
    alert("Seleccionaste " + cantidad + " productos.");
  };

  return (
    <>
      {item && item.imagen ? (
        <div className="detalle">
          <div className="detalle_img">
            <div>
              <img src={item.imagen} alt={item.titulo}></img>
            </div>
            <div className="detalleDescripcion">
              <h2>Precio: {item.precio}</h2>
              <p>Descripción: {item.descripcion}</p>
              <p>Stock: {item.stock}</p>
              <ItemCount
                className="contador"
                stock={item.stock}
                initial={1}
                onAdd={onAdd}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="loader"></div>
      )}
    </>
  );
};

export default ItemDetail;
