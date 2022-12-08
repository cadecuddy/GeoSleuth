import { useSession } from "next-auth/react";
import Welcome from "../components/Welcome";
import UserHome from "../components/UserHome";
import Loading from "../components/Loading";
import Header from "../components/Header";

const Home = () => {
  const { data: session, status } = useSession();

  return (
    <>
      <div>
        <Header />
        {status === "loading" && <Loading />}
        {session && <UserHome session={session} />}
        {!session && status !== "loading" && <Welcome />}
      </div>
    </>
  );
};

export default Home;
