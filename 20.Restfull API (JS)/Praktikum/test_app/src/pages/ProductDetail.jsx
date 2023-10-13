// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const products = JSON.parse(localStorage.getItem("products"));
  let product = products.filter((product) => product.number === id);
  product = product[0];

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
      <table>
        <h2>Product Detail</h2>
        <p>No: {product.number}</p>
        <p>Product Name: {product.name}</p>
        <p>Product Category: {product.category}</p>
        <p>Product Freshness: {product.freshness}</p>
        <p>Image of Product: {product.image}</p>
        <p>Additional Description: {product.description}</p>
        <p>Product Price: {product.price}</p>
        <Link to={"/CProduct"}>
          <button className="btn btn-dark">back</button>
        </Link>
      </table>
    </div>
  );
}

export default ProductDetail;
