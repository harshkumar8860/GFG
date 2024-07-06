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
      <div className="Container">
        {products.map((products) => (
          <div className="product">
            <img className="HomePageImage" height="100px" width="75px" src={products.image} />
            <h5 className="ProductTitle">{products.title}</h5>
            <h5 className="ProductPrice">${products.price}</h5>
            <NavLink className='Link' to={`product/${products.id}`}>
              <button className="BuyNowButton">Buy Now</button>
            </NavLink>
            {/* <p>{products.description}</p> */}
            {/* <hr /> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataFetchUsingApi;
