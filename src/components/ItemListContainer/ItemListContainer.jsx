import React, { useEffect, useState } from "react";
import ItemList from "../Items/ItemList";
import { useParams } from "react-router-dom";
import { firestoreFetch } from "../../utils/firestoreFetch";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    firestoreFetch(idCategory)
      .then(result => setDatos(result))
      .catch(err => console.log(err))
  }, [idCategory]);

  useEffect(() => {
    return (() => {
      setDatos([]);
    })
  }, []);

  return (
    <ItemList items={datos} />
  )
}

export default ItemListContainer;