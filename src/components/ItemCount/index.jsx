import "./itemCount.css";

import React,{useState} from "react";

export const ItemCount = ({initial, stock, onAdd}) => {

    const [ count, setCount] = useState(initial);

    //creo las constantes para incrementar o decrementar los numeros en el carrito

    const decrease = () => {
        setCount(count - 1);
    }
    
    const increase = () => {
        setCount(count + 1);
    }

    //uso la funcion onclick para que me detecte los clicks (redo) y conecto las constantes
    /// tambien uso la funcion disabled y stock para poner limites al contador tanto para incrementar como para decrementar
  return (
    <div className="counter">
      <button disabled={count <=1} onClick={decrease}> - </button> 
      <span> {count} </span>
      <button disabled={count >= stock } onClick={increase}> + </button>

      <div>
        <button disabled={stock <= 0 } onClick={() => onAdd(count)} >Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ItemCount;
