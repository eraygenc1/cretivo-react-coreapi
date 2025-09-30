import React from "react";
import { Route } from "react-router-dom";
import Navbar from "../Navbar";
import Slider from "../Slider";
import Area3 from "../area3";
import Services from "../Services";
function Anasayfa() {
  return (
    <> 
      <Navbar />
    
      <Slider />
      <Area3/>
      <Services/>
    </>
   
  );
}

export default Anasayfa;
