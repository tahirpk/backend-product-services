import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route,  useLocation } from "react-router-dom";
import { Container, Row, Col, Navbar, Nav, useTable } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import DetailProduct from "./components/DetailProduct";
import "./bootstrap.min.css";
import './App.css';

function App() {
  return (
    <Router>
      <main className="py-3 fluid">
      <Header />        
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/product/:id" element={<DetailProduct />} exact /> 
        </Routes>     
   <Footer />
   </main>
   </Router>
  );
}

export default App;
