import React from "react";
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../Items/ItemList";

function ItemListContainer(props) {

  return (
    <div className="contenido">
      <h2 className="titulo-Item">{props.greeting}</h2>
      <ItemCount stock={5} initial={0}/>
      <ItemList/>
    </div>
  );
}

export default ItemListContainer;