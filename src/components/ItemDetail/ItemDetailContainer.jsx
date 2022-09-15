import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';
import customFetch from "../../utils/customFetch";
import dataFromBD from "../../utils/data";
import "./Details.css";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const {idItem} = useParams();

    useEffect(() => {
        customFetch(2000, dataFromBD.find(item => item.id === parseInt(idItem)))
        .then(result => setDato(result))
        .catch(err => console.log(err))
    }, [idItem]);

    return (
        <ItemDetail item={dato}/>
    )
}

export default ItemDetailContainer;

