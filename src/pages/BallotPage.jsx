import { useCallback, useContext, useState } from "react";
import { ArtisteCard } from "../components/ArtisteCard";
import Navbar from "../components/Navbar";
import Preview from "../components/Preview";
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
                    Vote ballot
                  </h2>
                </div>

                <div className="mt-8">
                  <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                      {ballot.map((art) => (
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
                                <p className="ml-4">
                                  {new Intl.NumberFormat("en-US", {
                                    currency: "USD",
                                    notation: "compact",
                                    style: "currency",
                                    maximumFractionDigits: 2,
                                  }).format(art.ballotCount * 10)}
                                </p>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">
                                {art.artist}
                              </p>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                              <div className="flex justify-center">
                                <svg
                                  className="fill-current text-gray-600 w-2.5 cursor-pointer"
                                  viewBox="0 0 448 512"
                                  onClick={() =>
                                    updateBallotCount(art, "decrement")
                                  }
                                >
                                  <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                </svg>

                                <input
                                  className="mx-2 border text-center w-8"
                                  type="text"
                                  value={art.ballotCount}
                                  // disabled
                                />

                                <svg
                                  className="fill-current text-gray-600 w-2.5 cursor-pointer"
                                  viewBox="0 0 448 512"
                                  onClick={() =>
                                    updateBallotCount(art, "increment")
                                  }
                                >
                                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                </svg>
                              </div>

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
                      ))}

                      {/* <!-- More products... --> */}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>$262.00</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="flex items-center justify-center rounded-md border border-transparent bg-tan px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-tan-700"
                  >
                    Checkout
                  </a>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    or{" "}
                    <button
                      type="button"
                      className="font-medium text-tan hover:text-tan"
                    >
                      Continue Shopping<span aria-hidden="true"> &rarr;</span>
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
