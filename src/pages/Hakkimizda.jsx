import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Breadcrumb from "../Breadcrumb";
import Navbar from "../Navbar";
import Area3 from "../area3";

import References from "../References";
import 'bootstrap/dist/css/bootstrap.min.css';

function Hakkimizda() {
  
  return (
    <div>
      <Navbar/>
      <Breadcrumb/>
      <Area3/>
      <References/>
    </div>
  );
}

export default Hakkimizda;
