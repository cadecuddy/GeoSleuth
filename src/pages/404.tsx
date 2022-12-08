import Link from "next/link";
import React from "react";

export default function Custom404() {
  // 404 in the middle of the screen horizontally and vertically
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white">
      <h1 className="font-sans text-8xl font-extrabold text-indigo-500 drop-shadow-xl">
        404 - Page Not Found
      </h1>
      <img
        className="mt-12 flex h-[300px] w-[500px] items-center justify-center rounded-md shadow-slate-800 drop-shadow-2xl transition-transform duration-300 ease-out hover:cursor-pointer hover:shadow-neutral-800 focus:outline-none hover:md:scale-105"
        src="https://picsum.photos/id/237/200/300"
        alt="404"
      />
      <Link href="/">
        <button className="mt-12 flex h-[50px] w-[200px] items-center justify-center rounded-md bg-slate-800 text-neutral-100 shadow-slate-800 drop-shadow-2xl transition-transform duration-300 ease-out hover:cursor-pointer hover:shadow-neutral-800 focus:outline-none hover:md:scale-105">
          Go Back
        </button>
      </Link>
    </div>
  );
}
