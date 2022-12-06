import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <>
      <footer className="mt-16 flex flex-col items-center justify-center px-4 py-4 sm:mx-12 sm:min-w-fit sm:flex-row md:mx-36 lg:mx-48 xl:mx-72">
        <div className="flex items-center rounded">
          <div>
            <svg className="h-8 w-8" />
            made with ♥ by{" "}
            <a
              className="font-bold hover:cursor-pointer hover:text-[#72cea6]"
              href="https://github.com/cadecuddy"
              target={"_blank"}
            >
              cade cuddy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
