import React from "react";
import facebook from "../icons/facebook.svg";
import instagram from "../icons/instagram.svg";
import twitter from "../icons/twitter.svg";
import youtube from "../icons/youtube.svg";

const Footer = () => {
  return (
    <div className="w-full mt-8 flex flex-col items-center font-dmSans">
      <div className="w-full flex flex-row justify-center my-2 gap-x-10">
        <img src={facebook} alt="Facebook icon" className="" />
        <img src={instagram} alt="Instagram icon" className="" />
        <img src={twitter} alt="Twitter icon" className="" />
        <img src={youtube} alt="YouTube icon" className="" />
      </div>
      <div className="flex flex-row my-4 gap-x-5 text-sm font-semibold text-gray-700">
        <p>Conditions of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>
      <p className="mt-3 text-gray-600">
        &copy; {new Date().getFullYear()} MovieBox by EmmyCodes
      </p>
    </div>
  );
};

export default Footer;
