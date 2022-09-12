import "./Details.css";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail(props) {
  const { imagen, titulo, descripcion, precio, stock } = props.items;

  return (
    <div className="detalle">
      <div className="detalle_img">
        <h3 className="descripcionTitulo">{titulo}</h3>
        <img src={imagen} alt={titulo}></img>
        <div className="detalleDescripcion">
          <h2>Precio: {precio} </h2>
          <p>Descripción: {descripcion}</p>
          <p>Stock: {stock}</p>
        </div>
        <div className="contador">
          <ItemCount stock={stock} initial={0} />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
