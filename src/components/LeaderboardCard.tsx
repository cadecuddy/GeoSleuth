import Link from "next/link";
import React from "react";
import { FaTrophy } from "react-icons/fa";

type Game = {
  id: string;
  playerId: string;
  score: number;
  round: number;
  createdAt: Date;
  complete: boolean;
};

type Props = {
  user: {
    id: string;
    name: string | null;
    image: string | null;
    games: Game[];
  };
  index: number;
};

export default function LeaderboardCard({ user, index }: Props) {
  console.log(user.games);
  return (
    <div
      key={user.id}
      className="mx-auto my-2
          justify-center border-2
          border-indigo-500 p-1 transition-colors duration-300 hover:cursor-pointer hover:bg-slate-800 sm:w-[20rem] md:w-[30rem] lg:w-[40rem]"
    >
      <Link href={`/profile/${user.id}`}>
        <img
          src={user?.image ? user.image : "/geosleuth.png"}
          // render the image as a circle, varying the size based on the screen size
          className="mt-auto mr-4 ml-1 inline-block h-12 w-12
              rounded-full border-2 border-indigo-500 align-middle
              "
          onError={(e) => {
            e.currentTarget.src = "/geosleuth.png";
            e.currentTarget.className =
              "mt-auto mr-4 ml-1 inline-block rounded-full border-2 border-indigo-500 align-middle h-12 w-12";
          }}
        />
        <div className="inline-block align-middle">
          <h1
            className="
              font-bold text-yellow-500 sm:text-lg
              md:text-xl lg:text-2xl"
          >
            {user.name}
          </h1>
          <p
            className="
              font-semibold sm:text-sm md:text-base
              lg:text-lg"
          >
            Games: {user.games.length}
          </p>
        </div>
        {index < 3 && (
          <FaTrophy
            className={`inline-block justify-end p-2 align-middle text-4xl sm:float-right ${
              index == 0
                ? "text-yellow-400"
                : index == 1
                ? ""
                : "text-amber-700"
            }`}
          />
        )}
      </Link>
    </div>
  );
}
