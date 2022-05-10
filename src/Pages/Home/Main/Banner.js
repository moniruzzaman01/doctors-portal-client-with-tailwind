import React from "react";
import bannerImg from "../../../assets/images/chair.png";
import PrimaryBtn from "../../Shared/PrimaryBtn";

const Banner = () => {
  return (
    <div className="hero mb-10 lg:my-40">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img
          src={bannerImg}
          className="max-w-sm rounded-lg shadow-2xl lg:mr-5"
          alt=""
        />
        <div className="lg:ml-5">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryBtn>get started</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Banner;
