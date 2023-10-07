import { Fragment, useState, useEffect } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ListRange from "./components/ListRange/ListRange";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ListCar from "./components/ListCar/ListCar";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import About from "./components/About/About";
import CarDetail from "./components/CarDetail/CarDetail";
import Contact from "./components/Contact/Contact";
import Brands from "./components/Brands/Brands";
import ListCarByRange from "./components/ListCar/ListCarByRange";
import ListCarByBrand from "./components/ListCar/ListCarByBrand";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/ranges" element={<ListRange />} />
        <Route path="/cars/range/:rName" element={<ListCarByRange />} />
        <Route path="/cars/brand/:bName" element={<ListCarByBrand />} />

        <Route path="/cars" element={<ListCar />} />
        <Route path="/cars/:id" element={<CarDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;