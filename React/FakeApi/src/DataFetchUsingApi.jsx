import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import App from './App.css'
function DataFetchUsingApi() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState("true");

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response);
      console.log(response.data);
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <div>
        {products.map((products) => (
          <div className="product">
            <img height="100px" width="100px" src={products.image} />
            <h2>{products.title}</h2>
            <NavLink to={`product/${products.id}`}>
              <button>Buy Now</button>
            </NavLink>
            <h2>{products.price}</h2>
            <p>{products.description}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataFetchUsingApi;
