import { PrismaClient } from "@prisma/client";
import { GetServerSideProps } from "next";
import { User } from "next-auth";
import React from "react";

// We can either check on the server side if the user exists
// and return a 404 if not, or we can check on the client side
// and have a skeleton loading state while we fetch the data.

// Prob best to load in client side with skeleton.

export default function UserProfile({ user }: { user: User }) {
  if (!user) {
    return <div>Not found</div>;
  }

  return <div>Hello {user.id}</div>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const prisma = new PrismaClient();
  // convert the query string to a string
  const userId = context.query.user as string;
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return {
    props: {
      user,
    },
  };
};
