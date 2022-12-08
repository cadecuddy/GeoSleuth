import { Session } from "next-auth";
import React from "react";
import { trpc } from "../utils/trpc";

type Props = {
  session: Session;
};

export default function UserHome({ session }: Props) {
  const startGameMutation = trpc.game.startGame.useMutation();

  const generateGameId = async () => {
    startGameMutation.mutateAsync();
  };

  return (
    <>
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
            Generate Game
          </button>
        </div>
      </div>
    </>
  );
}
