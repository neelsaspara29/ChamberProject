import React from "react";
import Courusel from "../../Components/Homepage/Courusel";
import Events from "../../Components/Homepage/Events";
import Gallery from "../../Components/Homepage/Gallery";
import Membership from "../../Components/Homepage/Membership";
import Services from "../../Components/Homepage/Services";
import Team from "../../Components/Homepage/Team";

function index() {
  return (
    <>
      <Courusel />
      <Events />
      <Gallery />
      <Membership />
      <Services />
      </>
  );
}

export default index;
