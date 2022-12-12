import { Session } from "next-auth";
import React, { ReactElement } from "react";

type Props = {
  session: Session;
};

export default function UserHome({ session }: Props) {
  // const startGameMutation = trpc.game.startGame.useMutation();

  return (
    <>
      <div className="flex flex-col items-center">
        <p>
          Hello{" "}
          <span className="font-sans font-semibold text-indigo-500">
            {session.user?.name}
          </span>
        </p>
        <div className="space-x-10"></div>
      </div>
    </>
  );
}

UserHome.getLayout = (page: ReactElement) => page;
