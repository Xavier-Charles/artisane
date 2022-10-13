import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./assets/css/artisan.css";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import BallotContextProvider from "./context/ballotContext";
import MoralisInitProvider from "./context/MoralisInitContext";
import WalletProvider from "./provider/WalletProvider";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <WalletProvider>
        <BallotContextProvider>
          <MoralisInitProvider>
            <Router />
          </MoralisInitProvider>
        </BallotContextProvider>
      </WalletProvider>
    </BrowserRouter>
  </React.StrictMode>
);