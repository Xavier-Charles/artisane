import React from "react";

const BallotItem = ({ art, removeFromBallot }) => {
  return (
    <li key={art._id} className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={art.img}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#"> {art.title} </a>
            </h3>
          </div>
          <p className="mt-1 text-sm text-gray-500">{art.artist}</p>
        </div>
        <div className="flex flex-1 items-end justify-start text-sm">
          <div className="flex">
            <button
              type="button"
              className="font-medium text-tan hover:text-tan"
              onClick={() => removeFromBallot(art)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default BallotItem;
