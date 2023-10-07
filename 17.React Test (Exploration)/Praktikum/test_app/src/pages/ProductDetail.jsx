// eslint-disable-next-line no-unused-vars
import React from 'react'
import {useParams, Link } from 'react-router-dom'

function ProductDetail() {
    const { id } = useParams();
    const products = JSON.parse(localStorage.getItem('products'))
    let product = products.filter(product => product.number === id);
    product = product[0]

return (
    <div>
        <h2>Product Detail</h2>
        <p>ID: {product.number}</p>
        <p>Product Name: {product.name}</p>
        <p>Product Category: {product.category}</p>
        <p>Product Freshness: {product.freshness}</p>
        <p>Image of Product: {product.image}</p>
        <p>Additional Description: {product.description}</p>
        <p>Product Price: {product.price}</p>
        <Link to={'/CProduct'}><button >back</button></Link>
        
    </div>
);
}

export default ProductDetail