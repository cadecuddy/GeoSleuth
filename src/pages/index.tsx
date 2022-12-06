import { useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import UserHome from "../components/UserHome";

const Home = () => {
  const { data: session, status } = useSession();
  // const { data: games, isLoading } = trpc.game.getUserGames.useQuery();

  return (
    <>
      <div>
        {status === "loading" && <div className="text-center">Loading...</div>}
        {session && <UserHome session={session} />}
        {!session && status !== "loading" && <Welcome />}
      </div>
    </>
  );
};

export default Home;
