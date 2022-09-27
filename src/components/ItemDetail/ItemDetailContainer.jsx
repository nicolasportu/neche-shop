import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';
import { firestoreFetchId } from "../../utils/firestoreFetch";
import "./Details.css";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        firestoreFetchId(idItem)
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [idItem]);

    return (
        <ItemDetail item={dato} />
    )
}

export default ItemDetailContainer;

