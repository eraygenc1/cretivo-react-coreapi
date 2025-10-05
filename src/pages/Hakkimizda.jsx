import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Breadcrumb from "../Breadcrumb";
import Area3 from "../Area3";
import References from "../References";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Footer from "../Footer";
function Hakkimizda() {
  useEffect(() => {
    window.scrollTo(0, 0); // route geçişinde sayfa en üste gelsin
  }, []);

  return (
    <>
      <Navbar />
      <Breadcrumb />
      <Area3 />
      <References />
      <Footer/>
    </>
  );
}

export default Hakkimizda;
