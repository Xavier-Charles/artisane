import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./assets/css/artisan.css";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./context/cartContext";
import MoralisInitProvider from "./context/MoralisInitContext";
import WalletProvider from "./provider/WalletProvider";
// import UserContextProvider from "./context/UserContext";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <WalletProvider>
        <CartContextProvider>
          <MoralisInitProvider>
            {/* <UserContextProvider> */}
            <Router />
            {/* </UserContextProvider> */}
          </MoralisInitProvider>
        </CartContextProvider>
      </WalletProvider>
    </BrowserRouter>
  </React.StrictMode>
);