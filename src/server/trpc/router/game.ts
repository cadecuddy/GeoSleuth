import { z } from "zod";
import cryptoRandomString from "crypto-random-string";
import { router, publicProcedure, protectedProcedure } from "../trpc";

// All endpoints for games from creation to completion
export const gameRouter = router({
  // Create the new game and add to User's list of games
  startGame: protectedProcedure.mutation(async ({ ctx }) => {
    const gameId: string = cryptoRandomString({
      length: 12,
      type: "url-safe",
    });

    try {
      await ctx.prisma.user.update({
        where: {
          id: ctx.session.user.id,
        },
        data: {
          games: {
            create: {
              id: gameId,
            },
          },
        },
      });
    } catch (error) {
      console.log(error);
      throw new Error("Failed to create game");
    }

    return gameId;
  }),
  // Returns all a user's games
  getUserGames: protectedProcedure.query(async ({ ctx }) => {
    const games = await ctx.prisma.user
      .findUnique({
        where: {
          id: ctx.session.user.id,
        },
      })
      .games();

    return games;
  }),
});
