import React, { useEffect, useState } from "react";
import {
  handleEmailSubscribe,
  verifyEmailLink,
} from "../context/firebaseContext";

const Subscribe = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    verifyEmailLink();
  }, []);

  return (
    <div className="lg:w-1/3 md:w-1/2 w-full bg-white flex flex-col pt-16 mt-8 md:mt-0 px-5">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
        Subscribe
      </h2>
      {response?.status === "success" && (
        <span className="text-green-500">Email added sucessfully</span>
      )}
      <p className="leading-relaxed mb-5 text-gray-600">
        Post-ironic portland shabby chic echo park, banjo fashion axe
      </p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <button
        onClick={() => handleEmailSubscribe(name, email, setResponse)}
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Submit
      </button>
      <p className="text-xs text-gray-500 mt-3">
        Chicharrones blog helvetica normcore iceland tousled brook viral
        artisan.
      </p>
    </div>
  );
};

export default Subscribe;
