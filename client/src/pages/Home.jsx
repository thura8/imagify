import React from "react";
import Header from "../components/Header";
import List from "../components/List";
import Description from "../components/Description";
import Testimonials from "../components/Testimonials";
import GenerateBtn from "../components/GenerateBtn";

const Home = () => {
  return (
    <div>
      <Header />
      <List />
      <Description />
      <Testimonials />
      <GenerateBtn />
    </div>
  );
};

export default Home;
