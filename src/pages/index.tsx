import { useSession } from "next-auth/react";
import Welcome from "../components/Welcome";
import UserHome from "../components/UserHome";
import Loading from "../components/Loading";
import { ReactElement, Suspense } from "react";
import HeaderLayout from "../layouts/HeaderLayout";

const Home = () => {
  const { data: session, status } = useSession();

  return (
    <>
      <div>
        {status === "loading" && <Loading />}
        {session && <UserHome session={session} />}
        {!session && status !== "loading" && <Welcome />}
      </div>
    </>
  );
};

export default Home;

Home.getLayout = (page: ReactElement) => (
  <HeaderLayout>
    <Suspense fallback={<Loading />}>{page}</Suspense>
  </HeaderLayout>
);
