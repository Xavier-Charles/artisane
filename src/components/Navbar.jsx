import React, { Fragment, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/png/logo2.png";
import { Disclosure } from "@headlessui/react";

const navigation = [
  { name: "Create A Tribunal", href: "/tribunal/new", current: false },
  { name: "All Tribunals", href: "/#all-tribunals", current: false },
];

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
                    <span className="text-xl font-serif">Artisan</span>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6"></div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {!noballot && (
                  <button
                    onClick={() => navigate("/ballot")}
                    className="font-sans block lg:inline-block lg:ml-6 align-middle text-black hover:text-gray-700"
                  >
                    <a role="button" className="relative flex">
                      <svg
                        className="flex-1 w-6 h-6 fill-tan"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                      </svg>
                      {ballotCount ? (
                        <span className="absolute left-3 bottom-2.5 rounded-full bg-red-600 top right px-1 pt-[0.5px] m-0 text-white font-mono text-xs  leading-tight text-center">
                          {ballotCount}
                        </span>
                      ) : (
                        <></>
                      )}
                    </a>
                  </button>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
