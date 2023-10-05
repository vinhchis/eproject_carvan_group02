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
import BrandCars from "./components/Brands/BrandCars";

  //"homepage": "https://vinhchis.github.io/carvan",

function App() {
  const [rangeIdSelected, setRangeIdSelected] = useState({});
  const [brandIdSelected, setBrandIdSelected] = useState({});


  return (
    <>
      <Header />
      <Routes>
        {/* <Route exact path="/" component={<Home />} /> */}

        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands setBrandIdSelected={setBrandIdSelected} />} />
        <Route path="/ranges" element={<ListRange setRangeIdSelected={setRangeIdSelected} />} />
        <Route path="/cars/range/:id" element={<ListCar rangeIdSelected={rangeIdSelected} />} />
        {/* <Route path="/cars/brand/:id" element={<BrandCars />} /> */}
        <Route path="/cars/brand/:id" element={<ListCar brandIdSelected={brandIdSelected} />} />

        <Route path="/cars" element={<ListCar />} />
        <Route path="/cars/:id" element={<CarDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;