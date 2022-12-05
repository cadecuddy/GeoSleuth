import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import { FaCompass, FaGlobe } from "react-icons/fa";
import { GiGlobe } from "react-icons/gi";
import Link from "next/link";

const Home = () => {
  const { data: session, status } = useSession();
  const startGameMutation = trpc.game.startGame.useMutation();
  const { data: games, isLoading } = trpc.game.getUserGames.useQuery();

  const generateGameId = async () => {
    const game = await startGameMutation.mutateAsync();
    console.log(game);
  };

  const renderNav = () => {
    if (session) {
      return <AuthedNavbar />;
    } else {
      return <UnauthedNavbar />;
    }
  };

  return (
    <main>
      {renderNav()}
      <div>
        {session ? (
          <div className="flex flex-col items-center">
            <p>
              Hello{" "}
              <span className="font-sans font-semibold text-indigo-500">
                {session.user?.name}
              </span>
            </p>
            <div className="space-x-10">
              <button
                className="rounded  bg-neutral-600 py-2 px-4 hover:bg-neutral-700 hover:outline hover:outline-1 hover:outline-neutral-500"
                // generate game id if user is logged in and id exists
                onClick={() => generateGameId()}
              >
                Generate Game Id
              </button>
            </div>
            <h1 className="">
              <span className="font-sans font-semibold text-indigo-500">
                {session.user?.name}'s Games
              </span>
              {games ? (
                games?.map((game) => (
                  <div>
                    <p>{game.id}</p>
                  </div>
                ))
              ) : (
                <div>Loading...</div>
              )}
            </h1>
          </div>
        ) : (
          <div className="sm:mx-8 sm:min-w-fit md:mx-24 lg:mx-48 xl:mx-72">
            <div className="position-relative mt-16 justify-center text-center align-middle text-8xl tracking-wide">
              <div className="position-absolute" style={{ top: "-1em" }}>
                WHERE THE
              </div>
              <span className="font-extrabold text-[#72cea6]">****</span> ARE
              YOU?
            </div>
            <div className="mt-16 justify-center text-center align-middle text-4xl tracking-wide">
              <span className="font-extrabold text-[#72cea6]">GeoSleuth</span>{" "}
              will challenge your knowledge of geography and transport you to
              exotic locations around the world.
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

const AuthedNavbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-4 sm:mx-12 sm:min-w-fit md:mx-36 lg:mx-48">
      <div className="flex items-center rounded">
        <Link href="/">
          <div className="flex items-center rounded-lg border-2 border-transparent bg-transparent px-2 py-1 shadow-xl transition-transform duration-300 ease-out hover:scale-105 hover:cursor-pointer hover:shadow-neutral-800">
            <FaCompass color="bg" className="mr-2 h-6 w-6" />
            <h1 className="text-3xl font-bold">
              Geo<span className="text-[#72cea6] ">Sleuth</span>
            </h1>
          </div>
        </Link>
      </div>
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
          onClick={() => signOut()}
        >
          SIGN OUT
        </div>
      </div>
    </nav>
  );
};

const UnauthedNavbar = () => {
  return (
    <nav className="mt-6 flex flex-col items-center justify-between px-4 py-4 sm:mx-12 sm:min-w-fit sm:flex-row md:mx-36 lg:mx-48 xl:mx-72">
      <div className="flex items-center rounded">
        <Link href="/">
          <div className="flex items-center rounded-lg border-2 border-transparent bg-transparent px-2 py-1 shadow-xl transition-transform duration-300 ease-out hover:scale-105 hover:cursor-pointer hover:shadow-neutral-800">
            <FaCompass color="bg" className="mr-2 h-6 w-6" />
            <h1 className="text-3xl font-bold">
              Geo<span className="text-[#72cea6] ">Sleuth</span>
            </h1>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 text-sm font-extrabold tracking-wide hover:cursor-pointer">
        <div
          className="rounded-md bg-[#447761] px-3 py-2 shadow-xl transition-transform duration-300 ease-out hover:scale-105 hover:shadow-md hover:shadow-neutral-900"
          onClick={() => signIn("discord")}
        >
          ALREADY HAVE AN ACCOUNT?
        </div>
      </div>
    </nav>
  );
};

export default Home;
