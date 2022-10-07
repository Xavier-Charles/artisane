import React, { useState, createContext, useEffect } from "react";

export const BallotContext = createContext(null);

const BallotContextProvider = ({ children }) => {
  const [ballot, setBallot] = useState([]);

  const LS_CART = "ballot";

  const addToBallot = (art) => {
    setBallot((prev) => {
      if (prev.find((a) => a._id === art._id)) return prev;
      const newBallot = [...prev, { ...art, ballotCount: 1 }];

      localStorage.setItem(LS_CART, JSON.stringify(newBallot));
      return newBallot;
    });
  };

  const updateBallot = (art) => {
    setBallot((prev) => {
      const oldArt = prev.find((a) => a._id === art._id);
      if (!oldArt) return prev;
      const newBallot = [...prev.filter((a) => a._id !== art._id), art];
      localStorage.setItem(LS_CART, JSON.stringify(newBallot));
      return newBallot;
    });
  };

  const removeFromBallot = (art) => {
    setBallot((prev) => {
      const newBallot = prev.filter((a) => a._id !== art._id);
      localStorage.setItem(LS_CART, JSON.stringify(newBallot));
      return newBallot;
    });
  };

  useEffect(() => {
    (async () => {
      const localBallot = JSON.parse(localStorage.getItem(LS_CART) || "[]");
      if (localBallot.length > 0) setBallot([...localBallot]);
    })();
  }, []);

  return (
    <BallotContext.Provider
      value={{
        ballot,
        addToBallot,
        removeFromBallot,
        updateBallot,
      }}
    >
      {children}
    </BallotContext.Provider>
  );
};
export default BallotContextProvider;
