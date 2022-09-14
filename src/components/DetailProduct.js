import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import {  useParams } from "react-router-dom";
import axios from "axios";

const DetailProduct = () => {
    const apiUrl = "http://localhost:43000/";
    const params = useParams()
    const { id } = params;
  
    //original products to be retrieved from api
    const [product, setProduct] = useState({});
    useEffect( () => { getProductApi()  }, []); 
    const getProductApi = async () => {       
    try {
      const res = await axios.get(apiUrl+"product/"+id)
      if (res?.data?.data?.status === true)
        setProduct(res?.data?.data?.package);
      
    } catch (error) {
      console.log(error?.message)
      
      }
    }

    const [formValue, setFormValue] = React.useState({
    email: '',
  });

    const handleSubmit = async (event) => {
      
        event.preventDefault();
        const bodyFormData = new FormData();
        bodyFormData.append("name", formValue.name)
        bodyFormData.append("price", formValue.price)

        try {
        // make axios post request
        const response =  await axios({
            method: "patch",
            url: apiUrl+"product/edit/"+id,
          data: {
            "name": formValue.name,
            "price": formValue.price,
            "id": product.id              
            },
            headers: { "Content-Type": "application/json" },
        });
           console.log(response?.data?.data)
        } catch(error) {
             console.log(error)
        }
  }

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }
  
   
    return (
      
        <Container fluid className="centered-container p-5">
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="pname">
        <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" name="name"  placeholder={product.name}
            onChange={handleChange}/>
      
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
        <Form.Label>Product Price</Form.Label>
        <Form.Control name="price" type="number" placeholder={product.price} min="0" max="20000" onChange={handleChange}/>
        </Form.Group>        
        <Button className="btn" variant="primary" type="submit">
        Submit
        </Button>
        </Form>

        </Container>       
        
    );
}

export default DetailProduct;
