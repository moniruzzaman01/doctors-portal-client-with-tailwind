import React from "react";
import Contact from "../Contact";
import HomeAppointment from "../HomeAppointment";
import Service from "../Service/Service";
import Testimonial from "../Testimonial/Testimonial";
import Banner from "./Banner";
import Info from "./Info";

const Home = () => {
  return (
    <div className="lg:px-10">
      <Banner />
      <Info />
      <Service />
      <HomeAppointment />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
