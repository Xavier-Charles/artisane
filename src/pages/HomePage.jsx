import { useState } from "react";
import { Artist } from "../components/Artist";
import Navbar from "../components/Navbar";
import Preview from "../components/Preview";

function Home() {
  const [openCart, setOpenCart] = useState(false)

  return (
    <>
      <div className="w-fullh-full max-w-7xl mx-auto">
        <Navbar setOpenCart={setOpenCart} />
        <div className="w-full flex flex-wrap">
          <Artist />
          <Artist />
          <Artist />
          <Artist />
          <Artist />
        </div>
      </div>
      {openCart && <Preview openCart={openCart} setOpenCart={setOpenCart} />}
    </>
  );
}

export default Home;
