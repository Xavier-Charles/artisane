import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../context/UserContext";
import useClickOutside from "../hooks/useClickOutside";

const NavProfile = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { user, login, logout } = useContext(AuthContext);

  const clickRef = useRef();
  useClickOutside(clickRef, () => showMenu && setShowMenu(false));

  return (
    <div ref={clickRef} className="relative ml-3">
      <div>
        <button
          type="button"
          className="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          id="user-menu-button"
          aria-expanded="false"
          aria-haspopup="true"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <span className="sr-only">Open user menu</span>
          {user && (
            <span className="self-center font-medium px-2">
              {user?.displayName}
            </span>
          )}
          <img
            className={`h-8 w-8 ${user ? "rounded-full" : ""}`}
            src={user?.photoURL || "https://i.imgur.com/ynnoGKt.png"}
            alt=""
          />
        </button>
      </div>

      {/* <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> 
      */}

      {showMenu && (
        <div
          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabIndex="-1"
        >
          {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
          <a
            href="/top-ten"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
            tabIndex="-1"
            id="user-menu-item-0"
          >
            Your Top 10
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
            tabIndex="-1"
            id="user-menu-item-2"
            onClick={() => (user ? logout() : login())}
          >
            {user ? (
              "Sign out"
            ) : (
              <div className="flex items-center">
                <span className="mr-2">Sign in with Twitter</span>
                <svg
                  className="h-6 w-6 fill-blue-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </div>
            )}
          </a>
        </div>
      )}
    </div>
  );
};

export default NavProfile;
