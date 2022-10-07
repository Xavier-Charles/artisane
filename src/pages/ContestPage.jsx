import { useContext, useState } from "react";
import { artWorks } from "../api/mocks";
import { ArtisteCard } from "../components/ArtisteCard";
import Navbar from "../components/Navbar";
import Preview from "../components/Preview";
import { BallotContext } from "../context/ballotContext";



function Contest() {
  const { ballot, addToBallot } = useContext(BallotContext);

  const [selectedWork, setSelectedWork] = useState(null);

  return (
    <>
      <div className="w-fullh-full max-w-7xl mx-auto">
        <Navbar ballotCount={ballot.length} />
        <div className="w-full flex flex-wrap">
          {artWorks.map((a) => (
            <ArtisteCard
              key={a._id}
              setSelectedWork={setSelectedWork}
              artWork={a}
              addToBallot={addToBallot}
              isInBallot={ballot.find((art) => a._id === art._id)}
            />
          ))}
        </div>
      </div>
      {selectedWork && (
        <Preview
          selectedWork={selectedWork}
          addToBallot={addToBallot}
          isInBallot={ballot.find((art) => selectedWork._id === art._id)}
          closePreview={() => setSelectedWork(null)}
        />
      )}
    </>
  );
}

export default Contest;
