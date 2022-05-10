import React from "react";
import InputTag from "../Shared/InputTag";

const Signup = () => {
  return (
    <div className=" lg:max-w-lg mx-auto my-20">
      <h2 className="text-5xl text-center mb-10">SignUp</h2>
      <form>
        <label htmlFor="">Name</label>
        <br />
        <InputTag></InputTag>
        <label htmlFor="">Email</label>
        <br />
        <InputTag></InputTag>
        <br />
        <label htmlFor="">Password</label>
        <br />
        <InputTag></InputTag>
        <br />
        <p>Forgot password?</p>
        <button className="btn btn-accent w-full text-white mt-2">
          sign up
        </button>
        <p className="text-center mt-2">
          Have an account? <span className="text-primary">Login</span>
        </p>
      </form>
      <div class="flex flex-col w-full border-opacity-50">
        <div class="divider my-14">OR</div>
      </div>
      <button class="btn btn-outline w-full">continue with google</button>
    </div>
  );
};

export default Signup;
