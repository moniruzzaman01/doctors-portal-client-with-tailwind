import React from "react";
import PrimaryBtn from "../Shared/PrimaryBtn";
import contactBg from "../../assets/images/appointment.png";

const Contact = () => {
  return (
    <div
      style={{
        background: `url(${contactBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className=" text-center py-24"
    >
      <h4 className="text-secondary text-xl font-bold">Contact Us</h4>
      <h2 className="text-5xl text-white">Stay connected with us</h2>
      <form
        className="mt-16
      "
        action=""
      >
        <input
          type="text"
          placeholder="Type here"
          className="input mb-5 input-bordered lg:w-full w-11/12 max-w-lg"
        />
        <br />
        <input
          type="text"
          placeholder="Type here"
          className="input mb-5 input-bordered lg:w-full w-11/12  max-w-lg"
        />
        <br />
        <textarea
          className="textarea mb-5 textarea-bordered  lg:w-full w-11/12 max-w-lg"
          placeholder="Bio"
        ></textarea>
        <br />
        <PrimaryBtn>Submit</PrimaryBtn>
      </form>
    </div>
  );
};

export default Contact;
