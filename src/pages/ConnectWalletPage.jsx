import React from "react";
import { ConnectWallet } from "../components/connectWallet";
import Navbar from "../components/Navbar";

const ConnectWalletPage = () => {
  return (
    <>
      <Navbar noballot />
      <div className="w-fullh-full max-w-7xl mt-10 md:mt-20 mx-auto">
        <ConnectWallet />
      </div>
    </>
  );
};

export default ConnectWalletPage;
