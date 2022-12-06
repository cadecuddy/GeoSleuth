import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FaCompass } from "react-icons/fa";

const Header = () => {
  const { data: session } = useSession();

  // Debounced sign in button
  const handleSignIn = async (e: any) => {
    e.preventDefault();
    try {
      await signIn("discord");
    } catch (error) {}
  };

  // Debounced sign out button
  const handleSignOut = async (e: any) => {
    e.preventDefault();
    try {
      await signOut();
    } catch (error) {}
  };

  return (
    <nav className="mt-6 flex flex-col items-center justify-between px-4 py-4 sm:mx-12 sm:min-w-fit sm:flex-row md:mx-36 lg:mx-48 xl:mx-72">
      <div className="flex items-center rounded">
        <Link href="/">
          <div className="flex items-center rounded-lg border-2 border-transparent bg-transparent px-2 py-1 shadow-xl transition-transform duration-300 ease-out hover:cursor-pointer hover:shadow-neutral-800 hover:md:scale-105">
            <FaCompass color="bg" className="mr-2 h-6 w-6" />
            <h1 className="text-3xl font-bold">
              Geo<span className="text-[#72cea6] ">Sleuth</span>
            </h1>
          </div>
        </Link>
      </div>
      {session ? (
        <div className="flex items-center space-x-4 text-lg font-bold tracking-wide">
          <Link href="/about" passHref>
            <div className="rounded-md bg-transparent px-3 py-2 transition-transform duration-300 ease-out hover:scale-105 hover:shadow-md hover:shadow-neutral-900">
              ABOUT
            </div>
          </Link>
          <Link href="/leaderboard" passHref>
            <div className="rounded-md bg-transparent px-3 py-2 transition-transform duration-300 ease-out hover:scale-105 hover:shadow-md hover:shadow-neutral-900">
              LEADERBOARD
            </div>
          </Link>
          <div
            className="rounded-md bg-transparent px-3 py-2 transition-transform duration-300 ease-out hover:scale-105 hover:cursor-pointer hover:bg-red-900 hover:shadow-md hover:shadow-neutral-900"
            onClick={handleSignOut}
          >
            SIGN OUT
          </div>
        </div>
      ) : (
        <div className="flex items-center space-x-4 text-sm font-extrabold tracking-wide hover:cursor-pointer">
          <div
            className="rounded-md bg-[#447761] px-3 py-2 shadow-xl transition-transform duration-300 ease-out hover:scale-105 hover:shadow-md hover:shadow-neutral-900"
            onClick={handleSignIn}
          >
            ALREADY HAVE AN ACCOUNT?
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
