import { useEffect, useState } from "react";
import apiPromise from "../../utils/data";
import ItemDetail from "./ItemDetail";
import "./Details.css";

function ItemDetailContainer() {
    const [producto, setProducto] = useState({});

    useEffect(() => {
        apiPromise
            .then((res) => {
                setProducto(res[0]);
            })
            .catch((err) => {
                alert(err);
            })
    }, []);
    console.log(producto);

    return (
        <div className="detalleContainer">
            <ItemDetail items={producto}/>
        </div>
    )
}


export default ItemDetailContainer;

