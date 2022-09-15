import React, { useEffect, useState } from "react";
import ItemList from "../Items/ItemList";
import customFetch from "../../utils/customFetch";
import { useParams } from "react-router-dom";
import dataFromBD from "../../utils/data";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const {idCategory} = useParams();

  useEffect(() => {
    customFetch(2000, dataFromBD.filter(item => {
        if (idCategory === undefined) return item;
        return item.categoryId === idCategory
    }))
        .then(result => setDatos(result))
        .catch(err => console.log(err))
}, [idCategory]);

return (
  <>
   <ItemList items= {datos}/>
  </>
)
}

export default ItemListContainer;