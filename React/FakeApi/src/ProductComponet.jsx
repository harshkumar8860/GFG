import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductComponet() {
  const [item, setItem] = useState({});

  let IDvar = useParams();
  console.log(IDvar);
  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${IDvar.id}`
      );
      console.log(response)
      console.log(response.data);
      setItem(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <img height='200px' width='200px' src={item.image} alt="" />
      <h2>{item.title}</h2>
      <h2>{item.price}</h2>
      <h2>{item.description}</h2>
    </div>
  );
}

export default ProductComponet;
