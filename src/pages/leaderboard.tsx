import React, { ReactElement } from "react";
import Footer from "../components/Footer";
import LeaderboardCard from "../components/LeaderboardCard";
import Loading from "../components/Loading";
import HeaderLayout from "../layouts/HeaderLayout";
import { trpc } from "../utils/trpc";

export default function leaderboard() {
  const { data, error, isLoading, isError } =
    trpc.stats.getLeaderboard.useQuery(undefined, {
      refetchOnWindowFocus: false,
      retry: false,
    });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    if (error?.data?.code === "UNAUTHORIZED") {
      return (
        <div className="text-center">
          Please sign in to view the leaderboard.
        </div>
      );
    }
    return (
      <div className="text-center text-4xl font-extrabold text-indigo-500">
        Error: {error?.message}
      </div>
    );
  }

  return (
    <>
      <h1 className="mb-8 text-center font-extrabold text-[#72cea6] sm:text-2xl md:text-3xl lg:text-4xl">
        Leaderboard
      </h1>
      {data?.map((user, index) => (
        <LeaderboardCard user={user} index={index} />
      ))}
    </>
  );
}

leaderboard.getLayout = (page: ReactElement) => (
  <div>
    <HeaderLayout>{page}</HeaderLayout>
    <div
      className="
      fixed bottom-0
      flex
      w-full
      items-center
      justify-center
      text-sm
      font-bold
      text-neutral-100
      "
    >
      <Footer />
    </div>
  </div>
);
