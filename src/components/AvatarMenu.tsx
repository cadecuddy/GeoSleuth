import { Menu, Transition } from "@headlessui/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { FaSignOutAlt, FaTrophy, FaUserAlt } from "react-icons/fa";

export default function AvatarMenu() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      await signOut();
      // eslint-disable-next-line no-empty
    } catch (error) {}
  };

  return (
    <>
      {session && (
        <div className="flex items-center space-x-4 text-lg font-bold tracking-wide">
          <div>
            <Menu as="div" className="text-md relative inline-block text-left">
              <div>
                <Menu.Button
                  className="border-1 w-52 rounded-xl border-neutral-600 bg-[#447761] bg-transparent px-3 py-2 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-slate-700 hover:shadow-lg hover:ring-1 hover:ring-slate-800"
                  onClick={handleClick}
                >
                  {session.user?.image ? (
                    <img
                      src={session.user.image}
                      width={32}
                      height={32}
                      className="float-left mr-3 inline-block rounded-full drop-shadow-lg"
                    />
                  ) : (
                    <FaUserAlt className="mr-2 h-8 w-8" />
                  )}
                  <div className="float-right inline-block">
                    <div className="inline-block align-middle text-neutral-50 drop-shadow-lg">
                      {
                        // show the first 10 characters of the user's name}
                        session.user?.name?.slice(0, 12)
                      }
                    </div>
                    <div className="inline-block align-middle">
                      <svg
                        className="ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </Menu.Button>
                <Transition
                  show={isOpen}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="bg-slate-70 absolute right-0 mt-1 w-full origin-top-right divide-y divide-x-0 rounded-l-md rounded-r-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <Link href={"/profile/" + session.user?.id}>
                            <button
                              className={`${
                                active ? "bg-neutral-600" : ""
                              } text-md group flex w-full items-center rounded-md px-2 py-2 text-right text-neutral-300 transition-colors duration-75 ease-in-out  hover:bg-slate-800 hover:ring-red-700`}
                            >
                              <FaUserAlt className="mr-4 h-4 w-4" />
                              Profile
                            </button>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link href="/leaderboard">
                            <button
                              className={`${
                                active ? "bg-neutral-600" : ""
                              } text-md group flex w-full items-center rounded-md px-2 py-2 text-right text-neutral-300 transition-colors duration-75 ease-in-out hover:bg-slate-800 hover:ring-red-700`}
                            >
                              <FaTrophy className="mr-4 h-4 w-4" />
                              Leaderboard
                            </button>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? "bg-neutral-600" : ""
                            } text-md group flex w-full items-center rounded-md px-2 py-2 text-right text-neutral-300 transition-colors duration-75 ease-in-out hover:bg-red-700 hover:ring-red-700`}
                            onClick={handleSignOut}
                          >
                            <FaSignOutAlt className="mr-4 h-4 w-4" />
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </div>
            </Menu>
          </div>
        </div>
      )}
    </>
  );
}
