import React from "react";
import AddToBallotButton from "./AddToBallotButton";

const Preview = ({ selectedWork, closePreview, isInBallot, addToBallot }) => {
  const { artistFN, artistLN, artist, title, img, description } = selectedWork;
  return (
    <div
      className="relative z-10"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
      onClick={closePreview}
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
            <div className="pointer-events-auto w-screen max-w-3xl">
              <div
                onClick={(e) => e.stopPropagation()}
                className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
              >
                <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2
                      className="text-lg font-medium text-gray-900"
                      id="slide-over-title"
                    >
                      Preview
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                        onClick={closePreview}
                      >
                        <span className="sr-only">Close panel</span>
                        {/* <!-- Heroicon name: outline/x --> */}
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <img className="w-full" src={img} />
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                  <div className="flex justify-start text-base font-medium text-gray-900">
                    <p>{title}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    by {artistFN} {artistLN} ({artist})
                  </p>

                  <div className="flex mt-10 justify-start text-base font-medium text-gray-900">
                    <p>Description</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">{description}</p>
                  <div className="mt-6">
                    <AddToBallotButton
                      onClick={() => addToBallot(selectedWork)}
                      isInBallot={isInBallot}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
