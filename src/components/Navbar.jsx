import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/png/logo2.png";
import ballot from "../assets/png/ballot.png";
import { ReactComponent as CartSVG } from "../assets/svg/cart.svg";
import { Disclosure } from "@headlessui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ConnectWallet } from "./connectWallet"; // TODO: Customize connect wallet
import NavProfile from "./NavProfile";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Navbar = ({ ballotCount, noballot }) => {
  const navigate = useNavigate();

  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
              <div className="flex-1 flex items-center sm:items-stretch justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <Link
                    to="/"
                    className="cursor-pointer flex title-font font-medium items-center text-gray-900 rounded-sm"
                  >
                    <div className="flex justify-center items-center h-[50px]">
                      <img
                        className="w-[41px] h-[31px]"
                        src={logo}
                        alt="logo"
                      />
                    </div>
                    <span className="text-xl font-serif">Artisane</span>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6"></div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <NavProfile />
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
