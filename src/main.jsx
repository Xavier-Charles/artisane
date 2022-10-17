import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./assets/css/artisan.css";
import Router from "./Router";
import BallotContextProvider from "./context/ballotContext";
import WalletProvider from "./provider/WalletProvider";
import UserContextProvider from "./context/userContext";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
  <React.StrictMode>
    <WalletProvider>
      <BallotContextProvider>
        <UserContextProvider>
          <Router />
        </UserContextProvider>
      </BallotContextProvider>
    </WalletProvider>
  </React.StrictMode>
);