import React from "react";
import logo from "../assets/png/logo-black.png";
import "./signmeUp.css"

const SalesPitch = ({ link }) => {
  return (
    <section>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className=" text-3xl lg:text-5xl xl:text-7xl font-sans mb-12 font-bold text-[#ffffef]">
            Create Digital Art for a chance to win{" "}
            <span className="font-sans text-[#ddffdd]">$1000</span>
          </h1>
          <p className="mb-8 leading-relaxed text-gold font-mono max-w-xl">
            Artisane is a Digital art competition for the undiscovered digital
            artists. If you have the skills let the world see your work.
          </p>
          <p className="mb-8 leading-relaxed text-gold font-mono max-w-xl">
            Top artists will join our
            genesis NFT collection. Submissions open 20th of January, 2023. 
          </p>
          <div className="flex justify-center">
            <a
              href={link}
              target="_blank"
              className="button-52 text-[#ffffef] font-mono"
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
