import React, { useState, useEffect } from "react";
import Title from "../Title";
import ItemCount from "../ItemCount";
import ItemList from "../ItemList";

///constante que contiene imagenes como una base de datos

const zapas = [
  {
    id: 1,
    image:
      "https://http2.mlstatic.com/zapatillas-nike-air-max-zoom-out-hombre-D_NQ_NP_871707-MCO25669325855_062017-F.jpg",
    title: "Nike",
  },
  {
    id: 2,
    image:
      "https://oechsle.vteximg.com.br/arquivos/ids/2849992-1000-1000/1799455.jpg?v=637493170265230000",
    title: "Cat",
  },
  {
    id: 3,
    image:
      "https://www.lapolar.cl/dw/image/v2/BCPP_PRD/on/demandware.static/-/Sites-master-catalog/default/dw339afa88/images/large/2CC453426-negro.jpg?sw=1200&sh=1200&sm=fit",
    title: "Puma",
  },
];

///creo una constante para renderizar las imagenes

export const ItemListContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(zapas);
      }, 1000);
    });
    getData.then((res) => setData(res));
  }, []);
  
  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  };

  return (
    <>
      <Title title="Items" />
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
