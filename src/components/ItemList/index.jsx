import Item from "../Item";
import React from "react";

///lo que hace esta constante es mostrar cada item en pantalla despues de capturarlo
const ItemList = ({data =[]}) => {
    return (
        data.map(zapas => <Item key={zapas.id} info={zapas}/>)
    );
}
export default ItemList;