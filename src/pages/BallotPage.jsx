import { useCallback, useContext, useState } from "react";
import BallotItem from "../components/BallotItem";
import Navbar from "../components/Navbar";
import { BallotContext } from "../context/ballotContext";

const artWorks = [
  {
    _id: "qwertyui",
    artistFN: "Oshea",
    artistLN: "Drake",
    artist: "Izzako",
    title: "An Unbound Hatch",
    img: "https://i.imgur.com/E0T2Fhi.png",
    description:
      "Learning how to express one's self can be in immersive journey. Every choice you make and every door you enter both physical and imaginative can change the course of your life. I chose freedom, regardless of how i was feeling inside. These past months has been a blur and all I've learned from this befuddled idling was to just be me.",
  },
];

function Ballot() {
  const { ballot, updateBallot, removeFromBallot } = useContext(BallotContext);

  const updateBallotCount = useCallback((art, type) => {
    const newBallot = {
      ...art,
      ballotCount:
        type === "increment"
          ? art.ballotCount + 1
          : type === "decrement" && art.ballotCount > 1
          ? art.ballotCount - 1
          : art.ballotCount,
    };
    updateBallot(newBallot);
  }, []);

  return (
    <>
      <div className="w-fullh-full max-w-7xl mx-auto">
        <Navbar ballotCount={ballot.length} />
        {ballot.length > 0 ? (
          <div className="pointer-events-auto w-full flex justify-center">
            <div className="flex flex-col w-full max-w-xl px-2">
              <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2
                    className="text-lg font-medium text-gray-900"
                    id="slide-over-title"
                  >
                    Votes
                  </h2>
                </div>

                <div className="mt-8">
                  <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                      {ballot.map((art) => (
                        <BallotItem art={art} />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="mt-6">
                  <a
                    href="#"
                    className="flex items-center justify-center rounded-md border border-transparent bg-tan px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-tan-700"
                  >
                    Submit
                  </a>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    <button
                      type="button"
                      className="font-medium text-tan hover:text-tan"
                    >
                      Continue Viewing<span className="pt-1" aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h1 className="mt-20 text-center font-serif text-lg md:text-2xl">
            Your ballot is empty
          </h1>
        )}
      </div>
    </>
  );
}

export default Ballot;
