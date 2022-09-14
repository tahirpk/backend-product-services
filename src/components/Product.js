import React from "react";
import { Link } from "react-router-dom";
import {Table } from "react-bootstrap";

const Product = ({ product }) => {
  return (  
     
        <tr>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.quantity}</td>
          <td>{product.created_at}</td>
          <td>
            <Link to={`/product/${product.id}`} onClick={function () { console.log('click'); }}>Edit</Link>
          </td>
        </tr>  
  );
};

export default Product;
