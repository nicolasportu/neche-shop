import Item from "./Item";
import "./Items.css";

const ItemList = ({items}) => {
    
   return (
    <>
    <div className="gridContainer">
    {
        items.length > 0
        ? items.map(item => (
    <Item
        key={item.id}
        id={item.id}
        start={0}
        picture={item.imagen}
        titulo={item.titulo}
        descripcion={item.descripcion}
        precio={item.precio}
        stock={item.stock} />
        ))
        : <div className="loader"></div>
    }
    </div>
    </>
   );
}


export default ItemList;