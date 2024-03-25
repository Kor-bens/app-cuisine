import React from "react";
import NavBar from "../common/navbar/Navbar";
import './accueil.css'
import Header from "../Header";

function Accueil() {
  return (
    <>
    <Header><p className=" italic 
    mobile:absolute mobile:top-0 mobile:left-0 mobile:ml-4 mobile:mt-12 mobile:text-4xl " style={{ color: '#8B7979' }}>CookBook</p></Header> 
    
        <NavBar />
      <h1 className="text-gray-700" style={{ color: '#8B7979' }}>Home</h1>
    </>
  );
}

export default Accueil;
