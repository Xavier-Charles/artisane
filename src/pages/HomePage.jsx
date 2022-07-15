import { useContext, useState } from "react";
import { ArtisteCard } from "../components/ArtisteCard";
import Navbar from "../components/Navbar";
import Preview from "../components/Preview";
import { CartContext } from "../context/cartContext";

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

function Home() {
  const { cart, addToCart } = useContext(CartContext);

  const [selectedWork, setSelectedWork] = useState(null);

  return (
    <>
      <div className="w-fullh-full max-w-7xl mx-auto">
        <Navbar cartCount={cart.length} />
        <div className="w-full flex flex-wrap">
          {artWorks.map((a) => (
            <ArtisteCard
              key={a._id}
              setSelectedWork={setSelectedWork}
              artWork={a}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
      {selectedWork && (
        <Preview
          selectedWork={selectedWork}
          setSelectedWork={setSelectedWork}
          addToCart={addToCart}
        />
      )}
    </>
  );
}

export default Home;
