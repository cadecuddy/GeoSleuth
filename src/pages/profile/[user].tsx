import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import Loading from "../../components/Loading";
import HeaderLayout from "../../layouts/HeaderLayout";
import { trpc } from "../../utils/trpc";

export default function UserProfile() {
  const router = useRouter();
  const { data, error, isLoading, isError } = trpc.stats.getUser.useQuery(
    {
      id: router.query.user as string,
    },
    {
      enabled: router.isReady,
      refetchOnWindowFocus: false,
      retry: false,
    }
  );

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    if (error?.data?.code === "UNAUTHORIZED") {
      return (
        <div className="text-center">
          Please sign in to view other user's profiles.
        </div>
      );
    }
    return (
      <div className="text-center text-2xl font-extrabold text-indigo-500">
        Error: {error?.message}
      </div>
    );
  }

  return (
    <>
      {data.games}
      <div className="text-center">
        <h1 className="text-4xl font-bold">{data?.name}</h1>
        <p className="text-2xl font-semibold">Games: {data?.games.length}</p>
      </div>
    </>
  );
}

UserProfile.getLayout = (page: ReactElement) => (
  <HeaderLayout>{page}</HeaderLayout>
);
