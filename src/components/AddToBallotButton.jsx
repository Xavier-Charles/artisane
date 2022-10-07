import React from "react";

export const AddToBallotButton = ({ isInBallot, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={isInBallot}
      className={`text-white w-full ${
        isInBallot ? "bg-cadet hover:bg-cadet" : "bg-tan hover:bg-tan"
      } border-0 py-2 px-6 focus:outline-none  rounded text-lg`}
    >
      {isInBallot ? "Already voted" : "Vote"}
    </button>
  );
};

export default AddToBallotButton;
