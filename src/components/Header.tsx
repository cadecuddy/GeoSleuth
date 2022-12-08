import { useSession } from "next-auth/react";
import Link from "next/link";
import { FaCompass } from "react-icons/fa";
import AvatarMenu from "./AvatarMenu";

const Header = () => {
  const { data: session, status } = useSession();

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
      {session && session.user && <AvatarMenu />}
      {!session && status !== "loading" && (
        <div className="flex items-center space-x-4 text-sm font-extrabold tracking-wide hover:cursor-pointer">
          <Link href="/login">
            <div className="rounded-md bg-[#447761] px-3 py-2 shadow-xl transition-transform duration-300 ease-out hover:scale-105 hover:shadow-md hover:shadow-neutral-900">
              SIGN IN TO GET STARTED
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
