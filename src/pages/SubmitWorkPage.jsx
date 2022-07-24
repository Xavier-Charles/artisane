import React from "react";
import Navbar from "../components/Navbar";
import SubmitWork from "../components/SubmitWork";

const SubmitWorkPage = () => {
  return (
    <>
      <Navbar nocart/>
      <div className="w-fullh-full max-w-7xl mt-10 md:mt-20 mx-auto">
        <SubmitWork />
      </div>
    </>
  );
};

export default SubmitWorkPage;
