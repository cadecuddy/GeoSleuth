import { GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
import React from "react";
import Loading from "../components/Loading";
import { getServerAuthSession } from "../server/common/get-server-auth-session";

export default function leaderboard() {
  const { data: session } = useSession();

  return (
    <>
      {!session && <Loading />}
      {session && (
        <div>
          <h1>Leaderboard</h1>
        </div>
      )}
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const session = await getServerAuthSession({
//     req: context.req,
//     res: context.res,
//   });

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   return { props: {} };
// };
