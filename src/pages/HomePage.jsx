import React, { useEffect, useState } from "react";
import emperor from "../assets/bg/emperor.jpg";
import skull from "../assets/bg/skull.jpg";
import water from "../assets/bg/water.jpg";
import women from "../assets/bg/women.jpg";
import menu from "../assets/svg/button2.svg";
import FadeInOut from "../components/FadeInOut";
import SalesPitch from "../components/SalesPitch";
import "./home.css";

const typeformLink = "https://szhqzh7unqa.typeform.com/to/yHAZEIBO";
const images = {
  0: {
    img: <img src={women} className="w-screen h-screen object-cover" />,
    id: "women",
    artist: "Dazzle Jam",
    link: "https://www.pexels.com/photo/three-women-wearing-turbands-1038041/",
  },
  1: {
    img: <img src={skull} className="w-screen h-screen object-cover" />,
    id: "skull",
    artist: "Chait Goli",
    link: " https://www.pexels.com/photo/multicolored-skull-decor-1918290/",
  },
  2: {
    img: <img src={water} className="w-screen h-screen object-cover" />,
    id: "water",
    artist: "master1305",
    link: "https://www.freepik.com/photos/close-up",
  },
  3: {
    img: <img src={emperor} className="w-screen h-screen object-cover" />,
    id: "emperor",
    artist: "pixabay",
    link: "https://www.pexels.com/photo/actor-adult-ancient-art-236171/",
  },
};

const HomePage = () => {
  const [selected, setSelected] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prev) => {
        console.log(prev);
        return (prev + 1) % 4;
      });
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-black">
      {Object.values(images).map((image) => (
        <FadeInOut
          key={image.id}
          show={images[selected].id === image.id}
          duration={500}
        >
          {image.img}
          <div className="absolute -left-1 bottom-2 bg-white opacity-70 rounded h-auto flex">
            <span className="pl-6 px-4 py-1.5 text-sm md:text-lg font-serif text-tan">
              by:{" "}
              <a className="capitalize" target="_blank" href={image.link}>
                {image.artist}
              </a>
            </span>
          </div>
        </FadeInOut>
      ))}
      <div
        onClick={() => setMenuOpen((prev) => !prev)}
        className="absolute right-2 bottom-2 rounded h-auto animate-bounce cursor-pointer z-10"
      >
        <div className="relative">
          <FadeInOut show={!menuOpen} duration={500}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -bottom-[1px] right-1.5 w-6 z-10 stroke-tan"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="current"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h36v24H0z" fill="none" />
              <line x1="10" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="0" y1="18" x2="16" y2="18" />
            </svg>
          </FadeInOut>
          <FadeInOut show={menuOpen} duration={500}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -bottom-[1px] right-1.5 w-6 z-10 stroke-tan"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="current"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="19" y1="7" x2="7" y2="19" />
              <line x1="7" y1="7" x2="19" y2="19" />
            </svg>
          </FadeInOut>
          <img src={menu} className="w-10 opacity-70" />
        </div>
      </div>
      <div className={`${menuOpen ? "wrapperCover" : ""} wrapper`}>
        <SalesPitch link={typeformLink} />
      </div>
    </div>
  );
};

export default HomePage;
