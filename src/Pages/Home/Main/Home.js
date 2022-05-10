import React from "react";
import HomeAppointment from "../HomeAppointment";
import Service from "../Service/Service";
import Banner from "./Banner";
import Info from "./Info";

const Home = () => {
  return (
    <div className="lg:px-10">
      <Banner />
      <Info />
      <Service />
      <HomeAppointment />
    </div>
  );
};

export default Home;
