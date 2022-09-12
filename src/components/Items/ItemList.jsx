import React, {useState, useEffect} from "react";
import Item from "./Item";
import "./Items.css";
import apiPromise from "../../utils/data";
import dataFromBD from "../../utils/data";

const ItemList = () => {
    const [data, setData] = useState([]);

    //component did mount 
    useEffect(() => {
        apiPromise(2000, dataFromBD)
          .then(datos => setData(dataFromBD))
          .catch(err => console.log(err))
    }, []);

   return (
    <>
    {
        data.length ?
        data.map(item => (
    <Item
        key={item.id}
        start={0}
        imagen={item.imagen}
        titulo={item.titulo}
        descripcion={item.descripcion}
        precio={item.precio}
        stock={item.stock} />
        ))
        : <div className="loader"></div>
    }
    </>
   );
}


export default ItemList;