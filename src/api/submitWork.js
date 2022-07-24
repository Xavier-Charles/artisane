import React from "react";
import { useState } from "react";
// import contractABI from "./submitWorkunalABI.json";


const ConnectWallet = async () => {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Metamask not detected");
      return;
    }
    let chainId = await ethereum.request({ method: "eth_chainId" });
    console.log("Connected to chain:" + chainId);

    const polygonChainId = "0x89";

    if (chainId !== polygonChainId) {
      alert("You are not connected to the Polygon mainnet, please switch.");
      return;
    }

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

    return accounts[0];
  } catch (error) {
    console.log("Error connecting to metamask", error);
    return null;
  }
};

// Submits transaction to submit an artwork
export const useSubmitWorkAction = () => {
  const [isSubmitting, setisSubmitting] = useState(false);
  const [submitted, setsubmitted] = useState(false);
  const [hash, setHash] = useState(null);
  const [error, setError] = useState(null);
  const [newWork, setNewWork] = useState(null);
  const submitWork = (work) => {
    const artWork = { ...work };

    artWork.timestamp = moment();

    const artWorkJson = JSON.stringify(artWork);
    console.log(artWorkJson);

    if (uploadData._hash) {
      setHash(uploadData._hash);
      fetch(
        `https://api.airtable.com/v0/appismYWRXdxU1M0k/yestervote?api_key=${
          import.meta.env.VITE_AIRTABLE_API_KEY
        }`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            records: [
              {
                id: "recHi1OeDsx29XoJP",
                fields: {
                  cid: "cid",
                  value: uploadData._hash,
                },
              },
            ],
          }),
        }
      )
        .then((res) => res.json())
        .then((resp) => {
          console.log(resp);
        });
    }
  };
  return { isSubmitting, submitted, hash, error, submitWork, newWork };
};
