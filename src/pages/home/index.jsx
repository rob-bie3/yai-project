import React from "react";
import Hero from "./sections/Hero";
import AboutInnovator from "./sections/aboutInnovator";
import AboutProduct from "./sections/AboutProduct";
import Showcase from "./sections/Showcase";


const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutProduct/>
      <AboutInnovator/>
      <Showcase/>
    </div>
  );
};

export default Home;
