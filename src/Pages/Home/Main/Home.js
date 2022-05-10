import React from "react";
import Service from "../Service/Service";
import Banner from "./Banner";
import Info from "./Info";

const Home = () => {
  return (
    <div className="lg:px-10">
      <Banner />
      <Info />
      <Service />
    </div>
  );
};

export default Home;
