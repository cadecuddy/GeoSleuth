import React from "react";
import { signIn } from "next-auth/react";
import { FaDiscord, FaGoogle } from "react-icons/fa";
import Header from "../components/Header";
import { GetServerSideProps } from "next";
import { getServerAuthSession } from "../server/common/get-server-auth-session";

export default function login() {
  const handleSignIn = async (provider: string) => {
    try {
      await signIn(provider);
      // eslint-disable-next-line no-empty
    } catch (error) {}
  };

  return (
    <>
      <Header />
      <div className="mt-12 flex flex-col items-center justify-center py-2">
        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <h1 className="text-6xl font-bold">
            Welcome to{" "}
            <a href="/" className="text-[#72cea6]">
              GeoSleuth
            </a>
          </h1>
          <p className="mt-3 text-2xl">
            Sign in with one of our providers below.
          </p>
          <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
            <button
              onClick={() => handleSignIn("discord")}
              className="borderborder-transparent mt-6 w-96 rounded-xl bg-transparent p-6 text-left shadow-2xl shadow-slate-800 transition-transform duration-300 ease-out hover:cursor-pointer hover:bg-[#7289da] hover:text-white hover:shadow-neutral-800 focus:outline-none hover:md:scale-105"
            >
              <FaDiscord className="mr-4 inline-block h-8 w-8" />
              <span className="text-2xl font-bold">Sign in with Discord</span>
            </button>
          </div>
          <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
            <button
              onClick={() => handleSignIn("google")}
              className="borderborder-transparent mt-6 w-96 rounded-xl bg-transparent p-6 text-left shadow-2xl shadow-slate-800 transition-transform duration-300 ease-out hover:cursor-pointer hover:bg-[#ea4335] hover:text-white hover:shadow-neutral-800 focus:outline-none hover:md:scale-105"
            >
              <FaGoogle className="mr-4 inline-block h-8 w-8" />
              <span className="text-2xl font-bold">Sign in with Google</span>
            </button>
          </div>
        </main>
      </div>
    </>
  );
}

// Server-side session check and redirect if user is already logged in
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerAuthSession({
    req: context.req,
    res: context.res,
  });

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: {} };
};
