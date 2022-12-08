import React from "react";
import { FaGithub, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="mt-16 flex flex-col items-center justify-center px-4 py-4 sm:mx-12 sm:min-w-fit sm:flex-row md:mx-36 lg:mx-48 xl:mx-72">
        <div className="flex items-center rounded">
          <div>
            <svg className="h-8 w-8" />
            made with{" "}
            <FaHeart className="inline-block h-4 w-4 text-[#ff2525]" /> by{" "}
            <a
              className="font-bold hover:cursor-pointer hover:text-[#72cea6]"
              href="https://github.com/cadecuddy"
              target={"_blank"}
            >
              cade cuddy <FaGithub className="inline-block h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
