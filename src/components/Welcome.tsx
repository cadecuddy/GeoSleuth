import React, { useState } from "react";
import { FaMapSigns } from "react-icons/fa";
import Footer from "./Footer";
import Header from "./Header";

export default function Welcome() {
  const [revealedLetters, setRevealedLetters] = useState<
    (string | undefined)[]
  >([undefined, undefined, undefined, undefined]);

  const handleMouseEnter = (index: number) => {
    // only update revealed letters if the current letter is not already revealed
    if (revealedLetters[index] === undefined) {
      // update revealed letters at the specified index
      setRevealedLetters((prevRevealedLetters) => {
        const newRevealedLetters = [...prevRevealedLetters];
        newRevealedLetters[index] = "HECK"[index];
        return newRevealedLetters;
      });
    }
  };

  const handleMouseLeave = (index: number) => {
    if (revealedLetters[index] !== undefined) {
      setRevealedLetters((prevRevealedLetters) => {
        const newRevealedLetters = [...prevRevealedLetters];
        newRevealedLetters[index] = undefined;
        return newRevealedLetters;
      });
    }
  };

  return (
    <>
      <Header />
      <div className="sm:mx-8 sm:min-w-fit md:mx-24 lg:mx-48 xl:mx-72">
        <div className="position-relative mt-16 justify-center text-center align-middle text-8xl tracking-wide">
          <div className="position-absolute" style={{ top: "-1em" }}>
            WHERE THE
          </div>
          <span className="font-extrabold text-[#72cea6]">
            {revealedLetters.map((letter, index) => (
              <span
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="cursor-pointer"
              >
                {letter === undefined ? "*" : letter}
              </span>
            ))}
          </span>{" "}
          ARE YOU?
        </div>
        <div className="mt-16 justify-center text-center align-middle text-4xl leading-relaxed tracking-wide">
          <span className="font-extrabold text-[#72cea6]">GeoSleuth</span> will
          <span className="block md:inline"> challenge your knowledge of </span>
          <span className="block md:inline">
            geography and transport you to exotic
          </span>
          <span className="block md:inline"> locations around the world.</span>
        </div>

        <div className="mt-12 flex flex-row rounded-lg border-2 border-transparent bg-transparent p-12 transition duration-500 ease-out hover:shadow-xl hover:shadow-neutral-800 hover:md:scale-105">
          <div className="w-1/2 -rotate-6">
            <FaMapSigns className="m-auto h-32 w-32 transition duration-300 ease-out hover:rotate-12 hover:scale-105 hover:cursor-pointer hover:text-[#72cea6]" />
          </div>
          <div className="m-auto ml-10 w-1/2">
            <h3 className="text-2xl font-bold tracking-wide text-[#72cea6]">
              FIVE ROUNDS
            </h3>
            <p className="text-lg">
              Each game features 5 rounds of challenging geolocation. Are you
              ready to see the world?
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-row rounded-lg border-2 border-transparent bg-transparent p-12 transition duration-500 ease-out hover:shadow-xl hover:shadow-neutral-800 hover:md:scale-105">
          <div className="m-auto ml-10 w-1/2">
            <h3 className="text-2xl font-bold tracking-wide text-[#72cea6]">
              EASY TO PLAY
            </h3>
            <p className="text-lg leading-relaxed">
              {"-->"} Sign in
              <br /> {"-->"} Create Google maps API key
              <br /> {"-->"} Start playing.
            </p>
          </div>
          <div className="w-1/2">
            <svg className="w-64" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
