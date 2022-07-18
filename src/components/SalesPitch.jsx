import React from "react";
import logo from "../assets/png/logo-black.png";
import "./signmeUp.css"

const SalesPitch = ({ link }) => {
  return (
    <section>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className=" text-3xl lg:text-5xl xl:text-7xl font-sans mb-4 font-bold text-[#ffffef]">
            Create Digital Art for a chance to win{" "}
            <span className="font-sans">$1000</span>
          </h1>
          <p className="mb-8 leading-relaxed text-gold font-mono">
            A 4-week Digital Art competition for the best
          </p>
          <div className="flex justify-center">
            <a
              href={link}
              target="_blank"
              className="button-52 text-[#ffffef] font-mono"
              // className="inline-flex cursor-pointer text-white hover:bg-tan bg-brown border-0 pb-2 pt-1.5 px-6 focus:outline-none rounded-md text-lg"
            >
              I'm in!
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={logo}
          />
        </div>
      </div>
    </section>
  );
};

export default SalesPitch;
