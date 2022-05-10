import React from "react";
import chair from "../../assets/images/chair.png";
import AvailableAppointment from "./AvailableAppointment";

const Appoinment = () => {
  const recentAppontment = [
    {
      name: "Teeth Orthodontics",
      time: "8:00 am - 9:00 am",
      spaces: "10 spaces available",
    },
    {
      name: "Cosmetic Dentistry",
      time: "8:00 am - 9:00 am",
      spaces: "10 spaces available",
    },
    {
      name: "Teeth Cleaning",
      time: "8:00 am - 9:00 am",
      spaces: "10 spaces available",
    },
    {
      name: "Teeth Orthodontics",
      time: "8:00 am - 9:00 am",
      spaces: "10 spaces available",
    },
    {
      name: "Teeth Orthodontics",
      time: "8:00 am - 9:00 am",
      spaces: "10 spaces available",
    },
    {
      name: "Teeth Orthodontics",
      time: "8:00 am - 9:00 am",
      spaces: "10 spaces available",
    },
  ];
  return (
    <section>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="my-20">
        <h4 className="text-primary text-center text-3xl mb-20">
          Available Appointments on April 30,2022
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:mx-20 mx-5">
          {recentAppontment.map((reApp, key) => (
            <AvailableAppointment
              key={key}
              name={reApp.name}
              time={reApp.time}
              spaces={reApp.spaces}
            ></AvailableAppointment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Appoinment;
