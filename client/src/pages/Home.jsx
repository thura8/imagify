import React from "react";
import Header from "../components/Header";
import List from "../components/List";
import Description from "../components/Description";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Header />
      <List />
      <Description />
      <Testimonials />
    </div>
  );
};

export default Home;
