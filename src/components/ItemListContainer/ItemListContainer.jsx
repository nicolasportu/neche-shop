import React from "react";
import './ItemListContainer.css';

function ItemListContainer(props) {
  return (
    <div className="contenido">
      <h2 className="titulo-Item">{props.greeting}</h2>
    </div>
  );
}

export default ItemListContainer;