import React, { useState, useEffect } from "react";
import axios from "axios";
import "./compareProduct.css";

const CompareProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const productIds = urlParams.getAll("ids");
      console.log(productIds);

      try {
        const response = await axios.get(
          `http://localhost:4000/api/products/compare?ids=${productIds.join(
            "&ids="
          )}`
        );
        const data = response.data;
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Ratings</th>
          <th>Discriptiom</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product._id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.ratings}</td>
            <td>{product.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CompareProducts;
