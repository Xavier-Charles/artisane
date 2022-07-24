import React, { useState, createContext } from "react";
// import { useMoralis, useMoralisWeb3Api } from "react-moralis";

export const MoralisInitContext = createContext(null);
const appId = import.meta.env.VITE_MORALIS_APP_ID;
const serverUrl = import.meta.env.VITE_MORALIS_SERVER_URL;

const MoralisInitProvider = ({ children }) => {
  Moralis.start({ serverUrl, appId });

  return (
    <MoralisInitContext.Provider value="">
      {children}
    </MoralisInitContext.Provider>
  );
};
export default MoralisInitProvider;
