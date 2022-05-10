import React from "react";
import { Link } from "react-router-dom";
import footerBg from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      style={{
        background: `url(${footerBg})`,
      }}
      class="p-10 bg-contain w-full"
    >
      <div className="footer justify-around">
        <div>
          <span class="footer-title uppercase  text-lg">Services</span>
          <Link to="" class="link link-hover">
            Emergency Checkup
          </Link>
          <Link to="" class="link link-hover">
            Monthly Checkup
          </Link>
          <Link to="" class="link link-hover">
            Weekly Checkup
          </Link>
          <Link to="" class="link link-hover">
            Deep Checkup
          </Link>
        </div>
        <div>
          <span class="footer-title text-lg">Oral Health</span>
          <Link to="" class="link link-hover">
            "Flouride Treatment"
          </Link>
          <Link to="" class="link link-hover">
            Cavity Filling
          </Link>
          <Link to="" class="link link-hover">
            Teeth Whitening
          </Link>
        </div>
        <div>
          <span class="footer-title text-lg">Our Address</span>
          <Link to="" class="link link-hover">
            New York - 101010
          </Link>
        </div>
      </div>
      <p className="text-center mt-10">Copyright@2022</p>
    </footer>
  );
};

export default Footer;
